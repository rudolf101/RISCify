export type Span = number[];

/**
 * Parses a span string into an array of indices.
 *
 * Grammar:
 *   Span           ::= SpanElement | SpanElement ',' Span
 *   SpanElement    ::= NUMBER | NUMBER '-' NUMBER
 *   NUMBER         ::= [0-9]+
 *
 * Examples:
 *   "0"                  => [0]
 *   "5"                  => [5]
 *   "1,4,0,2"            => [1, 4, 0, 2]
 *   "0-6"                => [0, 1, 2, 3, 4, 5, 6]
 *   "0-7,12-14,8-11,15"  => [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 8, 9, 10, 11, 15]
 *
 * @param span A string representing a list of indices or ranges.
 * @returns A flat array of numbers expanded from the given span.
 * @throws Error if the span contains invalid syntax or reversed ranges.
 */
export function parseSpan(span: string): Span {
    const result: number[] = [];

    for (const part of span.split(',')) {
        const trimmed = part.trim().replace(/:/g, '-');
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
