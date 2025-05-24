import { Span, parseSpan } from "./Span";
import { Bits } from "./Bits";

export class Matcher {
    private _name: string;
    private _span: Span;
    private _sample: Bits;

    constructor(name: string | undefined, spanStr: string, sampleStr: string) {
        if (name == undefined) {
            this._name = "";
        }
        else {
            this._name = name;
        }
        this._span = parseSpan(spanStr);
        this._sample = new Bits(sampleStr);
    }

    public get name(): string {
        return this._name;
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
