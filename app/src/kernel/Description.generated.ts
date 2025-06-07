// Auto-generated file. Do not edit manually.

import { BitDepth, InstructionDescription } from "./InstructionDescription";
import { Matcher } from "./Matcher";
import { ArgumentPattern } from "./ArgumentPattern";

export const descriptions: InstructionDescription[] = [
new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lr.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lr.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lr.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lr.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sc.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sc.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sc.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sc.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoswap.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoswap.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoswap.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoswap.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoadd.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoadd.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoadd.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoadd.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoxor.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoxor.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoxor.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoxor.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoand.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoand.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoand.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoand.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoor.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoor.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoor.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amoor.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomin.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomin.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomin.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomin.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomax.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomax.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomax.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomax.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amominu.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amominu.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amominu.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amominu.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomaxu.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomaxu.w.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomaxu.w.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "amomaxu.w.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "lr.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "lr.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "lr.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "lr.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "sc.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "sc.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "sc.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "sc.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoswap.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoswap.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoswap.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoswap.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoadd.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoadd.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoadd.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoadd.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoxor.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoxor.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoxor.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoxor.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoand.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoand.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoand.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoand.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoor.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoor.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoor.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amoor.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomin.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomin.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomin.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomin.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomax.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomax.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomax.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomax.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amominu.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amominu.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amominu.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amominu.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomaxu.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomaxu.d.aq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "0"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomaxu.d.rl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "0"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("A", BitDepth.BIT_64, 32, "amomaxu.d.aqrl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addField(new Matcher("rl", "25", "1"))
  .addField(new Matcher("aq", "26", "1"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "par(regx)"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "illegal")
  .addField(new Matcher("illegal", "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15", "0000000000000000"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.addi4spn")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "000"))
  .addRestrict(new Matcher("", "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15", "0000000000000000"))
  .addRestrict(new Matcher("", "5,6,7,8,9,10,11,12", "00000000"))
  .addArg(new ArgumentPattern("rd'", "2,3,4", "regcx"))
  .addArg(new ArgumentPattern("uimm", "6,5,11,12,7,8,9,10", "unumx(2)"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.lw")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "010"))
  .addArg(new ArgumentPattern("rd'", "2,3,4", "regcx"))
  .addArg(new ArgumentPattern("uimm", "6,10,11,12,5", "unumx(2)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.sw")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "011"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .addArg(new ArgumentPattern("uimm", "6,10,11,12,5", "unumx(2)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.nop")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "000"))
  .addField(new Matcher("r", "7,8,9,10,11", "00000"))
  .addField(new Matcher("imm", "2,3,4,5,6,12", "000000"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.addi")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "000"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addArg(new ArgumentPattern("rs1/rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "2,3,4,5,6,12", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.li")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "010"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "2,3,4,5,6,12", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.addi16sp")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "110"))
  .addField(new Matcher("r", "7,8,9,10,11", "01000"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addArg(new ArgumentPattern("imm", "6,2,5,3,4,12", "numx(4)"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.lui")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "110"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "01000"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "2,3,4,5,6,12", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.andi")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "001"))
  .addField(new Matcher("funct2", "10,11", "01"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("imm", "2,3,4,5,6,12", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.sub")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct6", "10,11,12,13,14,15", "110001"))
  .addField(new Matcher("funct2", "5,6", "00"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.xor")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct6", "10,11,12,13,14,15", "110001"))
  .addField(new Matcher("funct2", "5,6", "10"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.or")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct6", "10,11,12,13,14,15", "110001"))
  .addField(new Matcher("funct2", "5,6", "01"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.and")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct6", "10,11,12,13,14,15", "110001"))
  .addField(new Matcher("funct2", "5,6", "11"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.j")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "101"))
  .addArg(new ArgumentPattern("imm", "3,4,5,11,2,7,6,9,10,8,12", "numx(1)"))
  .setJump({ label: "within", argIndex: 0 }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.beqz")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "011"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("imm", "3,4,10,11,2,5,6,12", "numx(1)"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.bnez")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "111"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("imm", "3,4,10,11,2,5,6,12", "numx(1)"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.lwsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "010"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "4,5,6,12,2,3", "unumx(2)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.swsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "011"))
  .addArg(new ArgumentPattern("rs2", "2,3,4,5,6", "regx"))
  .addArg(new ArgumentPattern("uimm", "9,10,11,12,7,8", "unumx(2)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.jr")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct4", "12,13,14,15", "0001"))
  .addField(new Matcher("r", "2,3,4,5,6", "00000"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("rs1", "7,8,9,10,11", "regx"))
  .setJump({ label: "out" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.mv")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct4", "12,13,14,15", "0001"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addRestrict(new Matcher("", "2,3,4,5,6", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "2,3,4,5,6", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.ebreak")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct4", "12,13,14,15", "0001"))
  .addField(new Matcher("r", "7,8,9,10,11", "00000"))
  .addField(new Matcher("r", "2,3,4,5,6", "00000"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.jalr")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct4", "12,13,14,15", "1001"))
  .addField(new Matcher("r", "2,3,4,5,6", "00000"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("rs1", "7,8,9,10,11", "regx"))
  .setJump({ label: "out" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.add")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct4", "12,13,14,15", "1001"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addRestrict(new Matcher("", "2,3,4,5,6", "00000"))
  .addArg(new ArgumentPattern("rs1/rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs2", "2,3,4,5,6", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64, 16, "c.fld")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "100"))
  .addArg(new ArgumentPattern("rd'", "2,3,4", "regcf"))
  .addArg(new ArgumentPattern("uimm", "10,11,12,5,6", "unumx(3)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64, 16, "c.fsd")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "101"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcf"))
  .addArg(new ArgumentPattern("uimm", "10,11,12,5,6", "unumx(3)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64, 16, "c.fldsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("uimm", "5,6,12,2,3,4", "unumx(3)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32 | BitDepth.BIT_64, 16, "c.fsdsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "101"))
  .addArg(new ArgumentPattern("rs2", "2,3,4,5,6", "regf"))
  .addArg(new ArgumentPattern("uimm", "10,11,12,7,8,9", "unumx(3)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_128, 16, "c.lq")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "100"))
  .addArg(new ArgumentPattern("rd'", "2,3,4", "regcx"))
  .addArg(new ArgumentPattern("uimm", "11,12,5,6,10", "unumx(4)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_128, 16, "c.sq")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "101"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .addArg(new ArgumentPattern("uimm", "11,12,5,6,10", "unumx(4)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_128, 16, "c.srli")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "001"))
  .addField(new Matcher("funct2", "10,11", "00"))
  .addField(new Matcher("imm", "2,3,4,5,6,12", "000000"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "const(64)"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_128, 16, "c.srai")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "001"))
  .addField(new Matcher("funct2", "10,11", "10"))
  .addField(new Matcher("imm", "2,3,4,5,6,12", "000000"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "const(64)"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_128, 16, "c.slli")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "000"))
  .addField(new Matcher("imm", "2,3,4,5,6,12", "000000"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("rs1/rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "const(64)"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_128, 16, "c.lqsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "100"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "6,12,2,3,4,5", "unumx(4)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_128, 16, "c.sqsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "101"))
  .addArg(new ArgumentPattern("rs2", "2,3,4,5,6", "regx"))
  .addArg(new ArgumentPattern("uimm", "11,12,7,8,9,10", "unumx(4)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32, 16, "c.flw")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "110"))
  .addArg(new ArgumentPattern("rd'", "2,3,4", "regcf"))
  .addArg(new ArgumentPattern("uimm", "6,10,11,12,5", "unumx(2)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32, 16, "c.fsw")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "111"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcf"))
  .addArg(new ArgumentPattern("uimm", "6,10,11,12,5", "unumx(2)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32, 16, "c.jal")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "100"))
  .addArg(new ArgumentPattern("imm", "3,4,5,11,2,7,6,9,10,8,12", "numx(1)"))
  .setJump({ label: "within", argIndex: 0 }),

new InstructionDescription("C", BitDepth.BIT_32, 16, "c.srli")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "001"))
  .addField(new Matcher("funct2", "10,11", "00"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addRestrict(new Matcher("", "12", "1"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32, 16, "c.srai")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "001"))
  .addField(new Matcher("funct2", "10,11", "10"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addRestrict(new Matcher("", "12", "1"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32, 16, "c.slli")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "000"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addRestrict(new Matcher("", "12", "1"))
  .addArg(new ArgumentPattern("rs1/rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32, 16, "c.flwsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "110"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("uimm", "4,5,6,12,2,3", "unumx(2)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_32, 16, "c.fswsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "111"))
  .addArg(new ArgumentPattern("rs2", "2,3,4,5,6", "regf"))
  .addArg(new ArgumentPattern("uimm", "9,10,11,12,7,8", "unumx(2)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.ld")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "110"))
  .addArg(new ArgumentPattern("rd'", "2,3,4", "regcx"))
  .addArg(new ArgumentPattern("uimm", "10,11,12,5,6", "unumx(3)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.sd")
  .addField(new Matcher("opcode", "0,1", "00"))
  .addField(new Matcher("funct3", "13,14,15", "111"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .addArg(new ArgumentPattern("uimm", "10,11,12,5,6", "unumx(3)"))
  .addArg(new ArgumentPattern("rs1'", "7,8,9", "regcx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.addiw")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "100"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("rs1/rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "2,3,4,5,6,12", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.srli")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "001"))
  .addField(new Matcher("funct2", "10,11", "00"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.srai")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct3", "13,14,15", "001"))
  .addField(new Matcher("funct2", "10,11", "10"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.subw")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct6", "10,11,12,13,14,15", "111001"))
  .addField(new Matcher("funct2", "5,6", "00"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.addw")
  .addField(new Matcher("opcode", "0,1", "10"))
  .addField(new Matcher("funct6", "10,11,12,13,14,15", "111001"))
  .addField(new Matcher("funct2", "5,6", "10"))
  .addArg(new ArgumentPattern("rs1'/rd'", "7,8,9", "regcx"))
  .addArg(new ArgumentPattern("rs2'", "2,3,4", "regcx"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.slli")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "000"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addRestrict(new Matcher("", "2,3,4,5,6,12", "000000"))
  .addArg(new ArgumentPattern("rs1/rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "2,3,4,5,6,12", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.ldsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "110"))
  .addRestrict(new Matcher("", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "5,6,12,2,3,4", "unumx(3)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("C", BitDepth.BIT_64 | BitDepth.BIT_128, 16, "c.sdsp")
  .addField(new Matcher("opcode", "0,1", "01"))
  .addField(new Matcher("funct3", "13,14,15", "111"))
  .addArg(new ArgumentPattern("rs2", "2,3,4,5,6", "regx"))
  .addArg(new ArgumentPattern("uimm", "10,11,12,7,8,9", "unumx(3)"))
  .setArgFormat("_, _(sp)")
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "flw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110000"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmadd.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100001"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmsub.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110001"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fnmsub.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101001"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fnmadd.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111001"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fadd.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsub.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmul.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fdiv.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsqrt.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "11010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnj.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnjn.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnjx.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmin.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmax.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.s.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.d.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "feq.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "flt.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fle.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fclass.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.w.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.wu.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.d.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.d.wu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_64, 32, "fcvt.l.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_64, 32, "fcvt.lu.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_64, 32, "fmv.x.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_64, 32, "fcvt.d.l")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_64, 32, "fcvt.d.lu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("D", BitDepth.BIT_64, 32, "fmv.d.x")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01111"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "flw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110000"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmadd.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100001"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmsub.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110001"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fnmsub.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101001"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fnmadd.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111001"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fadd.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsub.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmul.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fdiv.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsqrt.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "11010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnj.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnjn.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnjx.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmin.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmax.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.w.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.wu.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmv.x.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "feq.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "flt.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fle.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fclass.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.s.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.s.wu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmv.w.x")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01111"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_64, 32, "fcvt.l.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_64, 32, "fcvt.lu.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_64, 32, "fcvt.s.l")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("F", BitDepth.BIT_64, 32, "fcvt.s.lu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "mul")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "mulh")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "mulhsu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "mulhu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "div")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "divu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "rem")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "011"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "remu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "111"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_64, 32, "mulw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_64, 32, "divw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_64, 32, "divuw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_64, 32, "remw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "011"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("M", BitDepth.BIT_64, 32, "remuw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "111"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "flw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110000"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110010"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmadd.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100001"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmsub.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110001"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fnmsub.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101001"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fnmadd.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111001"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fadd.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsub.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmul.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fdiv.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsqrt.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "11010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnj.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnjn.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnjx.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmin.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmax.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.s.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.q.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.d.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.q.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "feq.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "flt.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fle.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fclass.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.w.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.wu.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.q.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.q.wu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_64, 32, "fcvt.l.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_64, 32, "fcvt.lu.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_64, 32, "fcvt.q.l")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Q", BitDepth.BIT_64, 32, "fcvt.q.lu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "11"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32, 32, "slli")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32, 32, "srli")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32, 32, "srai")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "add")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sub")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "slt")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sltu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "and")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "111"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "or")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "011"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "xor")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sll")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "srl")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sra")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "nop")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "000000000000"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "mv")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "000000000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "addi")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "slti")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "seqz")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "100000000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sltiu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "andi")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "111"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "ori")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "011"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "not")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "111111111111"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "xori")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lh")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lb")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lhu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lbu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100010"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "7,8,9,10,11,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sh")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100010"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "7,8,9,10,11,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "sb")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100010"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "7,8,9,10,11,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "lui")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110110"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "auipc")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "beq")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "bne")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "blt")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "bltu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "011"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "bge")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "bgeu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "111"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "bgt")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "001"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "bgtu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "011"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "ble")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "bleu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
  .addField(new Matcher("funct3", "12,13,14", "111"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "double"))
  .setJump({ label: "within", argIndex: 2 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "j")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111011"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addArg(new ArgumentPattern("imm", "21,22,23,24,25,26,27,28,29,30,20,12,13,14,15,16,17,18,19,31", "double"))
  .setJump({ label: "within", argIndex: 0 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "jal")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111011"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "21,22,23,24,25,26,27,28,29,30,20,12,13,14,15,16,17,18,19,31", "double"))
  .setJump({ label: "within", argIndex: 1 }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "jalr")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110011"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "21,22,23,24,25,26,27,28,29,30,20,12,13,14,15,16,17,18,19,31", "double"))
  .setJump({ label: "out" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "pause")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("fm", "28,29,30,31", "0000"))
  .addField(new Matcher("pred", "24,25,26,27", "1000"))
  .addField(new Matcher("succ", "20,21,22,23", "0000"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fence")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("fm", "28,29,30,31", "0000"))
  .addField(new Matcher("pred", "24,25,26,27", "1111"))
  .addField(new Matcher("succ", "20,21,22,23", "1111"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fence")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("fm", "28,29,30,31", "0000"))
  .addArg(new ArgumentPattern("pred", "24,25,26,27", "fence"))
  .addArg(new ArgumentPattern("succ", "20,21,22,23", "fence"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fence.tso")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("fm", "28,29,30,31", "0001"))
  .addField(new Matcher("pred", "24,25,26,27", "1100"))
  .addField(new Matcher("succ", "20,21,22,23", "1100"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "ecall")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "000000000000"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "ebreak")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "100000000000"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "addw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "subw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "sllw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "srlw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "sraw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "slli")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("funct7", "26,27,28,29,30,31", "000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "srli")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "26,27,28,29,30,31", "000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "srai")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "26,27,28,29,30,31", "000010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "addiw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "slliw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "srliw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101100"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "sraiw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101100"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "unum"))
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "ld")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "lwu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
  .addField(new Matcher("funct3", "12,13,14", "011"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("I", BitDepth.BIT_64, 32, "sw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100010"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regx"))
  .addArg(new ArgumentPattern("imm", "7,8,9,10,11,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setArgFormat("_, _(_)")
  .setJump({ label: "none" }),

new InstructionDescription("Zawrs", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "wrs.nto")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "101100000000"))
  .setJump({ label: "none" }),

new InstructionDescription("Zawrs", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "wrs.sto")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "101110000000"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "flw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110000"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110010"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmadd.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100001"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmsub.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110001"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fnmsub.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101001"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fnmadd.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111001"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fadd.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsub.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmul.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fdiv.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsqrt.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "11010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnj.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnjn.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fsgnjx.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmin.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmax.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.s.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "00"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.h.s")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.d.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.h.d")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.q.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "10"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.h.q")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "feq.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "flt.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fle.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fclass.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.w.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.wu.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmv.x.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.h.w")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fcvt.h.wu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fmv.h.x")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct3", "12,13,14", "000"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01111"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_64, 32, "fcvt.l.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_64, 32, "fcvt.lu.h")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regf"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_64, 32, "fcvt.h.l")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zfh", BitDepth.BIT_64, 32, "fcvt.h.lu")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
  .addField(new Matcher("fmt", "25,26", "01"))
  .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
  .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regf"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
  .setJump({ label: "none" }),

new InstructionDescription("Zicsr", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "csrrw")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("Zicsr", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "csrrs")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("funct3", "12,13,14", "010"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("Zicsr", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "csrrc")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("funct3", "12,13,14", "110"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "regx"))
  .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("Zicsr", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "csrrwi")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("funct3", "12,13,14", "101"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "15,16,17,18,19", "unum"))
  .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("Zicsr", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "csrrsi")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("funct3", "12,13,14", "011"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "15,16,17,18,19", "unum"))
  .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("Zicsr", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "csrrci")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
  .addField(new Matcher("funct3", "12,13,14", "111"))
  .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "regx"))
  .addArg(new ArgumentPattern("uimm", "15,16,17,18,19", "unum"))
  .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "num"))
  .setJump({ label: "none" }),

new InstructionDescription("Zifencei", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "fence.i")
  .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
  .addField(new Matcher("funct3", "12,13,14", "100"))
  .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
  .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
  .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "000000000000"))
  .setJump({ label: "none" })
];
