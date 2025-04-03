
import { splitter } from "./Splitter";
import { InputOrder, InputSettings, inputParser } from "./InputParser";

function createInput(hex: string, settings?: Partial<InputSettings>) {
    const finalSettings: InputSettings = {
        order: InputOrder.BYTE_ORDER_LE,
        parcelSkip: 0,
        ...settings
    };
    return inputParser(hex, finalSettings);
}

describe("splitter", () => {
    test("16-bit instruction", () => {
        const input = createInput("0000");
        const chunks = splitter(input as any);
        expect(chunks.map(c => c.bits.length)).toEqual([16]);
    });

    test("32-bit instruction", () => {
        const input = createInput("6701");
        const chunks = splitter(input as any);
        expect(chunks.map(c => c.bits.length)).toEqual([32]);
    });

    test("48-bit instruction", () => {
        const input = createInput("ff3e0000");
        const chunks = splitter(input as any);
        expect(chunks.map(c => c.bits.length)).toEqual([48]);
    });

    test("64-bit instruction", () => {
        const input = createInput("7f3e000000");
        const chunks = splitter(input as any);
        expect(chunks.map(c => c.bits.length)).toEqual([64]);
    });

    test("80-bit instruction (nnn = 000)", () => {
        const input = createInput("ff3e0000000000");
        const chunks = splitter(input as any);
        expect(chunks.map(c => c.bits.length)).toEqual([80]);
    });

    test("96-bit instruction (nnn = 001)", () => {
        const input = createInput("ff5e000000000000");
        const chunks = splitter(input as any);
        expect(chunks.map(c => c.bits.length)).toEqual([96]);
    });

    test("192-bit instruction (nnn = 111)", () => {
        const input = createInput("ffff0000000000000000000000000000");
        const chunks = splitter(input as any);
        expect(chunks.map(c => c.bits.length)).toEqual([192]);
    });
});
