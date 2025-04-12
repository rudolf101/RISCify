import { parseSpan, Span } from "./Span";
import { ArgumentInterpretation, argumentInterpretationFactory } from "./ArgumentInterpretation";

export class ArgumentPattern {
    private _name: string;
    private _span: Span;
    private _interpretation: ArgumentInterpretation;
    private _display: string;

    constructor(name: string, spanStr: string, displayStr: string) {
        this._name = name;
        this._span = parseSpan(spanStr);
        this._interpretation = argumentInterpretationFactory(displayStr);
        this._display = displayStr;
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

    public get display(): string {
        return this._display;
    }
}
