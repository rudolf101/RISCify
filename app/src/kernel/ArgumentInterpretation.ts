import { Bits } from "./Bits";

export abstract class ArgumentInterpretation {
    public abstract textual(bits: Bits): string;
    public abstract numerical(bits: Bits): bigint;
}

class InvalidInterpretation extends ArgumentInterpretation {
    public textual(bits: Bits): string {
        return "<invalid arg>";
    }

    public numerical(bits: Bits): bigint {
        return 0n;
    }
}

class ConstInterpretation extends ArgumentInterpretation {
    private _value: bigint

    constructor(value: bigint) {
        super();
        this._value = value;
    }

    public textual(bits: Bits): string {
        return this.numerical(bits).toString();
    }

    public numerical(_bits: Bits): bigint {
        return this._value;
    }
}

class UnumInterpretation extends ArgumentInterpretation {
    private _multiplier: bigint

    constructor(shift: bigint) {
        super();
        this._multiplier = 1n << shift;
    }

    public textual(bits: Bits): string {
        return this.numerical(bits).toString();
    }

    public numerical(bits: Bits): bigint {
        return bits.unsigned * BigInt(this._multiplier);
    }
}

class NumInterpretation extends ArgumentInterpretation {
    private _multiplier: bigint

    constructor(shift: bigint) {
        super();
        this._multiplier = 1n << shift;
    }

    public textual(bits: Bits): string {
        return this.numerical(bits).toString();
    }

    public numerical(bits: Bits): bigint {
        return bits.numerical * BigInt(this._multiplier);
    }
}

enum RegType {
    INTEGER,
    FLOATING,
    VECTOR
};

class RegInterpretation extends ArgumentInterpretation {
    private _type: RegType
    private _offset: bigint

    constructor(type: RegType, offset: bigint) {
        super();
        this._type = type;
        this._offset = offset;
    }

    public textual(bits: Bits): string {
        switch (this._type) {
        case RegType.INTEGER:
            return [
                "zero", "ra", "sp", "gp", "tp", "t0", "t1", "t2",
                "s0", "s1", "a0", "a1", "a2", "a3", "a4", "a5",
                "a6", "a7", "s2", "s3", "s4", "s5", "s6", "s7",
                "s8", "s9", "s10", "s11", "t3", "t4", "t5", "t6"
            ][Number(this.numerical(bits))];
        case RegType.FLOATING:
            return [
                "ft0", "ft1", "ft2", "ft3", "ft4", "ft5", "ft6", "ft7",
                "fs0", "fs1", "fa0", "fa1", "fa2", "fa3", "fa4", "fa5",
                "fa6", "fa7", "fs2", "fs3", "fs4", "fs5", "fs6", "fs7",
                "fs8", "fs9", "fs10", "fs11", "ft8", "ft9", "ft10", "ft11"
            ][Number(this.numerical(bits))];
        case RegType.VECTOR:
            return "v" + this.numerical(bits).toString();
        }
    }

    public numerical(bits: Bits): bigint {
        return bits.unsigned + BigInt(this._offset);
    }
}

class FenceInterpretation extends ArgumentInterpretation {
    public textual(bits: Bits): string {
        return [  '0',   'w',   'r',   'rw',
                  'o',  'ow',  'or',  'orw',
                  'i',  'iw',  'ir',  'irw',
                 'io', 'iow', 'ior', 'iorw' ][Number(this.numerical(bits))];
    }

    public numerical(bits: Bits): bigint {
        return bits.unsigned % 16n;
    }
}

class RmInterpretation extends ArgumentInterpretation {
    public textual(bits: Bits): string {
        return ['rne', 'rtz', 'rdn', 'rup', 'rmm', '-', '-', 'dyn'][Number(this.numerical(bits))];
    }

    public numerical(bits: Bits): bigint {
        return bits.unsigned % 8n;
    }
}

class ParInterpretation extends ArgumentInterpretation {
    private _sub: ArgumentInterpretation;

    constructor(sub: ArgumentInterpretation) {
        super();
        this._sub = sub;
    }

    public textual(bits: Bits): string {
        return "(" + this._sub.textual(bits) + ")";
    }

    public numerical(bits: Bits): bigint {
        return this._sub.numerical(bits);
    }
}


