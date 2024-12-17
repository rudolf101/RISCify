export type Param = {
    name: string;
    span: string;
    display: string;
  }
  
 export type Field = {
    name: string;
    span: string;
    value: string;
  }
  
export type Instruction = {
    mnemonic: string;
    fields: string[];
    args: string[];
  }
  
export type InstructionSet = {
    name: string;
    size: string;
    instructions: Instruction[];
  }
  
export type YAMLData = {
    Args: { [key: string]: Param };
    Fields: { [key: string]: Field };
    Sets: InstructionSet[];
  }
  
export type Arg = {
  value: string;
}
  
export type Apply = {
  Instruction: Instruction
  Args: Arg[]
}