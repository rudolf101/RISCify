import { Instruction } from "./Instruction";
import { BitDepth, InstructionDescription } from "./InstructionDescription";
import { Chunk } from "./Splitter";

export type SimilarInstructions = {
    instructions: Instruction[],
    chunk: Chunk,
};

export type FilterSettings = {
    bitDepth: BitDepth;
};

function disassembleOne(chunk: Chunk, descriptions: InstructionDescription[]): SimilarInstructions {
    const matches: Instruction[] = [];

    for (const desc of descriptions) {
        if (desc.matchBits(chunk.bits)) {
            matches.push(new Instruction(chunk.bits, desc));
        }
    }

    return {
        instructions: matches,
        chunk: chunk,
    };
}

function disassembleAll(chunks: Chunk[], descriptions: InstructionDescription[]): SimilarInstructions[] {
    return chunks.map(chunk => disassembleOne(chunk, descriptions));
}

function filter(instructions: SimilarInstructions, settings: FilterSettings): SimilarInstructions {
    const filtered = instructions.instructions.filter(instr =>
        (instr.wl & settings.bitDepth) !== 0
    );

    return {
        instructions: filtered,
        chunk: instructions.chunk,
    };
}

/**
 * Main disassembly function.
 *
 * Takes binary chunks and a list of instruction descriptions,
 * attempts to match each chunk to possible instructions, and filters them
 * according to the given bit depth.
 *
 * @param chunks - An array of binary chunks (each containing bits and address).
 * @param descriptions - All possible instruction descriptions.
 * @param settings - Filter settings (e.g., target bit depth like 32-bit, 64-bit).
 * @returns An array of matched and filtered instructions per chunk.
 */
export function disassemble(
    chunks: Chunk[],
    descriptions: InstructionDescription[],
    settings: FilterSettings
): SimilarInstructions[] {
    return disassembleAll(chunks, descriptions).map((si) => filter(si, settings));
}
