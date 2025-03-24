import { BitDepth, InstructionDescription, Jump } from "./InstructionDescription";
import { Bits } from "./Bits";
import { Argument } from "./Argument";

export class Instruction {
    private _description: InstructionDescription;
    private _args: Argument[];

    constructor(bits: Bits, description: InstructionDescription) {
        this._description = description;
        this._args = description.args.map((pattern) => new Argument(pattern.name, bits, pattern));
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
