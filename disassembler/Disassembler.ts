import {Instruction} from "./model/Instruction";
import {Arg} from "./model/Arg";
import {BytesSplitter} from "./utils/BytesSplitter";

class Disassembler {
    private static equalBits(a: Uint8Array, b: Uint8Array): boolean {
        if (a == null || b == null) false;
        if (a.length != b.length) return false;
        return a.every((bit, index) => bit == b[index]);
    }

    private static toNumber(x: Uint8Array, signExtend: boolean = true): number {
        if (x == null) return 0;
        if (x.length == 0) return 0;
        var retval: number = 0;
        for (var i: number = 0; i < x.length; i++) {
            if ((x[i] ?? 0) != 0)
                retval |= 1 << i;
        }
        if (signExtend && retval >= (1 << (x.length - 1)))
            retval -= 1 << x.length;
        return retval;
    }

    private static concat(a: Uint8Array, b: Uint8Array): Uint8Array {
        var c = new Uint8Array(a.length + b.length);
        c.set(a);
        c.set(b, a.length);
        return c;
    }

    private static span(a: Uint8Array, ...pos: number[]): Uint8Array {
        var i = 0;
        var c = new Uint8Array();
        while (i < pos.length) {
            if (i + 1 < pos.length) {
                c = this.concat(c, a.subarray(pos[i], pos[i + 1] + 1));
            }
            else {
                c = this.concat(c, a.subarray(pos[i]));
            }
        }
        return c;
    }

