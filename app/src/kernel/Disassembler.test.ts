import { disassemble } from './Disassembler';
import { BitDepth, InstructionDescription } from './InstructionDescription';
import { Chunk } from './Splitter';
import { Bits } from './Bits';

function mockBits(length: number): Bits {
    return {
        length,
        matchBoth: () => true
    } as unknown as Bits;
}

function createMockDesc(mnemonic: string, match: boolean, wl: BitDepth): InstructionDescription {
    const desc = new InstructionDescription("I", wl, 32, mnemonic);
    desc.matchBits = () => match;
    return desc;
}

describe("disassemble (full pipeline)", () => {
    const chunk: Chunk = { bits: mockBits(32), address: 0x1000 };

    test("matches instructions and filters by bit depth", () => {
        const descriptions = [
            createMockDesc("ADD", true, BitDepth.BIT_32),
            createMockDesc("MUL", true, BitDepth.BIT_64),
            createMockDesc("XOR", false, BitDepth.BIT_32), // Do not match
        ];

        const result = disassemble([chunk], descriptions, { bitDepth: BitDepth.BIT_32 });

        expect(result.length).toBe(1);
        const instrs = result[0].instructions;
        expect(instrs.map(i => i.mnemonic)).toEqual(["ADD"]);
    });

    test("returns empty instructions when no match", () => {
        const descriptions = [
            createMockDesc("NOP", false, BitDepth.BIT_32),
        ];

        const result = disassemble([chunk], descriptions, { bitDepth: BitDepth.BIT_32 });
        expect(result[0].instructions.length).toBe(0);
    });

    test("filters multiple chunks independently", () => {
        const chunks = [
            { bits: mockBits(32), address: 0x1 },
            { bits: mockBits(32), address: 0x2 },
        ];

        const descriptions = [
            createMockDesc("A", true, BitDepth.BIT_32),
            createMockDesc("B", true, BitDepth.BIT_64),
        ];

        const result = disassemble(chunks, descriptions, { bitDepth: BitDepth.BIT_64 });
        expect(result.length).toBe(2);
        expect(result[0].instructions.map(i => i.mnemonic)).toEqual(["B"]);
        expect(result[1].instructions.map(i => i.mnemonic)).toEqual(["B"]);
    });

    test("returns all matching instructions when no filter is applied (BIT_DEFAULT)", () => {
        const chunk: Chunk = { bits: mockBits(32), address: 0xdead };

        const descriptions = [
            createMockDesc("I32", true, BitDepth.BIT_32),
            createMockDesc("I64", true, BitDepth.BIT_64),
            createMockDesc("I128", true, BitDepth.BIT_128),
        ];

        const result = disassemble([chunk], descriptions, { bitDepth: BitDepth.BIT_DEFAULT });

        const mnemonics = result[0].instructions.map(instr => instr.mnemonic);
        expect(mnemonics).toEqual(["I32", "I64", "I128"]);
    });
});
