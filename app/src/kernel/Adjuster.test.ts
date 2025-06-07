import {adjuster} from "./Adjuster";
import {BitDepth} from "./InstructionDescription";
import performDisassemble, {DisassembleOutputValid} from "./Kernel";
import {InputOrder} from "./InputParser";
import {SimilarInstructions} from "./Disassembler";

function simplifiedRepresentation(similarInstructions: SimilarInstructions[]) {
    return similarInstructions.map(i => [i.instructions[0]?.mnemonic, i.instructions[0]?.formatted(), i.instructions[0]?.actualJump])
}

describe("adjuster", () => {
    test("empty", () => {
        expect(adjuster([])).toEqual([]);
    });

    test("smoke with one j", () => {
        const result = performDisassemble(`6f f0 5f fe`,
            {order: InputOrder.BYTE_ORDER_LE, bytesSkip: 0},
            {bitDepth: BitDepth.BIT_32}
        ) as DisassembleOutputValid
        expect(result.valid).toEqual("valid")
        expect(simplifiedRepresentation(result.result))
            .toEqual([["j", "-28", {"label": "back"}]]);
    })

    test("smoke with unrecognized instruction", () => {
        const result = performDisassemble(`
13 00 00 00
0b 00 00 00`,
            {order: InputOrder.BYTE_ORDER_LE, bytesSkip: 0},
            {bitDepth: BitDepth.BIT_32}
        ) as DisassembleOutputValid
        expect(result.valid).toEqual("valid")
        expect(simplifiedRepresentation(result.result))
            .toEqual([["nop", "", {"label": "none"}], [undefined, undefined, undefined]]);
    })

    test("smoke with between jump (prev)", () => {
        const result = performDisassemble(`
13 00 00 00
6f f0 ff ff`,
            {order: InputOrder.BYTE_ORDER_LE, bytesSkip: 0},
            {bitDepth: BitDepth.BIT_32}
        ) as DisassembleOutputValid
        expect(result.valid).toEqual("valid")
        expect(simplifiedRepresentation(result.result))
            .toEqual([["nop", "", {"label": "none"}], ["j", "-2", {"label": "between", "distance": -1, "offset": 2n}]]);
    })

    test("smoke with between jump (next)", () => {
        const result = performDisassemble(`
6f 00 60 00
13 00 00 00`,
            {order: InputOrder.BYTE_ORDER_LE, bytesSkip: 0},
            {bitDepth: BitDepth.BIT_32}
        ) as DisassembleOutputValid
        expect(result.valid).toEqual("valid")
        expect(simplifiedRepresentation(result.result))
            .toEqual([["j", "6", {"label": "between", "distance": 1, "offset": 2n}], ["nop", "", {"label": "none"}]]);
    })

    test("smoke with out jump", () => {
        const result = performDisassemble(`
e7 00 05 00`,
            {order: InputOrder.BYTE_ORDER_LE, bytesSkip: 0},
            {bitDepth: BitDepth.BIT_32}
        ) as DisassembleOutputValid
        expect(result.valid).toEqual("valid")
        expect(simplifiedRepresentation(result.result))
            .toEqual([["jalr", "ra, a0, 327680", {"label": "out"}]]);
    })

    test("smoke with back jump", () => {
        const result = performDisassemble(`
13 00 00 00
6f f0 5f fe`,
            {order: InputOrder.BYTE_ORDER_LE, bytesSkip: 0},
            {bitDepth: BitDepth.BIT_32}
        ) as DisassembleOutputValid
        expect(result.valid).toEqual("valid")
        expect(simplifiedRepresentation(result.result))
            .toEqual([["nop", "", {"label": "none"}], ["j", "-28", {"label": "back"}]]);
    })

    test("smoke with front jump", () => {
        const result = performDisassemble(`
6f 00 a0 00
13 00 00 00`,
            {order: InputOrder.BYTE_ORDER_LE, bytesSkip: 0},
            {bitDepth: BitDepth.BIT_32}
        ) as DisassembleOutputValid
        expect(result.valid).toEqual("valid")
        expect(simplifiedRepresentation(result.result))
            .toEqual([["j", "10", {"label": "front"}], ["nop", "", {"label": "none"}]]);
    })

    test("smoke", () => {
        const result = performDisassemble(`
37 03 00 40
93 02 00 00
63 00 03 02
b3 e3 62 00
93 d2 12 00
63 46 75 00
33 05 75 40
b3 e2 62 00
13 53 23 00
6f f0 5f fe
13 85 02 00
`,
            {order: InputOrder.BYTE_ORDER_LE, bytesSkip: 0},
            {bitDepth: BitDepth.BIT_32}
        ) as DisassembleOutputValid
        expect(result.valid).toEqual("valid")
        expect(simplifiedRepresentation(result.result)).toEqual([
            ["lui", "t1, 262144", {"label": "none"}],
            ["mv", "t0, zero", {"label": "none"}],
            ["beq", "t1, zero, 32", {"label": "concrete", "distance": 8}],
            ["or", "t2, t0, t1", {"label": "none"}],
            ["srli", "t0, t0, 1", {"label": "none"}],
            ["blt", "a0, t2, 12", {"label": "concrete", "distance": 3}],
            ["sub", "a0, a0, t2", {"label": "none"}],
            ["or", "t0, t0, t1", {"label": "none"}],
            ["srli", "t1, t1, 2", {"label": "none"}],
            ["j", "-28", {"label": "concrete", "distance": -7}],
            ["mv", "a0, t0", {"label": "none"}]
        ]);
    })
});
