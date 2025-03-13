import { InstructionDescription, BitDepth, Jump } from "./InstructionDescription";
import { Bits } from "./Bits";
import { Argument } from "./Argument";
import { Matcher } from "./Matcher";
import React from "react";

export class Instruction {
    private _rvset: string; // идентификатор набора (I, M, C, Zifence, ...)
    private _wl: BitDepth; // битовые флаги, разрядность набора инструкций (для фильтрации)
    private _length: number; // длина инструкции в битах
    private _mnemonic: string; // ассемблерная мнемоника
    private _fields: Matcher[]; // участки бит, по которым инструкция идентифицируется
    private _args: Argument[]; // аргументы инструкции
    private _argFormat: string | undefined; // форматирование аргументов
    private _jump: Jump; // для control-flow инструкций: какой аргумент определяет переход

    constructor(bits: Bits, description: InstructionDescription) {
        this._rvset = description.rvset;
        this._wl = description.wl;
        this._length = description.length;
        this._mnemonic = description.mnemonic;
        this._fields = description.fields;
        this._args = description.args.map((pattern) => new Argument(bits, pattern));
        this._jump = description.jump;
    }

    public get rvset(): string {
        return this._rvset;
    }

    public get wl(): BitDepth {
        return this._wl;
    }

    public get length(): number {
        return this._length;
    }

    public get mnemonic(): string {
        return this._mnemonic;
    }

    public get fields(): Matcher[] {
        return this._fields;
    }

    public get args(): Argument[] {
        return this._args;
    }

    public get argFormat(): string | undefined {
        return this._argFormat;
    }

    public get jump(): Jump {
        return this._jump;
    }

    public formatted(): string {
        return "";
        // TODO
        /*
        Отформатировать аргументы в соответствии с форматом

        Если this._argFormat == undefined,
        то просто перечислить через запятую.

        Если this._argFormat содержит мало полей,
        излишние аргументы перечислить через запятую.

        Если this._argFormat содержит много полей,
        недостающие аргументы заменяются на пустые строки.

        Такую же функцию потом нужно
        будет сделать для реакта.

        Пример:
        this._args[0].textual = "x11"
        this._args[1].textual = "52"
        this._args[2].textual = "iorw"
        this._argFormat = "_(_) :: _"
        return -> "x11(52) :: iorw"

        Пример:
        this._args[0].textual = "x11"
        this._args[1].textual = "52"
        this._args[2].textual = "iorw"
        this._argFormat = undefined
        return -> "x11, 52, iorw"

        Пример:
        this._args[0].textual = "x11"
        this._args[1].textual = "52"
        this._args[2].textual = "iorw"
        this._argFormat = "_(_)"
        return -> "x11(52), iorw"
    
        Пример:
        this._args[0].textual = "x11"
        this._args[1].textual = "52"
        this._argFormat = "_(_) :: [_]"
        return -> "x11(52) :: []"
        */
    }
}
