import { ArgumentPattern } from "./ArgumentPattern";
import { Bits } from "./Bits";
import { Span } from "./Span";

export class Argument {
    private _name: string;
    private _span: Span; // Чтобы можно было подсвечивать биты в UI
    private _bits: Bits; // Битовое представление 
    private _numerical: bigint; // Числовое представление
    private _textual: string; // Текстовое представление

    constructor(name: string, fullBits: Bits, pattern: ArgumentPattern) {
        this._name = name;
        var interpretation = pattern.interpretation;
        this._span = pattern.span;
        this._bits = fullBits.spanned(this._span);
        this._numerical = interpretation.numerical(this._bits);
        this._textual = interpretation.textual(this._bits);
    }

    public get name(): string {
        return this._name;
    }

    public get span(): Span {
        return this._span;
    }

    public get bits(): Bits {
        return this._bits;
    }

    public get numerical(): bigint {
        return this._numerical;
    }

    public get textual(): string {
        return this._textual;
    }
}
