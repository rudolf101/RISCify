import { generateAll } from "./generate";
import fs from "fs";
import path from "path";
import { Instruction } from "../kernel/Instruction";

function q(str: string): string {
    return JSON.stringify(str);
}

function spanToStr(span: number[]): string {
    return span.join(",");
}

function serialize(inst: Instruction): string {
    const d = inst.description;
    const lines: string[] = [];

    lines.push(`new InstructionDescription(${q(d.rvset)}, ${d.wl}, ${d.length}, ${q(d.mnemonic)})`);

    for (const f of d.fields) {
        lines.push(`  .addField(new Matcher(${q(f.name)}, "${f.span.join(",")}", ${q(f.sample.data)}))`);
    }

    for (const r of d.restricts) {
        lines.push(`  .addRestrict(new Matcher(${q(r.name)}, "${r.span.join(",")}", ${q(r.sample.data)}))`);
    }

    for (const a of d.args) {
        lines.push(`  .addArg(new ArgumentPattern(${q(a.name)}, ${q(spanToStr(a.span))}, ${q(a.name)}))`);
    }

    if (d.argFormat) {
        lines.push(`  .setArgFormat(${q(d.argFormat)})`);
    }

    lines.push(`  .setJump(${serializeJump(d.jump)})`);

    return lines.join("\n");
}

function serializeJump(j: any): string {
    if (j.label === "none") return `{ label: "none" }`;
    if (j.label === "out") return `{ label: "out" }`;
    if (j.label === "within") return `{ label: "within", argIndex: ${j.argIndex} }`;
    throw new Error("Unknown jump: " + JSON.stringify(j));
}

async function main() {
    const instructions = await generateAll();
    const body = instructions.map(serialize).join(",\n\n");

    const content = `// Auto-generated file. Do not edit manually.

import { InstructionDescription } from "../kernel/InstructionDescription";
import { Matcher } from "../kernel/Matcher";
import { ArgumentPattern } from "../kernel/ArgumentPattern";

export const INSTRUCTIONS: InstructionDescription[] = [
${body}
];
`;

    fs.writeFileSync(path.resolve(__dirname, "instructions.generated.ts"), content);
    console.log("✅ Generated instructions.generated.ts");
}

main().catch((err) => {
    console.error("❌ Generation failed:", err);
    process.exit(1);
});
