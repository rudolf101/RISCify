import { Span } from "./Span";
import { Matcher } from "./Matcher";

export class Bits {
    private _data: string;

    public constructor(bits: string) {
        this._data = bits;
    }

    public get data(): string {
        return this._data;
    }

    public get length(): number {
        return this._data.length;
    }

    public get bigEndian(): string {
        return this._data.split("").reverse().join("");
    }

    public get numerical(): bigint {
        const unsignedValue: bigint = this.unsigned;
        const n: bigint = BigInt(this._data.length);

        // Если старший бит равен 1, число отрицательное
        if (unsignedValue & (1n << (n - 1n))) {
            return unsignedValue - (1n << n);
        }

        return unsignedValue;
    }

    public get unsigned(): bigint {
        // Представить, что биты идут в little-endian
        // перевести в число на отрезке [0; 2^n-1]
        var data: string = this._data;
        var num: bigint = 0n;
        var radix: bigint = 1n;
        for (var i: number = 0; i < data.length; i++) {
            if (data[i] === '1') {
                num |= radix;
            }
            radix <<= 1n;
        }
        return num;
    }

    public equals(other: Bits): boolean {
        return this._data === other._data;
    }

    public spanned(span: Span): Bits {
        var retval: string = "";
        for (var i: number = 0; i < span.length; i++) {
            var index: number = span[i];
            if (index < 0 || index >= this._data.length) {
                retval += '0'
            }
            else {
                retval += this._data[span[i]]
            }
        }
        return new Bits(retval);
    }

    public match(matcher: Matcher): boolean {
        return this.spanned(matcher.span).equals(matcher.sample);
    }

    public matchFields(fields: Matcher[]): boolean {
        for (var i: number = 0; i < fields.length; i++)
            if (!this.match(fields[i]))
                return false;
        return true;
    }

    public matchRestricts(restricts: Matcher[]): boolean {
        for (var i: number = 0; i < restricts.length; i++)
            if (this.match(restricts[i]))
                return false;
        return true;
    }

    public matchBoth(fields: Matcher[], restricts: Matcher[]): boolean {
        return this.matchFields(fields) && this.matchRestricts(restricts);
    }
}
