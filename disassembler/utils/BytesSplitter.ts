class BytesSplitter {
    /**
     * @param byteArrays array of bytes, each represented by Uint8Array(8),
     * where bits are ordered from least to greatest.
     * @returns array of bit sequences for instruction decoding
     * with bits ordered from least to greatest.
     */
    public static splitBytes(byteArrays: Uint8Array[]): Uint8Array[] {
        const emptyByte = new Uint8Array(8);
        const instructions: Uint8Array[] = [];
        const instructionSize = 4; // Only RV32i is supported for now

        for (let i = 0; i < byteArrays.length; i += instructionSize) {
            var instruction = new Uint8Array(32);
            for (var j = 0; j < instructionSize; j++)
                instruction.set(byteArrays.at(i + j) ?? emptyByte, 8 * j);
            instructions.push(instruction); // Little-Endian
        }

        return instructions;
    }
}

export { BytesSplitter };