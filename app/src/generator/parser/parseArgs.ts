import { DSLArg } from "./types";

export function parseArgs(args: Record<string, DSLArg>): Map<string, DSLArg> {
    return new Map(Object.entries(args));
}
