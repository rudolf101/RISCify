import { ReactNode } from "react";
import { SimilarInstructions } from "../kernel/Disassembler";
import { InstructionBox } from "./InstructionBox";

export type InstructionRowProps = {
    instructions: SimilarInstructions,
    // TODO: may add more
};

export function InstructionRow(props: InstructionRowProps): ReactNode {
    return <></>;
    // TODO
    /*
    Рендерит строку дизассемблерной таблицы.
    */
}
