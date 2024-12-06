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
