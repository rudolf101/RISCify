import { ReactNode } from "react";
import { Instruction } from "../kernel/Instruction";

export type InstructionBoxProps = {
    instruction: Instruction,
    // TODO: may add more
};

export function InstructionBox(props: InstructionBoxProps): ReactNode {
    return <></>;
    // TODO
    /*
    Рендерит инструкцию.
    Аргументы рендерить в соответствии с argFormat,
    аргументы обрамлять в <span>, чтобы можно было
    сделать подсветку битов при наведении
    */
}
