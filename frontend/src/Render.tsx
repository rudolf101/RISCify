import { useState } from "react";
import { Disassembler } from "./disassembler/Disassembler"; 

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

    const handleDisassemble = () => {
        const byteArray = hexCode.trim().split(/\s+/) 
            .map(byte => parseInt(byte, 16))
            .filter(byte => !isNaN(byte));

        console.error("byteArray:", byteArray);

        const byteBuffer = byteArray.map((b) =>  numberToUnit8Array(b));
        console.error("byteBuffer:", byteBuffer);

        const disassembledInstructions = Disassembler.disassemble(byteBuffer);

        const formattedInstructions: string[][] = disassembledInstructions.map(instArr =>
            instArr.map(inst => `${inst.name} ${inst.args.map(arg => arg.data).join(', ')}`)
        );

        setInstructions(formattedInstructions);
    };

    return {
        hexCode,
        setHexCode,
        instructions,
        handleDisassemble,
    };
}

export default useDisassembler;
