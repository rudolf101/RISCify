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

    private static buildR(name: String, rd: Uint8Array, rs1: Uint8Array, rs2: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${Disassembler.toNumber(rd, false)}`),
            new Arg(`x${Disassembler.toNumber(rs1, false)}`),
            new Arg(`x${Disassembler.toNumber(rs2, false)}`)
        ]);
    }

    private static buildI(name: String, rd: Uint8Array, rs1: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${Disassembler.toNumber(rd, false)}`),
            new Arg(`x${Disassembler.toNumber(rs1, false)}`),
            new Arg(`${Disassembler.toNumber(imm)}`)
        ]);
    }

    private static buildIShift(name: String, rd: Uint8Array, rs1: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${Disassembler.toNumber(rd, false)}`),
            new Arg(`x${Disassembler.toNumber(rs1, false)}`),
            new Arg(`${Disassembler.toNumber(imm, false)}`)
        ]);
    }

    private static buildIMem(name: String, rd: Uint8Array, rs1: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${Disassembler.toNumber(rd, false)}`),
            new Arg(`${Disassembler.toNumber(imm)}(x${Disassembler.toNumber(rs1, false)})`)
        ]);
    }

    private static buildSMem(name: String, rs1: Uint8Array, rs2: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${Disassembler.toNumber(rs2, false)}`),
            new Arg(`${Disassembler.toNumber(imm)}(x${Disassembler.toNumber(rs1, false)})`)
        ]);
    }

    private static buildB(name: String, rs1: Uint8Array, rs2: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${Disassembler.toNumber(rs1, false)}`),
            new Arg(`x${Disassembler.toNumber(rs2, false)}`),
            new Arg(`${Disassembler.toNumber(imm) * 2}`)
        ]);
    }

    private static buildU(name: String, rd: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${Disassembler.toNumber(rd, false)}`),
            new Arg(`${Disassembler.toNumber(imm)}`)
        ]);
    }

    private static buildJ(name: String, rd: Uint8Array, imm: Uint8Array): Instruction {
        return new Instruction(name, [
            new Arg(`x${Disassembler.toNumber(rd, false)}`),
            new Arg(`${Disassembler.toNumber(imm) * 2}`)
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

        const opcode = bits.subarray( 2,  7);
        const funct3 = bits.subarray(12, 15);
        const funct7 = bits.subarray(25, 32);
        const rd     = bits.subarray( 7, 12);
        const rs1    = bits.subarray(15, 20);
        const rs2    = bits.subarray(20, 25);
        const shamt  = bits.subarray(20, 25);
        const immI   = bits.subarray(20, 32);
        const immS   = Disassembler.concat(
            bits.subarray( 7, 12),
            bits.subarray(25, 32)
        );
        const immB   = Disassembler.concat(
            bits.subarray( 8, 12),
            Disassembler.concat(
                bits.subarray(25, 31),
                Disassembler.concat(
                    bits.subarray( 7,  8),
                    bits.subarray(31, 32)
                )
            )
        );
        const immU   = bits.subarray(12, 32);
        const immJ   = Disassembler.concat(
            bits.subarray(21, 31),
            Disassembler.concat(
                bits.subarray(20, 21),
                Disassembler.concat(
                    bits.subarray(12, 20),
                    bits.subarray(31, 32)
                )
            )
        );
        
        var retval: Instruction[] = [];

        if (Disassembler.equalBits(opcode, opcodeLoad)) {
            if (Disassembler.equalBits(funct3, funct3WW))
                retval.push(Disassembler.buildIMem("lw", rd, rs1, immI));
            else if (Disassembler.equalBits(funct3, funct3WH))
                retval.push(Disassembler.buildIMem("lh", rd, rs1, immI));
            else if (Disassembler.equalBits(funct3, funct3WB))
                retval.push(Disassembler.buildIMem("lb", rd, rs1, immI));
        }
        else if (Disassembler.equalBits(opcode, opcodeStore)) {
            if (Disassembler.equalBits(funct3, funct3WW))
                retval.push(Disassembler.buildSMem("sw", rs1, rs2, immI));
            else if (Disassembler.equalBits(funct3, funct3WH))
                retval.push(Disassembler.buildSMem("sh", rs1, rs2, immI));
            else if (Disassembler.equalBits(funct3, funct3WB))
                retval.push(Disassembler.buildSMem("sb", rs1, rs2, immI));
        }
        else if (Disassembler.equalBits(opcode, opcodeRegImm)) {
            if (Disassembler.equalBits(funct3, funct3Add)) {
                retval.push(Disassembler.buildI("addi", rd, rs1, immI));
                if (
                    Disassembler.toNumber(rd) == 0
                    && Disassembler.toNumber(rs1) == 0
                    && Disassembler.toNumber(immI) == 0)
                    retval.push(new Instruction("nop", []));
            }
            else if (Disassembler.equalBits(funct3, funct3Slt))
                retval.push(Disassembler.buildI("slti", rd, rs1, immI));
            else if (Disassembler.equalBits(funct3, funct3Sltu))
                retval.push(Disassembler.buildI("sltiu", rd, rs1, immI));
            else if (Disassembler.equalBits(funct3, funct3And))
                retval.push(Disassembler.buildI("andi", rd, rs1, immI));
            else if (Disassembler.equalBits(funct3, funct3Or))
                retval.push(Disassembler.buildI("ori", rd, rs1, immI));
            else if (Disassembler.equalBits(funct3, funct3Xor))
                retval.push(Disassembler.buildI("xori", rd, rs1, immI));
            else if (Disassembler.equalBits(funct3, funct3Sll)) {
                if (Disassembler.equalBits(funct7, funct7Normal))
                    retval.push(Disassembler.buildIShift("slli", rd, rs1, shamt));
            }
            else if (Disassembler.equalBits(funct3, funct3Srl)) {
                if (Disassembler.equalBits(funct7, funct7Normal))
                    retval.push(Disassembler.buildIShift("srli", rd, rs1, shamt));
                else if (Disassembler.equalBits(funct7, funct7Alter))
                    retval.push(Disassembler.buildIShift("srai", rd, rs1, shamt));
            }
        }
        else if (Disassembler.equalBits(opcode, opcodeRegReg)) {
            if (Disassembler.equalBits(funct7, funct7Normal)) {
                if (Disassembler.equalBits(funct3, funct3Add))
                    retval.push(Disassembler.buildR("add", rd, rs1, rs2));
                else if (Disassembler.equalBits(funct3, funct3Slt))
                    retval.push(Disassembler.buildR("slt", rd, rs1, rs2));
                else if (Disassembler.equalBits(funct3, funct3Sltu))
                    retval.push(Disassembler.buildR("sltu", rd, rs1, rs2));
                else if (Disassembler.equalBits(funct3, funct3And))
                    retval.push(Disassembler.buildR("and", rd, rs1, rs2));
                else if (Disassembler.equalBits(funct3, funct3Or))
                    retval.push(Disassembler.buildR("or", rd, rs1, rs2));
                else if (Disassembler.equalBits(funct3, funct3Xor))
                    retval.push(Disassembler.buildR("xor", rd, rs1, rs2));
                else if (Disassembler.equalBits(funct3, funct3Sll))
                    retval.push(Disassembler.buildR("sll", rd, rs1, rs2));
                else if (Disassembler.equalBits(funct3, funct3Srl))
                    retval.push(Disassembler.buildR("srl", rd, rs1, rs2));
            }
            else if (Disassembler.equalBits(funct7, funct7Alter)) {
                if (Disassembler.equalBits(funct3, funct3Add))
                    retval.push(Disassembler.buildR("sub", rd, rs1, rs2));
                else if (Disassembler.equalBits(funct3, funct3Srl))
                    retval.push(Disassembler.buildR("sra", rd, rs1, rs2));
            }
        }
        else if (Disassembler.equalBits(opcode, opcodeLui)) {
            retval.push(Disassembler.buildU("lui", rd, immU));
        }
        else if (Disassembler.equalBits(opcode, opcodeAuipc)) {
            retval.push(Disassembler.buildU("auipc", rd, immU));
        }
        else if (Disassembler.equalBits(opcode, opcodeBranch)) {
            if (Disassembler.equalBits(funct3, funct3Beq))
                retval.push(Disassembler.buildSMem("beq", rs1, rs2, immB));
            else if (Disassembler.equalBits(funct3, funct3Bne))
                retval.push(Disassembler.buildSMem("bne", rs1, rs2, immB));
            else if (Disassembler.equalBits(funct3, funct3Blt)) {
                retval.push(Disassembler.buildSMem("blt", rs1, rs2, immB));
                retval.push(Disassembler.buildSMem("bgt", rs2, rs1, immB));
            }
            else if (Disassembler.equalBits(funct3, funct3Bltu)) {
                retval.push(Disassembler.buildSMem("bltu", rs1, rs2, immB));
                retval.push(Disassembler.buildSMem("bgtu", rs2, rs1, immB));
            }
            else if (Disassembler.equalBits(funct3, funct3Bge)) {
                retval.push(Disassembler.buildSMem("bge", rs1, rs2, immB));
                retval.push(Disassembler.buildSMem("ble", rs2, rs1, immB));
            }
            else if (Disassembler.equalBits(funct3, funct3Bgeu)) {
                retval.push(Disassembler.buildSMem("bgeu", rs1, rs2, immB));
                retval.push(Disassembler.buildSMem("bleu", rs2, rs1, immB));
            }
        }
        else if (Disassembler.equalBits(opcode, opcodeJump)) {
            retval.push(Disassembler.buildJ("jal", rd, immJ));
            if (Disassembler.toNumber(rd) == 0)
                retval.push(new Instruction("j", [
                    new Arg(`${Disassembler.toNumber(immJ) * 2}`)
                ]));
        }
        else if (Disassembler.equalBits(opcode, opcodeJalr)) {
            if (Disassembler.equalBits(funct3, funct3Jalr))
                retval.push(Disassembler.buildIMem("jalr", rd, rs1, immI));
        }

        return retval;
    }

    static disassemble(byteBuffer: Uint8Array[]): Instruction[][] {
        let instructionsBytes: Uint8Array[] = BytesSplitter.splitBytes(byteBuffer);
        return instructionsBytes.map(Disassembler.findInstruction)
    }
}

export { Disassembler };
