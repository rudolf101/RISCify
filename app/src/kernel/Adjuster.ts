import { SimilarInstructions } from "./Disassembler";

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
    return instructions;
}
