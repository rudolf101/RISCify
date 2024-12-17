// import * as fs from 'fs';
// import * as yaml from 'js-yaml';
import { YAMLDataGen } from './generatedData';
import './models';
import { YAMLData, Instruction, InstructionSet, Field, Param, Apply, Arg } from './models';
// const path = require('path');

interface Handle {
  go: () => Apply[][]
}

interface Provide {
  getSets: () => InstructionSet[]
  getField: (name: string) => Field
  getParam: (name: string) => Param
}

export class Provider implements Provide {
  private data: YAMLData[] = YAMLDataGen;
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

  public getInstruction(mnemonic: string): Instruction {
    for (const set of this.getSets()) {
      for (const instr of set.instructions) {
        if (instr.mnemonic == mnemonic) {
          return instr
        }
      }
    }
    throw new Error(`Instruction not found (${mnemonic})`);
  }
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
  private rules: Map<string, (value: string, idx: number) => [string, number]> = new Map();
  private params: Param[];
  private spanHandler: HandleSpan;

  private pnum(value: string, idx: number) {
    if (idx + 1 >= this.params.length) {
      throw new Error(`Index out of bounds for params: '${this.params}'`);
    }

    const nextParam = this.params[idx + 1];
    return  this.toNum(value, true) + "(" + this.display(idx + 1, nextParam.display, this.spanHandler.getSubstring(nextParam.span)) + ")"; 
  }

  constructor(params: Param[], spanHandler: HandleSpan) {
    this.params = params;
    this.spanHandler = spanHandler;

    this.rules.set("regx", (value: string, idx: number) => ["x" + this.toNum(value, false), idx + 1]);
    this.rules.set("regf", (value: string, idx: number) => ["f" + this.toNum(value, false), idx + 1]);
    this.rules.set("num", (value: string, idx: number) => [String(this.toNum(value, true)), idx + 1]);
    this.rules.set("unum", (value: string, idx: number) => [String(this.toNum(value, false)), idx + 1 ]);
    this.rules.set("pnum", (value: string, idx: number) => [this.pnum(value, idx), idx + 2]);
    this.rules.set("double", (value: string, idx: number) => [String(2 * this.toNum(value, true)), idx + 1] );
    this.rules.set("fence", (value: string, idx: number) => [this.parseFence(value), idx + 1]);
    this.rules.set("rm", (value: string, idx: number) => [this.parseRm(value), idx + 1]);
  }

  private toNum(bits: string, signed: boolean = true): number {
    let number = 0;
    let maximum = 1;

    for (const c of bits.split('')) {
      if (c === '1') {
        number += maximum;
      }
      maximum *= 2;
    }

    if (!signed || number < maximum / 2) {
      return number;
    }
    return number - maximum;
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

  public display(idx: number, prefix: string, value: string): [string, number] {
    const rule = this.rules.get(prefix);

    if (rule) {
      return rule(value, idx);
    }

    throw new Error(`No rule found for key: '${prefix}'`);
  }
}

class InputValue {
  private spanHandler: HandleSpan

  constructor(input: string) {
    this.spanHandler = new SpanHandler(input)
  }
  

  public haveField(field: Field): boolean {
    return this.spanHandler.compareWithValue(field.span, field.value)
  }

