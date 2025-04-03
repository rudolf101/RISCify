import { DSLField } from "./types";
import { Matcher } from "../../kernel/Matcher";


function parseFieldEntry(key: string, field: DSLField): [string, Matcher] {
    const name = field.name;
    const matcher = new Matcher(name, field.span, field.value);
    return [key, matcher];
}

export function parseFields(fields: Record<string, DSLField>): Map<string, Matcher> {
    const result = new Map<string, Matcher>();
    for (const [key, field] of Object.entries(fields)) {
        result.set(...parseFieldEntry(key, field));
    }
    return result;
}
