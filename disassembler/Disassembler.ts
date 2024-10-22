import { Instruction } from "./model/Instruction";
import { BytesSplitter } from "./utils/BytesSplitter";

class Disassembler {

    private static findInstruction(byteBuffer: Uint8Array[]): Instruction {
        return null;
    }

    static disassemble(byteBuffer: Uint8Array[]): Instruction[] {
        let instructionsBytes: Uint8Array[][] = BytesSplitter.splitBytes(byteBuffer);

        // return instructionsBytes.map(this.findInstruction)
        return null
    }
}

export { Disassembler };
