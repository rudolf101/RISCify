class BytesSplitter {

    public static splitBytes(byteArrays: Uint8Array[], instructionSize: number): Uint8Array[][] {
        const instructions: Uint8Array[][] = [];

        for (let i = 0; i < byteArrays.length; i += instructionSize) {
            const instruction = byteArrays.slice(i, i + instructionSize);
            instructions.push(instruction);
        }

        return instructions;
    }
}

export { BytesSplitter };
