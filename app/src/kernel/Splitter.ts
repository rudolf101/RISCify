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
}
