import { generateAll } from "./generate";
import fs from "fs";
import path from "path";
import { Instruction } from "../kernel/Instruction";
import { ArgumentPattern } from "../kernel/ArgumentPattern";

function quote(str: String | ArgumentPattern) {
    return JSON.stringify(str);
}

function serialize(instr: Instruction): string {
    const d = instr.description;
    const parts: string[] = [];

    parts.push(`(() => {`);
    parts.push(`  const d = new InstructionDescription(${quote(d.rvset)}, ${d.wl}, ${d.length}, ${quote(d.mnemonic)});`);

    for (const f of d.fields) {
        parts.push(`  d.addField(new Matcher(${quote(f.name)}, new Span(${JSON.stringify(f.span)}), new Bits(${quote(f.sample.data)})));`);
    }

    for (const r of d.restricts) {
        parts.push(`  d.addRestrict(new Matcher(${quote(r.name)}, new Span(${JSON.stringify(r.span)}), new Bits(${quote(r.sample.data)})));`);
    }

    for (const a of d.args) {
        parts.push(`  d.addArg(${quote(a)});`);
    }

    if (d.argFormat !== undefined) {
        parts.push(`  d.argFormat = ${quote(d.argFormat)};`);
    }

    parts.push(`  d.jump = ${serializeJump(d.jump)};`);
    parts.push(`  return d;`);
    parts.push(`})()`);
    return parts.join("\n");
}

function serializeJump(jump: any): string {
    if (jump.label === "none") return `{ label: "none" }`;
    if (jump.label === "out") return `{ label: "out" }`;
    if (jump.label === "within") return `{ label: "within", argIndex: ${jump.argIndex} }`;
    throw new Error(`Unknown jump type: ${jump.label}`);
}

async function main() {
    const instructions = await generateAll();
    const lines = instructions.map(serialize);

    const output = `// Auto-generated file. Do not edit manually.

import { InstructionDescription, BitDepth } from "../kernel/InstructionDescription";
import { Matcher } from "../kernel/Matcher";
import { Bits } from "../kernel/Bits";
import { Span } from "../kernel/Span";
import { ArgumentPattern } from "../kernel/ArgumentPattern";
import { argumentInterpretationFactory } from "../kernel/ArgumentInterpretation";

export const INSTRUCTIONS: InstructionDescription[] = [
${lines.join(",\n\n")}
];
`;

    const outPath = path.resolve(__dirname, "instructions.generated.ts");
    fs.writeFileSync(outPath, output);
    console.log("✅ Generated:", outPath);
}

main().catch((err) => {
    console.error("❌ Generation failed:", err);
    process.exit(1);
});
