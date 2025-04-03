// Auto-generated file. Do not edit manually.

import { InstructionDescription } from "../kernel/InstructionDescription";
import { Matcher } from "../kernel/Matcher";
import { ArgumentPattern } from "../kernel/ArgumentPattern";

export const INSTRUCTIONS: InstructionDescription[] = [
    new InstructionDescription("A", 3, 32, "lr.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "lr.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "lr.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "lr.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "sc.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "sc.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "sc.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "sc.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoswap.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoswap.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoswap.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoswap.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoadd.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoadd.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoadd.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoadd.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoxor.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoxor.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoxor.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoxor.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoand.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoand.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoand.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoand.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoor.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoor.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoor.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amoor.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomin.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomin.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomin.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomin.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomax.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomax.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomax.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomax.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amominu.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amominu.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amominu.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amominu.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomaxu.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomaxu.w.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomaxu.w.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 3, 32, "amomaxu.w.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "lr.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "lr.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "lr.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "lr.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "sc.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "sc.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "sc.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "sc.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoswap.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoswap.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoswap.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoswap.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoadd.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoadd.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoadd.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoadd.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoxor.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoxor.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoxor.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoxor.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoand.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoand.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoand.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoand.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoor.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoor.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoor.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amoor.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomin.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomin.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomin.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomin.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomax.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomax.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomax.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomax.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amominu.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amominu.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amominu.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amominu.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomaxu.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomaxu.d.aq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "0"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomaxu.d.rl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "0"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("A", 2, 32, "amomaxu.d.aqrl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addField(new Matcher("rl", "25", "1"))
        .addField(new Matcher("aq", "26", "1"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "flw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110000"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fsw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fmadd.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100001"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fmsub.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110001"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fnmsub.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101001"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fnmadd.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111001"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fadd.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fsub.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fmul.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fdiv.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fsqrt.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "11010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fsgnj.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fsgnjn.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fsgnjx.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fmin.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fmax.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fcvt.s.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fcvt.d.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "feq.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "flt.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fle.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "class.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fcvt.w.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fcvt.wu.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fcvt.d.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 3, 32, "fcvt.d.wu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 2, 32, "fcvt.l.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 2, 32, "fcvt.lu.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 2, 32, "fmv.x.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 2, 32, "fcvt.d.l")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 2, 32, "fcvt.d.lu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("D", 2, 32, "fmv.d.x")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01111"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "flw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110000"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fsw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fmadd.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100001"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fmsub.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110001"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fnmsub.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101001"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fnmadd.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111001"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fadd.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fsub.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fmul.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fdiv.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fsqrt.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "11010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fsgnj.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fsgnjn.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fsgnjx.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fmin.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fmax.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fcvt.w.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fcvt.wu.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fmv.x.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "feq.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "flt.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fle.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "class.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fcvt.s.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fcvt.s.wu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 3, 32, "fmv.w.x")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01111"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 2, 32, "fcvt.l.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 2, 32, "fcvt.lu.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 2, 32, "fcvt.s.l")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("F", 2, 32, "fcvt.s.lu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 3, 32, "mul")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 3, 32, "mulh")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 3, 32, "mulhsu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 3, 32, "mulhu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 3, 32, "div")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 3, 32, "divu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 3, 32, "rem")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "011"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 3, 32, "remu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "111"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 2, 32, "mulw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 2, 32, "divw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 2, 32, "divuw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 2, 32, "remw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "011"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("M", 2, 32, "remuw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "111"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "1000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "flw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110000"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fsw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110010"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fmadd.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100001"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fmsub.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110001"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fnmsub.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101001"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fnmadd.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111001"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fadd.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fsub.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fmul.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fdiv.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fsqrt.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "11010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fsgnj.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fsgnjn.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fsgnjx.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fmin.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fmax.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fcvt.s.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fcvt.q.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fcvt.d.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fcvt.q.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "feq.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "flt.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fle.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "class.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fcvt.w.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fcvt.wu.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fcvt.q.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 3, 32, "fcvt.q.wu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 2, 32, "fcvt.l.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 2, 32, "fcvt.lu.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 2, 32, "fcvt.q.l")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Q", 2, 32, "fcvt.q.lu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "11"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 1, 32, "slli")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 1, 32, "srli")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 1, 32, "srai")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "add")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "sub")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "slt")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "sltu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "and")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "111"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "or")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "011"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "xor")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "sll")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "srl")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "sra")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100110"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "nop")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "000000000000"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "mv")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "000000000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "addi")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "slti")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "seqz")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "100000000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "sltiu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "andi")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "111"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "ori")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "011"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "not")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "111111111111"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "xori")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "lw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "lh")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "lb")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "lhu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "lbu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "sw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100010"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "7,8,9,10,11,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "sh")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100010"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "7,8,9,10,11,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "sb")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100010"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "7,8,9,10,11,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "lui")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110110"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "auipc")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "beq")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "bne")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "blt")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "bltu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "011"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "bge")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "bgeu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "111"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "bgt")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "bgtu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "011"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "ble")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "bleu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100011"))
        .addField(new Matcher("funct3", "12,13,14", "111"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "8,9,10,11,25,26,27,28,29,30,7,31", "imm"))
        .setJump({ label: "within", argIndex: 2 }),

    new InstructionDescription("I", 3, 32, "j")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111011"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addArg(new ArgumentPattern("imm", "21,22,23,24,25,26,27,28,29,30,20,12,13,14,15,16,17,18,19,31", "imm"))
        .setJump({ label: "within", argIndex: 0 }),

    new InstructionDescription("I", 3, 32, "jal")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111011"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "21,22,23,24,25,26,27,28,29,30,20,12,13,14,15,16,17,18,19,31", "imm"))
        .setJump({ label: "within", argIndex: 1 }),

    new InstructionDescription("I", 3, 32, "jalr")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110011"))
        .addField(new Matcher("funct3", "12,13,14", "001"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "21,22,23,24,25,26,27,28,29,30,20,12,13,14,15,16,17,18,19,31", "imm"))
        .setJump({ label: "out" }),

    new InstructionDescription("I", 3, 32, "pause")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("fm", "28,29,30,31", "0000"))
        .addField(new Matcher("pred", "24,25,26,27", "1000"))
        .addField(new Matcher("succ", "20,21,22,23", "0000"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "fence")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("fm", "28,29,30,31", "0000"))
        .addField(new Matcher("pred", "24,25,26,27", "1111"))
        .addField(new Matcher("succ", "20,21,22,23", "1111"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "fence")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("fm", "28,29,30,31", "0000"))
        .addArg(new ArgumentPattern("pred", "24,25,26,27", "pred"))
        .addArg(new ArgumentPattern("succ", "20,21,22,23", "succ"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "fence.tso")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("fm", "28,29,30,31", "0001"))
        .addField(new Matcher("pred", "24,25,26,27", "1100"))
        .addField(new Matcher("succ", "20,21,22,23", "1100"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "ecall")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "000000000000"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 3, 32, "ebreak")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "100000000000"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "addw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "subw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "sllw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "srlw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "sraw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101110"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "slli")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("funct7", "26,27,28,29,30,31", "000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "srli")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "26,27,28,29,30,31", "000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "srai")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100100"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "26,27,28,29,30,31", "000010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "addiw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "slliw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "srliw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101100"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "sraiw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101100"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addField(new Matcher("funct7", "25,26,27,28,29,30,31", "0000010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24", "imm"))
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "ld")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "lwu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100000"))
        .addField(new Matcher("funct3", "12,13,14", "011"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("I", 2, 32, "sw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100010"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "7,8,9,10,11,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setArgFormat("_, _(_)")
        .setJump({ label: "none" }),

    new InstructionDescription("Zawrs", 3, 32, "wrs.nto")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "101100000000"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zawrs", 3, 32, "wrs.sto")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "101110000000"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "flw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110000"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fsw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110010"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "imm"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fmadd.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100001"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fmsub.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1110001"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fnmsub.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1101001"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fnmadd.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111001"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rs3", "27,28,29,30,31", "rs3"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fadd.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fsub.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fmul.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fdiv.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fsqrt.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "11010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fsgnj.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fsgnjn.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fsgnjx.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00100"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fmin.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fmax.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "10100"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.s.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "00"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.h.s")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.d.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.h.d")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.q.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "10"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.h.q")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00010"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "feq.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "flt.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fle.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00101"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rs2", "20,21,22,23,24", "rs2"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "class.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.w.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.wu.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fmv.x.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00111"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.h.w")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fcvt.h.wu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "10000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 3, 32, "fmv.h.x")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct3", "12,13,14", "000"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01111"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "00000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 2, 32, "fcvt.l.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 2, 32, "fcvt.lu.h")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "00011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 2, 32, "fcvt.h.l")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "01000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zfh", 2, 32, "fcvt.h.lu")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100101"))
        .addField(new Matcher("fmt", "25,26", "01"))
        .addField(new Matcher("funct5", "27,28,29,30,31", "01011"))
        .addField(new Matcher("rs2", "20,21,22,23,24", "11000"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("rm", "12,13,14", "rm"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zicsr", 3, 32, "csrrw")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "csr"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zicsr", 3, 32, "csrrs")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("funct3", "12,13,14", "010"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "csr"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zicsr", 3, 32, "csrrc")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("funct3", "12,13,14", "110"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("rs1", "15,16,17,18,19", "rs1"))
        .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "csr"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zicsr", 3, 32, "csrrwi")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("funct3", "12,13,14", "101"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("uimm", "15,16,17,18,19", "uimm"))
        .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "csr"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zicsr", 3, 32, "csrrsi")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("funct3", "12,13,14", "011"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("uimm", "15,16,17,18,19", "uimm"))
        .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "csr"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zicsr", 3, 32, "csrrci")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1100111"))
        .addField(new Matcher("funct3", "12,13,14", "111"))
        .addArg(new ArgumentPattern("rd", "7,8,9,10,11", "rd"))
        .addArg(new ArgumentPattern("uimm", "15,16,17,18,19", "uimm"))
        .addArg(new ArgumentPattern("csr", "20,21,22,23,24,25,26,27,28,29,30,31", "csr"))
        .setJump({ label: "none" }),

    new InstructionDescription("Zifencei", 3, 32, "fence.i")
        .addField(new Matcher("opcode", "0,1,2,3,4,5,6", "1111000"))
        .addField(new Matcher("funct3", "12,13,14", "100"))
        .addField(new Matcher("rd", "7,8,9,10,11", "00000"))
        .addField(new Matcher("rs1", "15,16,17,18,19", "00000"))
        .addField(new Matcher("imm", "20,21,22,23,24,25,26,27,28,29,30,31", "000000000000"))
        .setJump({ label: "none" })
];
