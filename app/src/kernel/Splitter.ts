import { ValidInput } from "./InputParser";
import { Bits } from "./Bits";

export type Chunk = {
    bits: Bits;
    address: number;
};

function bitsToBytes(bits: string): number[] {
    const bytes: number[] = [];
    for (let i = 0; i + 8 <= bits.length; i += 8) {
        const byteBits = bits.slice(i, i + 8);
        const reversedBits = byteBits.split("").reverse().join("");
        const byteValue = parseInt(reversedBits, 2);
        bytes.push(byteValue);
    }
    return bytes;
}

function readBits(bytes: number[], bitOffset: number, bitLength: number): string {
    const result: string[] = [];
    for (let i = 0; i < bitLength; i++) {
        const bitIndex = bitOffset + i;
        const byteIndex = bitIndex >> 3;
        const bitInByte = bitIndex & 7;
        if (byteIndex >= bytes.length) break;
        const bit = (bytes[byteIndex] >> bitInByte) & 1;
        result.push(bit.toString());
    }
    return result.join("");
}

export function splitter(input: ValidInput): Chunk[] {
    const bytes = bitsToBytes(input.bytesConcat);
    const chunks: Chunk[] = [];

    let bitOffset = 0;
    let address = input.startAddress;

    while (bitOffset + 16 <= bytes.length * 8) {
        const first16 = readBits(bytes, bitOffset, 16);
        const aa = first16.slice(14, 16);        // bits[1:0]
        const bbb = first16.slice(11, 14);       // bits[4:2]
        const bits7 = first16.slice(9, 16);      // bits[6:0]
        const bit7 = first16[8];                 // bit[7]
        const nnn = first16.slice(5, 8);         // bits[10:8]

        let lengthBits = 0;

        if (aa !== "11") {
            lengthBits = 16;
        } else if (bbb !== "111") {
            lengthBits = 32;
        } else if (bits7.slice(1) === "011111") {
            lengthBits = 48;
        } else if (bits7.slice(1) === "111111") {
            if (bit7 === "0") {
                lengthBits = 64;
            } else {
                lengthBits = (nnn === "111") ? 192 : 80 + 16 * parseInt(nnn, 2);
            }
        } else {
            console.warn(`⚠ Unknown encoding at 0x${address.toString(16)}; fallback to 16-bit`);
            lengthBits = 16;
        }

        const rawBits = readBits(bytes, bitOffset, lengthBits);
        chunks.push({
            bits: new Bits(rawBits),
            address: address,
        });

        bitOffset += lengthBits;
        address += lengthBits / 8;
    }

    return chunks;
}
