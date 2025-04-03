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
    const all: Instruction[] = [];

    for (const file of files) {
        const fullPath = path.join(dslDir, file);
        const raw = fs.readFileSync(fullPath, "utf8");
        const parsed = yaml.load(raw) as DSLFile;

        const args = parseArgs(parsed.Args ?? {});
        const fields = parseFields(parsed.Fields ?? {});
        const restricts = parseFields(parsed.Restricts ?? {});
        const instructions = parseSets(parsed.Sets, args, fields, restricts);
        all.push(...instructions);
    }

    return all;
}
