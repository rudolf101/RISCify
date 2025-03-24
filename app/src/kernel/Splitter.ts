import { ValidInput } from "./InputParser";
import { Bits } from "./Bits";

export type Chunk = {
    bits: Bits,
    address: number, // адрес первого байта чанка
};

export function splitter(input: ValidInput): Chunk[] {
    return [];
    // TODO
    // Разбивает инпут на чанки в соответствии с
    // правилами определения длины инструкции
    /*
    
    input:
    startAddress: 0x0010
    bytesConcat: 001100110011001111001100110011001100110011001100...
    
    return:
    [
        {"0011001100110011", 0x0010},
        {"11001100110011001100110011001100", 0x0012}
    ]

    */
}
