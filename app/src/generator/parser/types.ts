export interface DSLFile {
    Args?: Record<string, DSLArg>;
    Fields?: Record<string, DSLField>;
    Restricts?: Record<string, DSLField>;
    Sets: DSLSet[];
}

export interface DSLArg {
    name: string;
    /**
     * @pattern ^(\d+(\s*:\s*\d+)?)(,\d+(\s*:\s*\d+)?)*$
     */
    span: string;
    display: string;
}

export interface DSLField {
    name?: string;
    /**
     * @pattern ^(\d+(\s*:\s*\d+)?)(,\d+(\s*:\s*\d+)?)*$
     */
    span: string;
    value: string;
}

export type Depth = "32" | "64" | "128" | "32|64" | "32|128" | "64|128" | "32|64|128";

export interface DSLSet {
    name: string;
    size: number;
    depth: Depth;
    instructions: DSLInstruction[];
}

export interface DSLInstruction {
    mnemonic: string;
    fields: string[];
    restricts?: string[];
    args?: string[];
    format?: string;
    jump?: "out" | number;
}
