import { ReactNode } from "react";
import { SimilarInstructions } from "../kernel/Disassembler";
import { InstructionRow } from "./InstructionRow";

export type AssemblyTableProps = {
    instructions: SimilarInstructions[],
    // TODO: may add more
};

export function AssemblyTable(props: AssemblyTableProps): ReactNode {
    return <></>;
    // TODO
    /*
    Рендерит таблицу с инструкциями.
    */
}
