import { Instruction } from "./Instruction";
import { InstructionDescription } from "./InstructionDescription";
import { Chunk } from "./Splitter";
import { BitDepth } from "./InstructionDescription";

export type SimilarInstructions = {
    instructions: Instruction[],
    chunk: Chunk,
}

export type FilterSettings = {
    bitDepth: BitDepth, // оставлять, если есть пересечение
};

export function disassembleOne(chunk: Chunk, descriptions: InstructionDescription[]): SimilarInstructions {
    return {
        instructions: [],
        chunk: chunk
    };
    // TODO
}

export function disassembleAll(chunks: Chunk[], descriptions: InstructionDescription[]): SimilarInstructions[] {
    return [];
    // TODO
}

export function filter(instructions: SimilarInstructions, settings: FilterSettings): SimilarInstructions {
    return instructions;
    // TODO
}

export function disassemble(
    chunks: Chunk[],
    descriptions: InstructionDescription[],
    settings: FilterSettings
): SimilarInstructions[] {
    return disassembleAll(chunks, descriptions).map((si) => filter(si, settings));
}
