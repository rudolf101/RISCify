
import { DSLSet, DSLInstruction } from "./types";
import { ArgumentPattern } from "../../kernel/ArgumentPattern";
import { Matcher } from "../../kernel/Matcher";
import { Instruction } from "../../kernel/Instruction";
import { InstructionDescription, BitDepth, Jump } from "../../kernel/InstructionDescription";
import { Bits } from "../../kernel/Bits";

export function parseSets(
    sets: DSLSet[],
    args: Map<string, ArgumentPattern>,
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
                const pattern = args.get(aname);
                if (!pattern) throw new Error(`Unknown arg: ${aname}`);
                desc.addArg(pattern);
            }

            if (instr.format !== undefined) {
                desc.argFormat = instr.format;
            }

            desc.jump = parseJump(instr.jump);

            const combinedBits = combineBits(desc.fields);
            result.push(new Instruction(combinedBits, desc));
        }
    }

    return result;
}

function parseDepth(depth: string): BitDepth {
    if (depth === "32") return BitDepth.BIT_32;
    if (depth === "64") return BitDepth.BIT_64;
    if (depth === "32|64") return BitDepth.BIT_32 | BitDepth.BIT_64;
    throw new Error(`Unknown depth: ${depth}`);
}

function parseJump(jump: string | number | undefined): Jump {
    if (jump === undefined) return { label: "none" };
    if (jump === "out") return { label: "out" };
    if (typeof jump === "number") return { label: "within", argIndex: jump };
    throw new Error(`Invalid jump value: ${jump}`);
}

function combineBits(matchers: Matcher[]): Bits {
    const maxIndex = matchers
        .flatMap(m => m.span)
        .reduce((a, b) => Math.max(a, b), 0);

    const bits = Array(maxIndex + 1).fill('0');

    for (const matcher of matchers) {
        const span = matcher.span;
        const sample = matcher.sample.data;

        for (let i = 0; i < span.length; i++) {
            const index = span[i];
            bits[index] = sample[i]; // Заполняем бит в нужной позиции
        }
    }

    return new Bits(bits.join(""));
}
