export type Span = number[];

/**
 * Parses a span string like "0-3,5,7-9" into an array of numbers.
 *
 * Supports:
 * - single numbers: "5" => [5]
 * - ranges: "0-3" => [0,1,2,3]
 * - mixed: "0-2,4,6-7" => [0,1,2,4,6,7]
 *
 * @param span The string to parse
 * @returns A list of numbers from the span
 */
export function parseSpan(span: string): Span {
    const result: number[] = [];

    for (const part of span.split(',')) {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
            const [startStr, endStr] = trimmed.split('-');
            const start = parseInt(startStr, 10);
            const end = parseInt(endStr, 10);

            if (isNaN(start) || isNaN(end) || start > end) {
                throw new Error(`Invalid range: ${part}`);
            }

            for (let i = start; i <= end; i++) {
                result.push(i);
            }
        } else {
            const num = parseInt(trimmed, 10);
            if (isNaN(num)) {
                throw new Error(`Invalid number: ${part}`);
            }
            result.push(num);
        }
    }

    return result;
}
