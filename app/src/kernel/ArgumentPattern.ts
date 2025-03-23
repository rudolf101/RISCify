import { Bits } from "./Bits";
import { Span } from "./Span";
import { ArgumentInterpretation, argumentInterpretationFactory } from "./ArgumentInterpretation";

export class ArgumentPattern {
    private _span: Span;
    private _interpretation: ArgumentInterpretation;

    constructor(span: Span, displayStr: string) {
        this._span = span;
        this._interpretation = argumentInterpretationFactory(displayStr);
    }

    public get span(): Span {
        return this._span;
    }

    public get interpretation(): ArgumentInterpretation {
        return this._interpretation;
    }
}