export function argumentInterpretationFactory(description: string): ArgumentInterpretation {
    /*
    Displays accept n bits in LITTLE ENDIAN:
      const(k):
        k, regardless of the bits

      regx:
        'x' followed by a number in [0; 2^n-1]
        eg:
          [0,1,1,0,0] -> 'x6'
          [0,1,1,0,1] -> 'x22'

      regf:
        'f' followed by a number in [0; 2^n-1]
        eg:
          [0,1,1,0,0] -> 'f6'
          [0,1,1,0,1] -> 'f22'

      regcx:
        'x' followed by a number in [0; 2^n-1] plus 8
        eg:
          [0,1,1] -> 'x14'
          [0,1,0] -> 'x10'

      regcf:
        'f' followed by a number in [0; 2^n-1] plus 8
        eg:
          [0,1,1] -> 'f14'
          [0,1,0] -> 'f10'

      num:
        number in [-2^(n-1); 2^(n-1)-1]
        eg:
          [0,1,1,0,1,0,0,0,0,0,0,0] -> '22'
          [0,1,1,0,1] -> '-10'

      unum:
        number in [0; 2^(n)-1]
        eg:
          [0,1,1,0,1,0,0,0,0,0,0,0] -> '22'
          [0,1,1,0,1] -> '22'

      numx(k):
        number in [-2^(n-1); 2^(n-1)-1], multiplied by 2^k
        eg:
          numx(2) -> [0,1,1,0,1,0,0,0,0,0,0,0] -> '88'
          numx(3) -> [0,1,1,0,1] -> '-80'

      unumx(k):
        number in [0; 2^(n)-1], multiplied by 2^k
        eg:
          unumx(2) -> [0,1,1,0,1,0,0,0,0,0,0,0] -> '88'
          unumx(3) -> [0,1,1,0,1] -> '176'

      double:
        legacy alias of numx(1)

      fence:
        numeral interpretation works as unum
        textual:
          [0,0,0,0] -> '0'
          [1,0,0,0] -> 'w'
          [0,1,0,0] -> 'r'
          [1,1,0,0] -> 'rw'
          [0,0,1,0] -> 'o'
          [1,0,1,0] -> 'ow'
          [0,1,1,0] -> 'or'
          [1,1,1,0] -> 'orw'
          [0,0,0,1] -> 'i'
          [1,0,0,1] -> 'iw'
          [0,1,0,1] -> 'ir'
          [1,1,0,1] -> 'irw'
          [0,0,1,1] -> 'io'
          [1,0,1,1] -> 'iow'
          [0,1,1,1] -> 'ior'
          [1,1,1,1] -> 'iorw'

      rm:
        numeral interpretation works as unum
        textual:
          [0,0,0] -> 'rne'
          [1,0,0] -> 'rtz'
          [0,1,0] -> 'rdn'
          [1,1,0] -> 'rup'
          [0,0,1] -> 'rmm'
          [1,0,1] -> '-'
          [0,1,1] -> '-'
          [1,1,1] -> 'dyn'

      par(interpretation):
        another interpretaion wrapped in '(' and ')'

      more interpretations may be added later
    */
    switch (description) {
        case "unum": return new UnumInterpretation(0n);
        case "num": return new NumInterpretation(0n);
        case "double": return new NumInterpretation(1n);
        case "regx": return new RegInterpretation(RegType.INTEGER, 0n);
        case "regf": return new RegInterpretation(RegType.FLOATING, 0n);
        case "regv": return new RegInterpretation(RegType.VECTOR, 0n);
        case "regcx": return new RegInterpretation(RegType.INTEGER, 8n);
        case "regcf": return new RegInterpretation(RegType.FLOATING, 8n);
        case "regcv": return new RegInterpretation(RegType.VECTOR, 8n);
        case "fence": return new FenceInterpretation();
        case "rm": return new RmInterpretation();
    }
    if (description.startsWith("const(") && description.endsWith(")")) {
        let kStr: string = description.substring(6, description.length - 1);
        let k: number = +kStr;
        if (!isNaN(k)) {
            return new ConstInterpretation(BigInt(k));
        }
    }
    else if (description.startsWith("unumx(") && description.endsWith(")")) {
        let kStr: string = description.substring(6, description.length - 1);
        let k: number = +kStr;
        if (!isNaN(k)) {
            return new UnumInterpretation(BigInt(k)); // беззнаковое целое число от 0 до 2^n-1, умноженное на 2^k
        }
    }
    else if (description.startsWith("numx(") && description.endsWith(")")) {
        let kStr: string = description.substring(5, description.length - 1);
        let k: number = +kStr;
        if (!isNaN(k)) {
            return new NumInterpretation(BigInt(k)); // беззнаковое целое число от 0 до 2^n-1, умноженное на 2^k
        }
    }
    else if (description.startsWith("par(") && description.endsWith(")")) {
        let subStr: string = description.substring(4, description.length - 1);
        return new ParInterpretation(argumentInterpretationFactory(subStr));
    }
    return new InvalidInterpretation();
}
