import { Bits } from "./Bits";
import { Matcher } from "./Matcher";
import { ArgumentPattern } from "./ArgumentPattern";
import { Span } from "./Span";

// Для инструкций, которые не управляют потоком управления
export type JumpNone = {
    label: "none"
};

// Для инструкций потока управления, когда заранее расчитать переход нельзя
// (например jal x1, -5)
export type JumpOut = {
    label: "out"
};

// Для инструкций потока управления, которые константно указывают на место в коде
export type JumpWithin = {
    label: "within",
    argIndex: number
};

export type Jump = JumpNone | JumpOut | JumpWithin;

export enum BitDepth {
    BIT_32 = 1 << 0,
    BIT_64 = 1 << 1,
    BIT_128 = 1 << 2,
    BIT_DEFAULT = BIT_32 | BIT_64 | BIT_128,
}

export class InstructionDescription {
    private _rvset: string; // идентификатор набора (I, M, C, Zifence, ...)
    private _wl: BitDepth; // битовые флаги, разрядность набора инструкций (для фильтрации)
    private _length: number; // длина инструкции в битах
    private _mnemonic: string; // ассемблерная мнемоника
    private _fields: Matcher[]; // участки бит, по которым инструкция идентифицируется
    private _restricts: Matcher[]; // участки бит, которых в инструкции быть не должно
    private _args: ArgumentPattern[]; // описания аргументов инструкции
    private _argFormat: string | undefined; // форматирование аргументов
    private _jump: Jump; // для control-flow инструкций: какой аргумент определяет переход

    constructor(rvset: string, wl: BitDepth, length: number, mnemonic: string) {
        this._rvset = rvset;
        this._wl = wl;
        this._length = length;
        this._mnemonic = mnemonic;
        this._fields = [];
        this._restricts = [];
        this._args = [];
        this._argFormat = undefined;
        this._jump = { label: "none" };
    }

    public get rvset(): string {
        return this._rvset;
    }

    public get wl(): BitDepth {
        return this._wl;
    }

    public get length(): number {
        return this._length
    }

    public get mnemonic(): string {
        return this._mnemonic;
    }

    public get fields(): Matcher[] {
        return this._fields;
    }

    public get restricts(): Matcher[] {
        return this._restricts;
    }

    public get args(): ArgumentPattern[] {
        return this._args;
    }

    public get argFormat(): string | undefined {
        return this._argFormat;
    }

    public get jump(): Jump {
        return this._jump;
    }

    public set argFormat(format: string | undefined) {
        this.argFormat = format;
    }

    public set jump(index: Jump) {
        this._jump = index;
    }

    public addField(field: Matcher) {
        this.fields.push(field);
    }

    public addRestrict(restrict: Matcher) {
        this.restricts.push(restrict);
    }

    public addArg(arg: ArgumentPattern) {
        this.args.push(arg);
    }

    public matchBits(bits: Bits): boolean {
        return this._length === bits.length && bits.matchBoth(this._fields, this._restricts);
    }
}
