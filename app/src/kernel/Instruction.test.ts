import { Instruction } from './Instruction';
import { Bits } from './Bits';
import { BitDepth, InstructionDescription } from './InstructionDescription';

jest.mock('./Argument', () => {
    return {
        Argument: class {
            textual: string;

            constructor(_: any, text: any) {
                this.textual = text;
            }
        }
    };
});


function createInstruction(argTexts: string[], argFormat?: string): Instruction {
    const bits = {} as Bits;

    const description = new InstructionDescription("I", BitDepth.BIT_32, 32, "TEST");

    description.argFormat = argFormat;

    const instr = new Instruction(bits, description);

    (instr as any)._args = argTexts.map((text) => ({textual: text}));
    return instr;
}

describe("Instruction.formatted", () => {
    test("no format string -> comma separated", () => {
        const instr = createInstruction(["x11", "52", "iorw"]);
        expect(instr.formatted()).toBe("x11, 52, iorw");
    });

    test("basic format _(_)", () => {
        const instr = createInstruction(["x11", "52"], "_(_)");
        expect(instr.formatted()).toBe("x11(52)");
    });

    test("missing argument replaced with empty", () => {
        const instr = createInstruction(["x11"], "_(_) :: _");
        expect(instr.formatted()).toBe("x11() :: ");
    });

    test("extra argument appended", () => {
        const instr = createInstruction(["x11", "52", "iorw"], "_(_)");
        expect(instr.formatted()).toBe("x11(52), iorw");
    });

    test("exact format match", () => {
        const instr = createInstruction(["x11", "52", "iorw"], "_(_) :: _");
        expect(instr.formatted()).toBe("x11(52) :: iorw");
    });

    test("more placeholders than args", () => {
        const instr = createInstruction(["x11", "52"], "_(_) :: [_]");
        expect(instr.formatted()).toBe("x11(52) :: []");
    });

    test("no arguments", () => {
        const instr = createInstruction([], "_(_) :: _");
        expect(instr.formatted()).toBe("() :: ");
    });
});
