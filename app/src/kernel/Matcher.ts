import { Span, parseSpan } from "./Span";
import { Bits } from "./Bits";

export class Matcher {
    private _span: Span;
    private _sample: Bits;

    constructor(spanStr: string, sampleStr: string) {
        this._span = parseSpan(spanStr);
        this._sample = new Bits(sampleStr);
    }

    public get span(): Span {
        return this._span;
    }

    public get sample(): Bits {
        return this._sample;
    }
}

export type Fields = Matcher[];
export type Restrict = Matcher[]; 
