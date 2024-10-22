import { useState } from "react";

class Arg {
    constructor(data: string) {
        this._data = data;
    }
  
    private readonly _data: string;
  
    get data(): string {
        return this._data;
    }
  }
  
  class Instruction {
    constructor(name: string, args: Arg[]) {
        this._name = name;
        this._args = args;
    }
  
    private readonly _name: string;
  
    get name(): string {
        return this._name;
    }
  
    private readonly _args: Arg[];
  
    get args(): Arg[] {
        return this._args;
    }
  }
  
  class Disassembler {
    private static findInstruction(byteBuffer: Uint8Array[]): Instruction {
        return new Instruction("add", [new Arg("x1"), new Arg("x2"), new Arg("x3")]);
    }
  
    static disassemble(byteBuffer: Uint8Array[]): Instruction[] {
        return [ Disassembler.findInstruction(byteBuffer), Disassembler.findInstruction(byteBuffer) ]
    }
  }
  
  const useDisassembler = () => {
    const [hexCode, setHexCode] = useState<string>('');
    const [instructions, setInstructions] = useState<string[]>([]);
  
    const handleDisassemble = () => {
      const byteArray = hexCode.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16)) || [];
      const byteBuffer = [new Uint8Array(byteArray)];
  
      const disassembledInstructions = Disassembler.disassemble(byteBuffer);
  
      const formattedInstructions: string[] = disassembledInstructions.map(inst => (
        `${inst.name} ${inst.args.map(arg => arg.data).join(', ')}`
      ));
  
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
