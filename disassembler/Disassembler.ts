import {Instruction} from "./model/Instruction";
import {Arg} from "./model/Arg";

class Disassembler {

    static disassemble(byteBuffer: Uint8Array[]): Instruction[] {
        return byteBuffer.map((byte: Uint8Array): Instruction => {
            // Replace this with actual logic to convert byte to instruction
            const instructionName: string = "instruction-test"; // Example placeholder
            const args: Arg[] = [new Arg("arg-test")]; // Example placeholder
            return new Instruction(instructionName, args);
        });
    }
}

export {Disassembler};
