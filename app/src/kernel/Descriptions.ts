import { ArgumentPattern } from "./ArgumentPattern";
import { BitDepth, InstructionDescription } from "./InstructionDescription";
import { Matcher } from "./Matcher";

// TODO
// YAML описание будет преобразовано в это
// В примере приведено описание инструкции `add`
export var descriptions: InstructionDescription[] = [
    new InstructionDescription("I", BitDepth.BIT_32 | BitDepth.BIT_64, 32, "add")
    .addField(new Matcher( "opcode", "0:6", "1100110"))
    .addField(new Matcher( "funct3", "12:14", "000"))
    .addField(new Matcher("funct7", "25:31", "0000000"))
    .addArg(new ArgumentPattern("rd", "7:11", "regx"))
    .addArg(new ArgumentPattern("rs1", "15:19", "regx"))
    .addArg(new ArgumentPattern("rs2", "20:24", "regx"))
];
