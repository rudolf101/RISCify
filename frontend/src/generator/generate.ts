import * as fs from 'fs';
import * as yaml from 'js-yaml';
const path = require('path');

type Param = {
  name: string;
  span: string;
  display: string;
}

type Field = {
  name: string;
  span: string;
  value: string;
}

type Instruction = {
  mnemonic: string;
  fields: string[];
  args: string[];
}

type InstructionSet = {
  name: string;
  size: string;
  instructions: Instruction[];
}

type YAMLData = {
  Args: { [key: string]: Param };
  Fields: { [key: string]: Field };
  Sets: InstructionSet[];
}

interface Handle {
  go: () => Apply[][]
}

interface Provide {
  getSets: () => InstructionSet[]
  getField: (name: string) => Field
  getParam: (name: string) => Param
}

class Provider implements Provide {
  private data: YAMLData[] = [];

  constructor(folderPath: string) {
    this.loadAllYAMLFiles(folderPath);
  }

  private loadYAML(filePath: string): YAMLData {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return yaml.load(fileContents) as YAMLData;
    } catch (e) {
      throw new Error(`Error reading YAML file (${filePath}): ${e}`);
    }
  }

  private loadAllYAMLFiles(folderPath: string): void {
    try {
      const files = fs.readdirSync(folderPath);
      files.forEach((file) => {
        const filePath = path.join(folderPath, file);
        if (file.endsWith('.yml') || file.endsWith('.yaml')) {
          console.log(file)
          const yamlData = this.loadYAML(filePath);
          this.data.push(yamlData);
        }
      });
    } catch (e) {
      throw new Error(`Error reading folder (${folderPath}): ${e}`);
    }
  }

  public getSets(): InstructionSet[] {
    return this.data.flatMap((fileData) => fileData.Sets || []);
  }

  public getField(name: string): Field {
    for (const fileData of this.data) {
      if (fileData.Fields && fileData.Fields[name]) {
        return fileData.Fields[name];
      }
    }
    throw new Error(`Field not found (${name})`);
  }

  public getParam(name: string): Param {
    for (const fileData of this.data) {
      if (fileData.Args && fileData.Args[name]) {
        return fileData.Args[name];
      }
    }
    throw new Error(`Param not found (${name})`);
  }
}

type Arg = {
  value: string;
}

type Apply = {
  Instruction: Instruction
  Args: Arg[]
}

interface HandleSpan {
  getSubstring: (span: string) => string
  compareWithValue: (span: string, value: string) => boolean
}

class SpanHandler implements HandleSpan {
  private data: string;

  constructor(input: string) {
    this.data = input;
  }

  public getSubstring(span: string): string {
    const segments = span.split(",");
    let result = "";

    for (const segment of segments) {
      if (segment.includes(":")) {
        const [start, end] = segment.split(":").map(Number);
        result += this.data.slice(start, end + 1);
      } else {
        const index = Number(segment);
        result += this.data[index] ?? ""; 
      }
    }

    return result;
  }

  public compareWithValue(span: string, value: string): boolean {
    return this.getSubstring(span) === value;
  }
}

class Display {
  private rules: Map<string, (value: number | string) => string> = new Map();

  constructor() {
    this.rules.set("regx", (value: number) => "x" + value);
    this.rules.set("regf", (value: number) => "f" + value);
    this.rules.set("num", (value: number) => String(value));
    this.rules.set("unum", (value: number) => String(value));
    this.rules.set("pnum", (value: number) => "%" + value + "({0})");
    this.rules.set("double", (value: number) => String(2 * value));
    this.rules.set("fence", (value: string) => this.parseFence(value));
    this.rules.set("rm", (value: string) => this.parseRm(value));
  }

  private parseRm(value: string): string {
    const rmMap: Record<string, string> = {
      "000": "rne",
      "100": "rtz",
      "010": "rdn",
      "110": "rup",
      "001": "rmm",
      "101": "-",
      "011": "-",
      "111": "dyn",
    };
    const key = value.slice(0, 3);
    return rmMap[key] || "unknown";
  }

  private parseFence(value: string): string {
    return `fence(${value.slice(0, 4)})`;
  }

