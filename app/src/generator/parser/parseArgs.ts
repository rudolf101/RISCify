import { DSLArg } from "./types";
import { ArgumentPattern } from "../../kernel/ArgumentPattern";

export function parseArgs(args: Record<string, DSLArg>): Map<string, ArgumentPattern> {
    const result = new Map<string, ArgumentPattern>();

    for (const [key, arg] of Object.entries(args)) {
        const pattern = new ArgumentPattern(arg.name, arg.span, arg.display);
        result.set(key, pattern);
    }

    return result;
}