// generator/generate.ts

import fs from "fs";
import path from "path";
import yaml from "js-yaml";

import { DSLFile } from "./parser/types";
import { parseArgs } from "./parser/parseArgs";
import { parseFields } from "./parser/parseFields";
import { parseSets } from "./parser/parseSets";
import { Instruction } from "../kernel/Instruction";

export async function generateAll(): Promise<Instruction[]> {
    const dslDir = path.resolve(__dirname, "../../../dsl");
    const files = fs.readdirSync(dslDir).filter(f => f.endsWith(".yml"));

    const allInstructions: Instruction[] = [];

    for (const file of files) {
        const filePath = path.join(dslDir, file);
        const content = fs.readFileSync(filePath, "utf8");
        const parsed = yaml.load(content) as DSLFile;

        const args = parseArgs(parsed.Args ?? {});
        const fields = parseFields(parsed.Fields ?? {});
        const restricts = parseFields(parsed.Restricts ?? {});
        const instructions = parseSets(parsed.Sets, args, fields, restricts);

        allInstructions.push(...instructions);
    }

    return allInstructions;
}
