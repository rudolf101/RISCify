import {SimilarInstructions} from "./Disassembler";

/*
TODO
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
        const instruction = similarInstructions.instructions[0];
        switch (instruction.jump.label) {
            case "none":
                instruction.actualJump = {label: "none"};
                break;
            case "out":
                instruction.actualJump = {label: "out"};
                break;
            case "within":
                let curInstructionIndex = i;
                let curDistanceInBytes = instruction.args[instruction.jump.argIndex].numerical;
                while (true) {
                    if (curDistanceInBytes > 0) {
                        const curInstructionLengthInBytes = instructions[curInstructionIndex].instructions[0].length / 8;
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
                    } else if (curDistanceInBytes < 0) {
                        curInstructionIndex--;
                        const curInstructionLengthInBytes = instructions[curInstructionIndex].instructions[0].length / 8;
                        if (-curDistanceInBytes < curInstructionLengthInBytes) {
                            instruction.actualJump = {
                                label: "between",
                                distance: i - curInstructionIndex,
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
                    if (curInstructionIndex < 0) {
                        instruction.actualJump = {
                            label: "back",
                        };
                    }
                    if (curInstructionIndex >= instructions.length) {
                        instruction.actualJump = {
                            label: "front",
                        };
                    }
                }
                break;
        }
    }
    return instructions;
}
