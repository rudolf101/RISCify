import { useState } from "react";
import { Disassembler } from "./generator/go"; 

function numberToUnit8Array(x: number): Uint8Array {
    let acc = new Uint8Array(8);
    
    for (let i = 0; i < 8; i++) {
        acc[i] = (x >> i) & 1;
    }

    return acc
}

const useDisassembler = () => {
    const [hexCode, setHexCode] = useState<string>('');
    const [instructions, setInstructions] = useState<string[][]>([]);

    const disassemble = () => {
        const byteArray = hexCode;

        const d = new Disassembler()
        const disassembledInstructions = d.dissasm(byteArray);

        const formattedInstructions: string[][] = disassembledInstructions.map(instArr =>
            instArr.map(inst => `${inst.Instruction.mnemonic} ${inst.Args.map(arg => arg.value).join(', ')}`)
        );

        setInstructions(formattedInstructions);
    };

    return {
        hexCode,
        setHexCode,
        instructions,
        disassemble: disassemble,
    };
}

export default useDisassembler;
