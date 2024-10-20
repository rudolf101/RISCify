import {Instruction} from "./model/Instruction";
import {BytesSplitter} from "./utils/BytesSplitter";

class Disassembler {

    private static findInstruction(byteBuffer: Uint8Array[]): Instruction {
        return null;
    }

    static disassemble(byteBuffer: Uint8Array[]): Instruction[] {
        let instructionBytes: Uint8Array[][] = BytesSplitter.splitBytes(byteBuffer, 4);

        return instructionBytes.map((instructionBytes: Uint8Array[]): Instruction => {
            return this.findInstruction(instructionBytes);
        });
    }
}

export {Disassembler};
