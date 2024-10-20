class BytesSplitter {

    public static splitBytes(byteArrays: Uint8Array[]): Uint8Array[][] {
        const instructions: Uint8Array[][] = [];
        const instructionSize = 4; // Only RV32i is supported for now

        for (let i = 0; i < byteArrays.length; i += instructionSize) {
            const instruction = byteArrays.slice(i, i + instructionSize);
            instructions.push(instruction.reverse()); // Little-Endian
        }

        return instructions;
    }
}

export { BytesSplitter };