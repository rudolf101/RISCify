import { adjuster } from "./Adjuster";
import { descriptions } from "./Description.generated";
import { disassemble, FilterSettings, SimilarInstructions } from "./Disassembler";
import { inputParser, InputSettings } from "./InputParser";
import { splitter } from "./Splitter";

type DisassembleOutputValid = {
    valid: "valid",
    result: SimilarInstructions[]
};

type DisassembleOutputInvalid = {
    valid: "invalid",
    message: string
};

type DisassembleOutput = DisassembleOutputValid | DisassembleOutputInvalid;

export default function performDisassemble(
    dump: string,
    inputSettings: InputSettings,
    filterSettings: FilterSettings
): DisassembleOutput {
    var input = inputParser(dump, inputSettings);
    if (input.valid === "invalid") {
        return {
            valid: "invalid",
            message: input.message
        };
    }
    var split = splitter(input);
    var disassembled = disassemble(split, descriptions, filterSettings);
    disassembled = adjuster(disassembled);
    return {
        valid: "valid",
        result: disassembled
    };
}
