import { parseSpan } from "./Span";

describe("parseSpan", () => {
    test("single number", () => {
        expect(parseSpan("0")).toEqual([0]);
    });

    test("multiple numbers", () => {
        expect(parseSpan("1,4,0,2")).toEqual([1, 4, 0, 2]);
    });

    test("range", () => {
        expect(parseSpan("0-6")).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });

    test("mixed range and numbers", () => {
        expect(parseSpan("0-2,4,6-7")).toEqual([0, 1, 2, 4, 6, 7]);
    });

    test("complex span", () => {
        expect(parseSpan("0-7,12-14,8-11,15")).toEqual([0,1,2,3,4,5,6,7,12,13,14,8,9,10,11,15]);
    });

    test("range with spaces", () => {
        expect(parseSpan(" 1 - 3 , 5 ")).toEqual([1, 2, 3, 5]);
    });

    test("invalid number", () => {
        expect(() => parseSpan("a")).toThrow();
    });

    test("invalid range (reversed)", () => {
        expect(() => parseSpan("5-2")).toThrow();
    });

    test("invalid empty", () => {
        expect(() => parseSpan("")).toThrow();
    });
});
