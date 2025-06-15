import { DSLArg, DSLSet } from "./types";
import { Matcher } from "../../kernel/Matcher";
import { Instruction } from "../../kernel/Instruction";
import { BitDepth, InstructionDescription, Jump } from "../../kernel/InstructionDescription";
import { Bits } from "../../kernel/Bits";
import { ArgumentPattern } from "../../kernel/ArgumentPattern";

export function parseSets(
    sets: DSLSet[],
    args: Map<string, DSLArg>,
    fields: Map<string, Matcher>,
    restricts: Map<string, Matcher>
): Instruction[] {
    const result: Instruction[] = [];

    for (const set of sets) {
        const wl: BitDepth = parseDepth(set.depth);

        for (const instr of set.instructions) {
            const desc = new InstructionDescription(set.name, wl, set.size, instr.mnemonic);

            for (const fname of instr.fields) {
                const matcher = fields.get(fname);
                if (!matcher) throw new Error(`Unknown field: ${fname}`);
                desc.addField(matcher);
            }

            for (const rname of instr.restricts ?? []) {
                const matcher = restricts.get(rname);
                if (!matcher) throw new Error(`Unknown restrict: ${rname}`);
                desc.addRestrict(matcher);
            }

            for (const aname of instr.args ?? []) {
                const arg = args.get(aname);
                if (!arg) throw new Error(`Unknown arg: ${aname}`);
                desc.addArg(new ArgumentPattern(arg.name, arg.span, arg.display));
            }

            if (instr.format !== undefined) {
                desc.argFormat = instr.format;
            }

            desc.jump = parseJump(instr.jump);
            const bits = combineBits(desc.fields);
            result.push(new Instruction(bits, desc));
        }
    }

    return result;
}

function parseDepth(depth: string): BitDepth {
    if (depth === "32") return BitDepth.BIT_32;
    if (depth === "64") return BitDepth.BIT_64;
    if (depth === "128") return BitDepth.BIT_128;
    if (depth === "32|64") return BitDepth.BIT_32 | BitDepth.BIT_64;
    if (depth === "32|128") return BitDepth.BIT_32 | BitDepth.BIT_128;
    if (depth === "64|128") return BitDepth.BIT_64 | BitDepth.BIT_128;
    if (depth === "32|64|128") return BitDepth.BIT_32 | BitDepth.BIT_64 | BitDepth.BIT_128;
    throw new Error(`Unknown depth: ${depth}`);
}

function parseJump(jump: string | number | undefined): Jump {
    if (jump === undefined) return { label: "none" };
    if (jump === "out") return { label: "out" };
    if (typeof jump === "number") return { label: "within", argIndex: jump };
    throw new Error(`Invalid jump: ${jump}`);
}

function combineBits(matchers: Matcher[]): Bits {
    const maxIndex = matchers.flatMap(m => m.span).reduce((a, b) => Math.max(a, b), 0);
    const bits = Array(maxIndex + 1).fill("0");
    for (const matcher of matchers) {
        const span = matcher.span;
        const sample = matcher.sample.data;
        for (let i = 0; i < span.length; i++) {
            bits[span[i]] = sample[i];
        }
    }
    return new Bits(bits.join(""));
}
