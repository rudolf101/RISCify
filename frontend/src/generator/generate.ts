import * as fs from 'fs';
import * as yaml from 'js-yaml';

type Param = {
  mnemonic: string;
  span: string;
  display: string;
}

type Field = {
  mnemonic: string;
  span: string;
  value: string;
}

type Instruction = {
  name: string;
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

const loadYAML = (filePath: string): YAMLData => {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as YAMLData;
    return data;
  } catch (e) {
    throw Error(`Error reading YAML file: ${e}`);
  }
};

interface Handle {
  go: () => Apply[][]
}

interface Provide {
  getSets: () => InstructionSet[]
  getField: (name: string) => Field
  getParam: (name: string) => Param
}

class Provider implements Provide {
  private data: YAMLData
  
  constructor(data: YAMLData) {
    this.data = data 
  }

  public getSets(): InstructionSet[] {
    return this.data.Sets
  }

  public getField(name: string): Field {
    return this.data.Fields[name]
  }

  public getParam(name: string): Param {
    return this.data.Args[name]
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
  private rules: Map<string, (input: number) => string> = new Map();

  constructor() {
    this.rules.set("regx", (input: number) => "x" + input);
    this.rules.set("regf", (input: number) => "f" + input);
    this.rules.set("num", (input: number) => String(input));
    this.rules.set("unum", (input: number) => String(input));
    this.rules.set("unum", (input: number) => String(input));
    // this.rules.set("pnum", (input: string) => input);
    this.rules.set("double", (input: number) => String(input));
    // this.rules.set("fence", (input: string) => input);
  }

  public display(prefix: string, value: number): string {
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
  private input: InputValue[]
  
  constructor(provider: Provide, input: string) {
    this.provider = provider 

    this.input = [];
    for (let i = 0; i < input.length; i += 32) {
      this.input.push(new InputValue(input.slice(i, i + 32).split('').reverse().join('')));
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

const m = new Handler(new Provider(loadYAML('input.yaml')), "0000000001100010100000111011001100000000011000101000001110110011") 
const ms = m.go()
ms.forEach((vs) => vs.forEach((v) => console.log(v)))







// add x7, x5, x6
// funct7  | rs2   |  rs1  | funct3 | rd    | opcode |
// 0000000 | 00110 | 00101 | 000    | 00111 | 01100  | 11



// fields: [ Fields.rv32i_opcode_regreg, Fields.rv32i_funct3_add, Fields.rv32i_funct7_normal ]

// rv32i_opcode_regreg: { mnemonic: "opcode", span: "2,6"  , value: "00110"        }
// rv32i_funct3_add:    { mnemonic: "funct3", span: "12:14", value: "000"          }
// rv32i_funct7_normal: { mnemonic: "funct7", span: "25:31", value: "0000000"      }

// rv32i_rd:        { mnemonic: "rd"  , span: "7:11"             , display: "regx"   }
// rv32i_rs1:       { mnemonic: "rs1" , span: "15:19"            , display: "regx"   }
// rv32i_rs2:       { mnemonic: "rs2" , span: "20:24"            , display: "regx"   }


// 00000000011000101000001110110011