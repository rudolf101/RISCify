import { ArgumentPattern } from "./ArgumentPattern";
import { Bits } from "./Bits";
import { Span } from "./Span";

export class Argument {
    private _span: Span; // Чтобы можно было подсвечивать биты в UI
    private _bits: Bits; // Битовое представление 
    private _numerical: number; // Числовое представление
    private _textual: string; // Текстовое представление

    constructor(fullBits: Bits, pattern: ArgumentPattern) {
        var interpretation = pattern.interpretation;
        this._span = pattern.span;
        this._bits = fullBits.spanned(this._span);
        this._numerical = interpretation.numerical(this._bits);
        this._textual = interpretation.textual(this._bits);
    }

    public get span(): Span {
        return this._span;
    }

    public get bits(): Bits {
        return this._bits;
    }

    public get numerical(): number {
        return this._numerical;
    }

    public get textual(): string {
        return this._textual;
    }
}
