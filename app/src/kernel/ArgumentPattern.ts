import { Bits } from "./Bits";
import { Span } from "./Span";
import { ArgumentInterpretation, argumentInterpretationFactory } from "./ArgumentInterpretation";

export class ArgumentPattern {
    private _name: string;
    private _span: Span;
    private _interpretation: ArgumentInterpretation;

    constructor(name: string, span: Span, displayStr: string) {
        this._name = name;
        this._span = span;
        this._interpretation = argumentInterpretationFactory(displayStr);
    }

    public get name(): string {
        return this._name;
    }

    public get span(): Span {
        return this._span;
    }

    public get interpretation(): ArgumentInterpretation {
        return this._interpretation;
    }
}
