import {Arg} from "./Arg";

class Instruction {
    constructor(name: String, args: Arg[]) {
        this._name = name;
        this._args = args;
    }

    private readonly _name: String;

    get name(): String {
        return this._name;
    }

    private readonly _args: Arg[];

    get args(): Arg[] {
        return this._args;
    }
}

export {Instruction};