  public display(prefix: string, value: number | string): string {
    const rule = this.rules.get(prefix);

    if (rule) {
      return rule(value);
    }

    throw new Error(`No rule found for key: '${prefix}'`);
  }
}

class InputValue {
  private spanHandler: HandleSpan
  private display: Display = new Display()

  constructor(input: string) {
    this.spanHandler = new SpanHandler(input)
  }
  
  public haveField(field: Field): boolean {
    return this.spanHandler.compareWithValue(field.span, field.value)
  }

  public getArgs(params: Param[]): Arg[] {
    return params.map((param) => ({
      value: this.display.display(param.display, parseInt(this.spanHandler.getSubstring(param.span), 2))
    }))
  }

}

class Handler implements Handle {
  private provider: Provide
  private input: InputValue[] = []
  
  constructor(provider: Provide, input: string) {
    this.provider = provider 

    let i = 0;
    while (i < input.length) {
      const segmentLength = this.calculateSegmentLength(input.slice(i));
      this.input.push(new InputValue(input.slice(i, i + segmentLength)));
      i += segmentLength;
    }
  }

  private calculateSegmentLength(bits: string): number {
    const prefix = bits.slice(0, 2); 

    switch (prefix) {
      case "11": {
        const bbb = bits.slice(2, 5); 
        if (bbb === "111") {
          const extendedPrefix = bits.slice(0, 7); 
          switch (extendedPrefix) {
            case "111110":
              return 48;
            case "1111110":
              return 64;
            case "1111111": {
              const multiplierBits = bits.slice(12, 14); 
              const multiplier = parseInt(multiplierBits, 2); 
              return 80 + 16 * multiplier;
            }
          }
        }
        return 32; 
      }
      default:
        return 16; 
    }
  }


  public go(): Apply[][] {
    return this.input.map((value) => this.provider.getSets().flatMap((set) => this.mkApplies(set.instructions, value)))
  }

  private mkApplies(instructions: Instruction[], value: InputValue): Apply[] {
    const isFit = (instruction: Instruction): boolean => {
      return instruction.fields.every((name) => value.haveField(this.provider.getField(name)));
    };

    const mkApply = (instruction: Instruction): Apply => {
      return { 
        Instruction: instruction, 
        Args: value.getArgs(instruction.args.map((x) => this.provider.getParam(x))) 
      }
    }

    return instructions.reduce((acc: Apply[], instruction) => {
      if (isFit(instruction)) {
        acc.push(mkApply(instruction));
      }
      return acc;
    }, []);
    
  }

}


const relativePath = '../../../dsl';
const absolutePath = path.resolve(relativePath);

// const m = new Handler(new Provider(absolutePath), "0100000001100010100000111011001100000000011000101000001110110011") 
const m = new Handler(new Provider(absolutePath), "11000111000000000000000000000000") 
const ms = m.go()
ms.forEach((vs) => vs.forEach((v) => console.log(v)))




// 0:6     8:11,25:30,7,31      12:14  15:19  20:24   
// 1100011                      000    regx  regx

// 0     6   7    8 11    12 14   15 19  20 24   25:30    31
// 1100011   0    0000     000    00000  00000   000000   0

// 11000110000000000000000000000000


// add x7, x5, x6
// funct7  | rs2   |  rs1  | funct3 | rd    | opcode |
// 0000000 | 00110 | 00101 | 000    | 00111 | 01100  | 11

// 

// fields: [ Fields.rv32i_opcode_regreg, Fields.rv32i_funct3_add, Fields.rv32i_funct7_normal ]

// rv32i_opcode_regreg: { mnemonic: "opcode", span: "2,6"  , value: "00110"        }
// rv32i_funct3_add:    { mnemonic: "funct3", span: "12:14", value: "000"          }
// rv32i_funct7_normal: { mnemonic: "funct7", span: "25:31", value: "0000000"      }

// rv32i_rd:        { mnemonic: "rd"  , span: "7:11"             , display: "regx"   }
// rv32i_rs1:       { mnemonic: "rs1" , span: "15:19"            , display: "regx"   }
// rv32i_rs2:       { mnemonic: "rs2" , span: "20:24"            , display: "regx"   }


// 00000000011000101000001110110011