  public getArgs(params: Param[]): Arg[] {
    const display: Display = new Display(params, this.spanHandler)
    const acc: Arg[] = []

    let i = 0
    while (i < params.length) {
      const [v, ii] = display.display(i, params[i].display, this.spanHandler.getSubstring(params[i].span))
      acc.push({value: v})
      i = ii
    }
    
    return acc

    // for (let i = 0; i < params.length; i++) {
    //   const [v, ii] = display.display(i, params[i].display, this.spanHandler.getSubstring(params[i].span))
    //   acc.push({value: v})
    // }



    // return params.map((param, idx) => ({
    //   value: display.display(idx, param.display, this.spanHandler.getSubstring(param.span))
    // }))
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
            case "1111100":
              return 48;
            case "1111101":
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
        Args: value.getArgs(instruction.args.map((x) => this.provider.getParam(x))),
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

export class Disassembler {
  private hexToBinary(hexString: string): string {
    const hexArray = hexString.trim().split(/\s+/); 
  
    const binaryString = hexArray
      .map((hex) => {
        return parseInt(hex, 16).toString(2).padStart(8, '0').split('').reverse().join('');
      })
      .join('');
  
    return binaryString;
  }  

  dissasm(input: string): Apply[][] {
    const executor = new Handler(new Provider(), this.hexToBinary(input)) 
    const ret = executor.go()
    return ret;
  }
}
export default { Disassembler, Provider};



// const input = `
// 0x0000003f91b19ffe:   06 ec 00 10 aa 84 97 60 e4 ff e7 80 60 6b 11 e1
// 0x0000003f91b1a00e:   05 45 88 e0 e2 60 42 64 a2 64 05 61 82 80 01 11
// 0x0000003f91b1a01e:   06 ec 22 e8 26 e4 00 10 aa 84 97 60 e4 ff e7 80
// 0x0000003f91b1a02e:   20 69 9c 60 b3 04 f5 40 97 60 e4 ff e7 80 20 6a
// 0x0000003f91b1a03e:   53 f5 24 d2 e2 60 42 64 d3 77 25 d2 a2 64 53 75
// 0x0000003f91b1a04e:   f5 1a 05 61 82 80 01 11 06 ec 22 e8 26 e4 00 10
// 0x0000003f91b1a05e:   aa 84 97 60 e4 ff e7 80 a0 65 9c 60 b3 04 f5 40
// 0x0000003f91b1a06e:   97 60 e4 ff e7 80 a0 66 d3 f7 24 d2 d3 76 25 d2
// 0x0000003f91b1a07e:   97 b7 0c 00 07 b7 a7 92 e2 60 d3 f7 d7 1a 42 64
// 0x0000003f91b1a08e:   a2 64 05 61 d3 f7 e7 12 53 95 27 c2 82 80 01 11
// 0x0000003f91b1a09e:   22 e8 26 e4 06 ec 00 10 aa 84 97 60 e4 ff e7 80
// 0x0000003f91b1a0ae:   20 61 9c 60 e2 60 42 64 a2 64 1d 8d 05 61 82 80
// 0x0000003f91b1a0be:   41 11 22 e4 00 08 85 47 23 0c 05 00 23 34 05 00
// 0x0000003f91b1a0ce:   23 00 c5 00 a3 00 f5 00 0c f5 23 38 05 02 01 e6
// 0x0000003f91b1a0de:   22 64 41 01 82 80 23 30 05 02 22 64 21 05 41 01
// 0x0000003f91b1a0ee:   6f f0 ff de 41 11 22 e4 1b 17 87 00 00 08 55 8f
// 0x0000003f91b1a0fe:   23 0c 05 00 23 34 05 00 23 10 e5 00 0c f5 23 38
// 0x0000003f91b1a10e:   05 02 81 e6 22 64 41 01 82 80 10 f1 22 64 21 05
// 0x0000003f91b1a11e:   41 01 6f f0 df db 41 11 22 e4 00 08 b3 37 c0 00
// 0x0000003f91b1a12e:   23 00 f5 00 85 47 23 0c 05 00 23 34 05 00 a3 00
// 0x0000003f91b1a13e:   f5 00 0c f5 10 f9 01 e6 22 64 41 01 82 80 23 30
// 0x0000003f91b1a14e:   05 02 22 64 21 05 41 01 6f f0 7f d8 83 47 05 00
// 0x0000003f91b1a15e:   91 e3 82 80 5d 71 a2 e0 26 fc 4a f8 86 e4 4e f4
// 0x0000003f91b1a16e:   52 f0 80 08 13 09 85 00 aa 84 4a 85 ef f0 1f d9
// 0x0000003f91b1a17e:   88 70 11 cd 94 64 98 68 9c 6c 93 05 04 fb 23 38
// 0x0000003f91b1a18e:   d4 fa 23 3c e4 fa 23 30 f4 fc ef f0 1f d3 83 c7
// 0x0000003f91b1a19e:   14 00 8d cb 83 b9 04 03 84 74 63 8d 09 02 4a 85
// 0x0000003f91b1a1ae:   ef f0 1f d9 06 64 a6 60 42 79 02 7a a6 85 ce 87
// 0x0000003f91b1a1be:   e2 74 a2 79 53 06 05 e2 17 a5 15 00 13 05 a5 a2
// 0x0000003f91b1a1ce:   61 61 82 87 a6 60 06 64 e2 74 42 79 a2 79 02 7a
// 0x0000003f91b1a1de:   61 61 82 80 97 a9 22 00 83 b9 e9 2a 4a 85 03 ba
// 0x0000003f91b1a1ee:   09 00 ef f0 ff d4 d3 06 05 e2 52 85 26 86 97 a5
// `;
// const result = processHexDump(input);







// "11000110000000000000000000000000"

// console.log("\n################### beq x0 x0 0\n")

// const m1 = new Handler(new Provider("absolutePath"), "11000110000000000000000000000000") 
// const ms1 = m1.go()
// ms1.forEach((vs) => vs.forEach((v) => console.log(v)))


// console.log("\n################### beq x16 x0 0\n")
// const m2 = new Handler(new Provider(absolutePath), "11000110000000010000000000000000") 
// const ms2 = m2.go()
// ms2.forEach((vs) => vs.forEach((v) => console.log(v)))


// console.log("\n################### beq x17 x0 0\n")
// const m3 = new Handler(new Provider(absolutePath), "11000110000000010001000000000000") 
// const ms3 = m3.go()
// ms3.forEach((vs) => vs.forEach((v) => console.log(v)))


// console.log("\n################### beq x17 x0 2048\n")
// const m4 = new Handler(new Provider(absolutePath), "11000110010000010001000000000000") 
// const ms4 = m4.go()
// ms4.forEach((vs) => vs.forEach((v) => console.log(v)))

// console.log("\n################### beq x17 x0 -2048\n")
// const m5 = new Handler(new Provider(absolutePath), "11000110110000010001000000000000") 
// const ms5 = m5.go()
// ms5.forEach((vs) => vs.forEach((v) => console.log(v)))


// console.log("\n################### beq x17 x0 -2048 beq x17 x0 2048\n")
// const m6 = new Handler(new Provider(absolutePath), "1100011011000001000100000000000011000110010000010001000000000000") 
// const ms6 = m6.go()
// ms6.forEach((vs) => vs.forEach((v) => console.log(v)))





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
