import { BitDepth, InstructionDescription, Jump } from "./InstructionDescription";
import { Bits } from "./Bits";
import { Argument } from "./Argument";

// Инструкция не является control-flow
type ActualJumpNone = {
    label: "none",
};

// Переход в отрицательную сторону, но за пределы дампа
type ActualJumpBack = {
    label: "back",
};

// Переход в положительную сторону, но за пределы дампа
type ActualJumpFront = {
    label: "front",
};

// Переход в положительную или отрицательную сторону, но в пределах дампа
type ActualJumpConcrete = {
    label: "concrete",
    distance: number // смещение в инструкциях, а не байтах
};

// Переход невозможно рассчитать в compile-time (напирмер зависит от значения в регистре, как в jalr)
type ActualJumpOut = {
    label: "out",
};

// Переход указыает на место посреди инструкции.
// Например:
//   nop   ; 4 байта
//   j -2  ; перемещаемся на 2 байта назад (на середину nop)
type ActualJumpBetween = {
    label: "between",
    distance: number, // указывает на ближайшую инструкцию вниз
    offset: string // количество байт от начала инструкции
};

// Основное отличие от Jump в модуле InstructionDescription:
// distance даётся в инструкциях, а не байтах
type ActualJump
    = ActualJumpNone
    | ActualJumpBack
    | ActualJumpFront
    | ActualJumpConcrete
    | ActualJumpOut
    | ActualJumpBetween
    ;

export class Instruction {
    private _description: InstructionDescription;
    private _args: Argument[];
    private _actualJump: ActualJump;

    constructor(bits: Bits, description: InstructionDescription) {
        this._description = description;
        this._args = description.args.map((pattern) => new Argument(pattern.name, bits, pattern));
        this._actualJump = { label: "none" };
    }

    public get description(): InstructionDescription {
        return this._description;
    }

    public get rvset(): string {
        return this._description.rvset;
    }

    public get wl(): BitDepth {
        return this._description.wl;
    }

    public get length(): number {
        return this._description.length;
    }

    public get mnemonic(): string {
        return this._description.mnemonic;
    }

    public get fields() {
        return this._description.fields;
    }

    public get argFormat(): string | undefined {
        return this._description.argFormat;
    }

    public get args(): Argument[] {
        return this._args;
    }

    public get jump(): Jump {
        return this._description.jump;
    }

    public get actualJump(): ActualJump {
        return this._actualJump;
    }

    public set actualJump(newActualJump: ActualJump) {
        this._actualJump = newActualJump;
    }

    /**
     * Returns a formatted string representation of the instruction arguments.
     *
     * If `argFormat` is `undefined`, the arguments are joined with commas.
     * Otherwise, each underscore `_` in the format string is replaced by an argument.
     * Extra arguments are appended. Missing ones are rendered as empty.
     */
    public formatted(): string {
        const args = this._args.map(arg => arg.textual);

        if (!this.argFormat) {
            return args.join(', ');
        }

        let result = '';
        let index = 0;

        for (let i = 0; i < this.argFormat.length; i++) {
            const char = this.argFormat[i];
            if (char === '_') {
                result += index < args.length ? args[index++] : '';
            } else {
                result += char;
            }
        }

        if (index < args.length) {
            result += ', ' + args.slice(index).join(', ');
        }

        return result;
    }
}
