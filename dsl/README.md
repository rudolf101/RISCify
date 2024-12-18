# Displays

Here are listed all possible values for `display` property in the DSL
when describing arguments.
Displays accept n bits in little endian.

Displays:
- `regx`:
  - `'x'` followed by a number in `[0; 2^n-1]`
  - eg:
    - `[0,1,1,0,0] -> 'x6'`
    - `[0,1,1,0,1] -> 'x22'`
- `regf`:
  - `'f'` followed by a number in `[0; 2^n-1]`
  - eg:
    - `[0,1,1,0,0] -> 'f6'`
    - `[0,1,1,0,1] -> 'f22'`
- `num`:
  - number in `[-2^(n-1); 2^(n-1)-1]`
  - eg:
    - [0,1,1,0,1,0,0,0,0,0,0,0] -> '22'
    - [0,1,1,0,1] -> '-10'
- `unum`:
  - number in `[0; 2^(n)-1]`
  - eg:
    - `[0,1,1,0,1,0,0,0,0,0,0,0] -> '22'`
    - `[0,1,1,0,1] -> '22'`
- `pnum`:
  - number in `[-2^(n-1); 2^(n-1)-1]` then the next argument in parentheses
  - eg:
    - `[0,1,1,0,1,0,0,0,0,0,0,0] -> '22(...)'`, where `...` is substituted with the next argument
    - `[0,1,1,0,1] -> '-10(...)'`, where `...` is substututed with the next argument
  - comment:
    - must have for commands lb, lh, lw, sb, sh, sw.
    - this way two arguments are output as one
- `par(X)`:
  - do the same as `display: "X"` but then wrap in parentheses
  - eg:
    - `par(num)`:
      - `[0,1,1,0,1,0,0,0,0,0,0,0] -> '(22)'`
      - `[0,1,1,0,1] -> '(-10)'`
    - `par(regx)`
      - `[0,1,1,0,0] -> '(x6)'`
      - `[0,1,1,0,1] -> '(x22)'`
    - `par(pnum)`
      - `[0,1,1,0,1] -> '(-10(...))'`, where `...` is substututed with the next argument
- `double`:
  - *even* number in `[-2^n; 2^n-1]`, i.e. `num * 2`
  - eg:
    - `[0,1,1,0,1,0,0,0,0,0,0,0] -> '44'`
    - `[0,1,1,0,1] -> '-20'`
- `fence`:
    - accepts only 4 bits
    - `[0,0,0,0] -> '0'`
      - invalid, but let it be
    - `[1,0,0,0] -> 'w'`
    - `[0,1,0,0] -> 'r'`
    - `[1,1,0,0] -> 'rw'`
    - `[0,0,1,0] -> 'o'`
    - `[1,0,1,0] -> 'ow'`
    - `[0,1,1,0] -> 'or'`
    - `[1,1,1,0] -> 'orw'`
    - `[0,0,0,1] -> 'i'`
    - `[1,0,0,1] -> 'iw'`
    - `[0,1,0,1] -> 'ir'`
    - `[1,1,0,1] -> 'irw'`
    - `[0,0,1,1] -> 'io'`
    - `[1,0,1,1] -> 'iow'`
    - `[0,1,1,1] -> 'ior'`
    - `[1,1,1,1] -> 'iorw'`

# Examples

Here bits are ordered from least to greatest.
```
add:
  description in DSL:
    rv32i_rd:            { name: "rd"    , span: "7:11" , display: "regx"  }
    rv32i_rs1:           { name: "rs1"   , span: "15:19", display: "regx"  }
    rv32i_rs2:           { name: "rs2"   , span: "20:24", display: "regx"  }
    rv32i_opcode_regreg: { name: "opcode", span: "0:6"  , value: "1100110" }
    rv32i_funct3_add:    { name: "funct3", span: "12:14", value: "000"     }
    rv32i_funct7_normal: { name: "funct7", span: "25:31", value: "0000000" }
    fields: [ rv32i_opcode_regreg, rv32i_funct3_add, rv32i_funct7_normal ]
    args: [ rv32i_rd, rv32i_rs1, rv32i_rs2 ]
  11001101000000001000110000000000:
    1100110 | 10000 | 000    | 01000 | 11000 | 0000000
    opcode  | rd    | funct3 | rs1   | rs2   | funct7
    REG-REG | x1    | ADD    | x2    | x3    | NORMAL
    add x1, x2, x3
  11001101000000001000110000000000:
    1100110 | 00100 | 000    | 00011 | 10001 | 0000000
    opcode  | rd    | funct3 | rs1   | rs2   | funct7
    REG-REG | x4    | ADD    | x24   | x17   | NORMAL
    add x4, x24, x17

beq:
  description in DSL:
    rv32i_rs1:           { name: "rs1"   , span: "15:19"          , display: "regx"   }
    rv32i_rs2:           { name: "rs2"   , span: "20:24"          , display: "regx"   }
    rv32i_b_imm:         { name: "imm"   , span: "8:11,25:30,7,31", display: "double" }
    rv32i_opcode_branch: { name: "opcode", span: "0:6"            , value: "1100011"  }
    rv32i_funct3_beq:    { name: "funct3", span: "12:14"          , value: "000"      }
    fields: [ rv32i_opcode_branch, rv32i_funct3_beq ]
    args: [ rv32i_rs1, rv32i_rs2, rv32i_b_imm ]
  11000110101000000100110111010101:
    1100011 | 01010 | 000    | 00100 | 11011 | 1010101
    opcode  | IMM   | funct3 | rs1   | rs2   | IMM
    BRANCH  |       | BEQ    | x4    | x27   |
    IMM:
      7:11  = 01010
      25:31 = 1010101
      =>
      8:11  = 1010
      25:30 = 101010
      7     = 0
      31    = 1
      IMM
        = 2 * from_signed_le(101010101001)
        = 2 * ((2^0 + 2^2 + 2^4 + 2^6 + 2^8 + 2^11) - 2^12)
        = 2 * ((1 + 4 + 16 + 64 + 256 + 2048) - 4096)
        = 2 * (2389 - 4096)
        = 2 * (-1707)
        = -3414
    beq x4, x27, -3414
```