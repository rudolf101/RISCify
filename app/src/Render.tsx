import { useState } from "react";
import { Disassembler } from "./generator/go"; 
import { Apply } from './generator/models';

const useDisassembler = () => {
    const [hexCode, setHexCode] = useState<string>('');
    const [instructions, setInstructions] = useState<Apply[][]>([]);

    const disassemble = () => {
        const byteArray = hexCode;

        const d = new Disassembler()
        const disassembledInstructions = d.dissasm(byteArray);

        // const formattedInstructions: string[][] = disassembledInstructions.map(instArr =>
        //     instArr.map(inst => `${inst.Instruction.mnemonic} ${inst.Args.map(arg => arg.value).join(', ')}`)
        // );
        const formattedInstructions: Apply[][] = disassembledInstructions
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
