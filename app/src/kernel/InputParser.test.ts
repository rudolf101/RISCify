import {InputOrder, inputParser} from "./InputParser";

describe("inputParser", () => {
    test("empty", () => {
        expect(inputParser("", {order: InputOrder.BYTE_ORDER_LE, parcelSkip: 0})).toEqual({
            valid: "valid",
            startAddress: 0,
            bytesConcat: ""
        });
    });


    test("simple example", () => {
        expect(inputParser("0x0010: 01234567", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        })).toEqual({
            valid: "valid",
            startAddress: 16,
            bytesConcat: "00000001001000110100010101100111"
        });
    });

    test("simple example with LE", () => {
        expect(inputParser("0x0010: 01234567", {
            order: InputOrder.BYTE_ORDER_LE,
            parcelSkip: 0
        })).toEqual({
            valid: "valid",
            startAddress: 16,
            bytesConcat: "01100111010001010010001100000001"
        });
    });

    test("simple example2", () => {
        expect(inputParser("0x0014: 09abcdef", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        })).toEqual({
            valid: "valid",
            startAddress: 20,
            bytesConcat: "00001001101010111100110111101111"
        });
    });

    test("simple example2 with upper case", () => {
        expect(inputParser("0x0014: 09ABCDEF", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        })).toEqual({
            valid: "valid",
            startAddress: 20,
            bytesConcat: "00001001101010111100110111101111"
        });
    });

    test("simple example3", () => {
        expect(inputParser("0x0010: 01234567\n0x0014: 09abcdef", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        })).toEqual({
            valid: "valid",
            startAddress: 16,
            bytesConcat: "0000000100100011010001010110011100001001101010111100110111101111"
        });
    });

    test("simple example4", () => {
        expect(inputParser("0x0010: 0a1b2c3d 4e5f", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        })).toEqual({
            valid: "valid",
            startAddress: 16,
            bytesConcat: "000010100001101100101100001111010100111001011111"
        });
    });

    test("simple example4 with LE", () => {
        expect(inputParser("0x0010: 0a1b2c3d 4e5f", {
            order: InputOrder.BYTE_ORDER_LE,
            parcelSkip: 0
        })).toEqual({
            valid: "valid",
            startAddress: 16,
            bytesConcat: "001111010010110000011011000010100101111101001110"
        });
    });

    test("without 0x", () => {
        expect(inputParser("0010: 09abcdef", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        })).toEqual({
            valid: "valid",
            startAddress: 16,
            bytesConcat: "00001001101010111100110111101111"
        });
    });

    test("parcel skip", () => {
        expect(inputParser("0x0014: 09abcdef", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 1
        })).toEqual({
            valid: "valid",
            startAddress: 21,
            bytesConcat: "1100110111101111"
        });
    });

    test("2 parcel skip", () => {
        expect(inputParser("0x0014: 09abcdef", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 2
        })).toEqual({
            valid: "valid",
            startAddress: 22,
            bytesConcat: ""
        });
    });


    test("bad input", () => {
        expect(inputParser("0x0014: a", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        }).valid).toEqual("invalid");
    });

    test("bad input2", () => {
        expect(inputParser(": 09abcdef", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        }).valid).toEqual("invalid");
    });

    test("bad input: bad addresses", () => {
        expect(inputParser("0x0010: 09abcdef 0x0012: 09abcdef", {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        }).valid).toEqual("invalid");
    });

    test("big test", () => {
        expect(inputParser(`
0x0000003f91b19ffe:   06 ec 00 10 aa 84 97 60 e4 ff e7 80 60 6b 11 e1
0x0000003f91b1a00e:   05 45 88 e0 e2 60 42 64 a2 64 05 61 82 80 01 11
0x0000003f91b1a01e:   06 ec 22 e8 26 e4 00 10 aa 84 97 60 e4 ff e7 80
0x0000003f91b1a02e:   20 69 9c 60 b3 04 f5 40 97 60 e4 ff e7 80 20 6a
`, {
            order: InputOrder.BYTE_ORDER_BE,
            parcelSkip: 0
        }).valid).toEqual("valid");
    });
});
