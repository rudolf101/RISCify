import {SimilarInstructions} from "./Disassembler";

/*
Внимание: `instructions` передаётся по ссылке, и может изменяться.

Эта функция делает финальную обработку вывода дизассемблера.

Расчёт переходов из InstructionDescription в конкретные переходы.
Дело в том, что первоначальные jump'ы указываются в байтах,
а для рендера нужны переходы в инструкциях,
а инструкции бывают разных размеров.
Для этого для каждой инструкции необходимо установить поле `actualJump`.
*/
export function adjuster(instructions: SimilarInstructions[]): SimilarInstructions[] {
    for (let i = 0; i < instructions.length; i++) {
        const similarInstructions = instructions[i];
        if (!similarInstructions.instructions.length) {
            continue;
        }
        const instruction = similarInstructions.instructions[0];
        switch (instruction.description.jump.label) {
            case "none":
                instruction.actualJump = {label: "none"};
                break;
            case "out":
                instruction.actualJump = {label: "out"};
                break;
            case "within":
                let curInstructionIndex = i;
                let curDistanceInBytes = instruction.args[instruction.description.jump.argIndex].numerical;
                while (true) {
                    if (curDistanceInBytes > 0) {
                        const curInstructionLengthInBytes = BigInt(instructions[curInstructionIndex].chunk.bits.length / 8);
                        if (curDistanceInBytes < curInstructionLengthInBytes) {
                            instruction.actualJump = {
                                label: "between",
                                distance: curInstructionIndex - i,
                                offset: curDistanceInBytes
                            };
                            break;
                        } else {
                            curDistanceInBytes -= curInstructionLengthInBytes;
                        }
                        curInstructionIndex++;
                        if (curInstructionIndex >= instructions.length) {
                            instruction.actualJump = {
                                label: "front",
                            };
                            break;
                        }
                    } else if (curDistanceInBytes < 0) {
                        curInstructionIndex--;
                        if (curInstructionIndex < 0) {
                            instruction.actualJump = {
                                label: "back",
                            };
                            break;
                        }
                        const curInstructionLengthInBytes = BigInt(instructions[curInstructionIndex].chunk.bits.length / 8);
                        if (-curDistanceInBytes < curInstructionLengthInBytes) {
                            instruction.actualJump = {
                                label: "between",
                                distance: curInstructionIndex - i,
                                offset: curInstructionLengthInBytes + curDistanceInBytes
                            };
                            break;
                        } else {
                            curDistanceInBytes += curInstructionLengthInBytes;
                        }
                    } else {
                        instruction.actualJump = {
                            label: "concrete",
                            distance: curInstructionIndex - i
                        };
                        break;
                    }
                }
                break;
        }
    }
    return instructions;
}