    private static buildR(name: String, rd: Uint8Array, rs1: Uint8Array, rs2: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${this.toNumber(rd, false)}`),
            new Arg(`x${this.toNumber(rs1, false)}`),
            new Arg(`x${this.toNumber(rs2, false)}`)
        ]);
    }

    private static buildI(name: String, rd: Uint8Array, rs1: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${this.toNumber(rd, false)}`),
            new Arg(`x${this.toNumber(rs1, false)}`),
            new Arg(`${this.toNumber(imm)}`)
        ]);
    }

    private static buildIShift(name: String, rd: Uint8Array, rs1: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${this.toNumber(rd, false)}`),
            new Arg(`x${this.toNumber(rs1, false)}`),
            new Arg(`${this.toNumber(imm, false)}`)
        ]);
    }

    private static buildIMem(name: String, rd: Uint8Array, rs1: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${this.toNumber(rd, false)}`),
            new Arg(`${this.toNumber(imm)}(x${this.toNumber(rs1, false)})`)
        ]);
    }

    private static buildSMem(name: String, rs1: Uint8Array, rs2: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${this.toNumber(rs2, false)}`),
            new Arg(`${this.toNumber(imm)}(x${this.toNumber(rs1, false)})`)
        ]);
    }

    private static buildB(name: String, rs1: Uint8Array, rs2: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${this.toNumber(rs1, false)}`),
            new Arg(`x${this.toNumber(rs2, false)}`),
            new Arg(`${this.toNumber(imm) * 2}`)
        ]);
    }

    private static buildU(name: String, rd: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${this.toNumber(rd, false)}`),
            new Arg(`${this.toNumber(imm)}`)
        ]);
    }

    private static buildJ(name: String, rd: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${this.toNumber(rd, false)}`),
            new Arg(`${this.toNumber(imm) * 2}`)
        ]);
    }

    /**
     * Maps a sequence of bits to all possible instructions that match these bits.
     * The function *does not* check if the length bits are correct.
     * @param bits a sequence of bits of length (16*n) ordered from least to greatest,
     * e.g. if you expect "addi x23, x25, 1234" in the output, the sequence must be
     * [1,1,0,0,1,0,0, 1,1,1,0,1, 0,0,0, 1,0,0,1,1, 0,1,0,0,1,0,1,1,0,0,1,0]
     * @returns all instructions that match this bit sequence
     */
    public static findInstruction(bits: Uint8Array): Instruction[] {
        const opcodeLoad   = new Uint8Array([0,0,0,0,0]);
        const opcodeStore  = new Uint8Array([0,0,0,1,0]);
        const opcodeRegImm = new Uint8Array([0,0,1,0,0]);
        const opcodeRegReg = new Uint8Array([0,0,1,1,0]);
        const opcodeLui    = new Uint8Array([1,0,1,1,0]);
        const opcodeAuipc  = new Uint8Array([1,0,1,0,0]);
        const opcodeBranch = new Uint8Array([0,0,0,1,1]);
        const opcodeJalr   = new Uint8Array([1,0,0,1,1]);
        const opcodeJump   = new Uint8Array([1,1,0,1,1]);

        const funct3Add    = new Uint8Array([0,0,0]);
        const funct3Slt    = new Uint8Array([0,1,0]);
        const funct3Sltu   = new Uint8Array([1,1,0]);
        const funct3And    = new Uint8Array([1,1,1]);
        const funct3Or     = new Uint8Array([0,1,1]);
        const funct3Xor    = new Uint8Array([0,0,1]);
        const funct3Sll    = new Uint8Array([1,0,0]);
        const funct3Srl    = new Uint8Array([1,0,1]);
        const funct3Jalr   = new Uint8Array([0,0,1]);
        const funct3WB     = new Uint8Array([0,0,0]);
        const funct3WH     = new Uint8Array([1,0,0]);
        const funct3WW     = new Uint8Array([0,1,0]);
        const funct3Beq    = new Uint8Array([0,0,0]);
        const funct3Bne    = new Uint8Array([1,0,0]);
        const funct3Blt    = new Uint8Array([0,0,1]);
        const funct3Bltu   = new Uint8Array([0,1,1]);
        const funct3Bge    = new Uint8Array([1,0,1]);
        const funct3Bgeu   = new Uint8Array([1,1,1]);
        
        const funct7Normal = new Uint8Array([0,0,0,0,0,0,0]);
        const funct7Alter  = new Uint8Array([0,0,0,0,0,1,0]);

        const opcode = this.span(bits,  2,  6);
        const funct3 = this.span(bits, 12, 14);
        const funct7 = this.span(bits, 25, 31);
        const rd     = this.span(bits,  7, 11);
        const rs1    = this.span(bits, 15, 19);
        const rs2    = this.span(bits, 20, 24);
        const shamt  = this.span(bits, 20, 24);
        const immI   = this.span(bits, 20, 31);
        const immS   = this.span(bits,  7, 11, 25, 31);
        const immB   = this.span(bits,  8, 11, 25, 30,  7,  7, 31, 31);
        const immU   = this.span(bits, 12, 31);
        const immJ   = this.span(bits, 21, 30, 20, 20, 12, 19, 31, 31);
        
        var retval: Instruction[] = [];

        if (this.equalBits(opcode, opcodeLoad)) {
            if (this.equalBits(funct3, funct3WW))
                retval.push(this.buildIMem("lw", rd, rs1, immI));
            else if (this.equalBits(funct3, funct3WH))
                retval.push(this.buildIMem("lh", rd, rs1, immI));
            else if (this.equalBits(funct3, funct3WB))
                retval.push(this.buildIMem("lb", rd, rs1, immI));
        }
        else if (this.equalBits(opcode, opcodeStore)) {
            if (this.equalBits(funct3, funct3WW))
                retval.push(this.buildSMem("sw", rs1, rs2, immI));
            else if (this.equalBits(funct3, funct3WH))
                retval.push(this.buildSMem("sh", rs1, rs2, immI));
            else if (this.equalBits(funct3, funct3WB))
                retval.push(this.buildSMem("sb", rs1, rs2, immI));
        }
        else if (this.equalBits(opcode, opcodeRegImm)) {
            if (this.equalBits(funct3, funct3Add)) {
                retval.push(this.buildI("addi", rd, rs1, immI));
                if (
                    this.toNumber(rd) == 0
                    && this.toNumber(rs1) == 0
                    && this.toNumber(immI) == 0)
                    retval.push(new Instruction("nop", []));
            }
            else if (this.equalBits(funct3, funct3Slt))
                retval.push(this.buildI("slti", rd, rs1, immI));
            else if (this.equalBits(funct3, funct3Sltu))
                retval.push(this.buildI("sltiu", rd, rs1, immI));
            else if (this.equalBits(funct3, funct3And))
                retval.push(this.buildI("andi", rd, rs1, immI));
            else if (this.equalBits(funct3, funct3Or))
                retval.push(this.buildI("ori", rd, rs1, immI));
            else if (this.equalBits(funct3, funct3Xor))
                retval.push(this.buildI("xori", rd, rs1, immI));
            else if (this.equalBits(funct3, funct3Sll)) {
                if (this.equalBits(funct7, funct7Normal))
                    retval.push(this.buildIShift("slli", rd, rs1, shamt));
            }
            else if (this.equalBits(funct3, funct3Srl)) {
                if (this.equalBits(funct7, funct7Normal))
                    retval.push(this.buildIShift("srli", rd, rs1, shamt));
                else if (this.equalBits(funct7, funct7Alter))
                    retval.push(this.buildIShift("srai", rd, rs1, shamt));
            }
        }
        else if (this.equalBits(opcode, opcodeRegReg)) {
            if (this.equalBits(funct7, funct7Normal)) {
                if (this.equalBits(funct3, funct3Add))
                    retval.push(this.buildR("add", rd, rs1, rs2));
                else if (this.equalBits(funct3, funct3Slt))
                    retval.push(this.buildR("slt", rd, rs1, rs2));
                else if (this.equalBits(funct3, funct3Sltu))
                    retval.push(this.buildR("sltu", rd, rs1, rs2));
                else if (this.equalBits(funct3, funct3And))
                    retval.push(this.buildR("and", rd, rs1, rs2));
                else if (this.equalBits(funct3, funct3Or))
                    retval.push(this.buildR("or", rd, rs1, rs2));
                else if (this.equalBits(funct3, funct3Xor))
                    retval.push(this.buildR("xor", rd, rs1, rs2));
                else if (this.equalBits(funct3, funct3Sll))
                    retval.push(this.buildR("sll", rd, rs1, rs2));
                else if (this.equalBits(funct3, funct3Srl))
                    retval.push(this.buildR("srl", rd, rs1, rs2));
            }
            else if (this.equalBits(funct7, funct7Alter)) {
                if (this.equalBits(funct3, funct3Add))
                    retval.push(this.buildR("sub", rd, rs1, rs2));
                else if (this.equalBits(funct3, funct3Srl))
                    retval.push(this.buildR("sra", rd, rs1, rs2));
            }
        }
        else if (this.equalBits(opcode, opcodeLui)) {
            retval.push(this.buildU("lui", rd, immU));
        }
        else if (this.equalBits(opcode, opcodeAuipc)) {
            retval.push(this.buildU("auipc", rd, immU));
        }
        else if (this.equalBits(opcode, opcodeBranch)) {
            if (this.equalBits(funct3, funct3Beq))
                retval.push(this.buildSMem("beq", rs1, rs2, immB));
            else if (this.equalBits(funct3, funct3Bne))
                retval.push(this.buildSMem("bne", rs1, rs2, immB));
            else if (this.equalBits(funct3, funct3Blt)) {
                retval.push(this.buildSMem("blt", rs1, rs2, immB));
                retval.push(this.buildSMem("bgt", rs2, rs1, immB));
            }
            else if (this.equalBits(funct3, funct3Bltu)) {
                retval.push(this.buildSMem("bltu", rs1, rs2, immB));
                retval.push(this.buildSMem("bgtu", rs2, rs1, immB));
            }
            else if (this.equalBits(funct3, funct3Bge)) {
                retval.push(this.buildSMem("bge", rs1, rs2, immB));
                retval.push(this.buildSMem("ble", rs2, rs1, immB));
            }
            else if (this.equalBits(funct3, funct3Bgeu)) {
                retval.push(this.buildSMem("bgeu", rs1, rs2, immB));
                retval.push(this.buildSMem("bleu", rs2, rs1, immB));
            }
        }
        else if (this.equalBits(opcode, opcodeJump)) {
            retval.push(this.buildJ("jal", rd, immJ));
            if (this.toNumber(rd) == 0)
                retval.push(new Instruction("j", [
                    new Arg(`${this.toNumber(immJ) * 2}`)
                ]));
        }
        else if (this.equalBits(opcode, opcodeJalr)) {
            if (this.equalBits(funct3, funct3Jalr))
                retval.push(this.buildIMem("jalr", rd, rs1, immI));
        }

        return retval;
    }

    static disassemble(byteBuffer: Uint8Array[]): Instruction[][] {
        let instructionsBytes: Uint8Array[] = BytesSplitter.splitBytes(byteBuffer);

        // return instructionsBytes.map(this.findInstruction)
        return null
    }
}

export { Disassembler };
