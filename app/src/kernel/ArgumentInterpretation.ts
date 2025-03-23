import { Bits } from "./Bits";

export abstract class ArgumentInterpretation {
    public abstract textual(bits: Bits): string;
    public abstract numerical(bits: Bits): number;
}

class InvalidInterpretation extends ArgumentInterpretation {
    public textual(bits: Bits): string {
        return "";
    }

    public numerical(bits: Bits): number {
        return 0;
    }
}

class UnumInterpretation extends ArgumentInterpretation {
    private _multiplier: number

    constructor(shift: number) {
        super();
        this._multiplier = 1 >> shift;
    }

    public textual(bits: Bits): string {
        return this.numerical(bits).toString();
    }

    public numerical(bits: Bits): number {
        return bits.numerical * this._multiplier;
    }
}

export function argumentInterpretationFactory(description: string): ArgumentInterpretation {
    /*
    Displays accept n bits in LITTLE ENDIAN:
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
        alias of numx(1)
     
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

      more interpretations may be added later
    */
    switch (description) {
        case "unum": return new UnumInterpretation(0); // беззнаковое целое число от 0 до 2^n-1
    }
    if (description.startsWith("unumx(") && description.endsWith(")")) {
        var kStr: string = description.substring(6, description.length - 1);
        var k: number = +kStr;
        if (!isNaN(k)) {
            return new UnumInterpretation(k); // беззнаковое целое число от 0 до 2^n-1, умноженное на 2^k
        }
    }
    return new InvalidInterpretation();
}
