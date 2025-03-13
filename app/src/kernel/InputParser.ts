export enum InputOrder {
    /*
    Означает, что в одна последовательность
    16-ричных цифр записывает байты в BIG_ENDIAN:
    "0a1b2c3d 4e5f" -> [0x3d, 0x2c, 0x1b, 0x0a, 0x5f, 0x4e]
    */
    BYTE_ORDER_BE = 0,
    /*
    Означает, что в одна последовательность
    16-ричных цифр записывает байты в LITTLE_ENDIAN:
    "0a1b2c3d 4e5f" -> [0x0a, 0x1b, 0x2c, 0x3d, 0x4e, 0x5f]
    */
    BYTE_ORDER_LE = 1,
}

export type InputSettings = {
    order: InputOrder,
    
    /*
    Команды в RISC-V могут иметь разную длину,
    но она всегда кратна одному парселю (2 байта, 16 бит).
    Иногда в начале дампа может быть кусок прошлой команды.
    Его надо скипнуть.
    В этом поле указывается неотрицательное количество парселей,
    которые нужно скипнуть.
    */
    parcelSkip: number,
}

export type ValidInput = {
    valid: "valid",
    // адрес первого байта инпута, по умолчанию 0
    startAddress: number,
    // байты в виде little-endian строк c длиной 8, сконкатенированные
    bytesConcat: string,
}

export type InvalidInput = {
    valid: "invalid",
    message: string,
};

export type Input = ValidInput | InvalidInput;

export function inputParser(input: string, settigns: InputSettings): Input {
    return {
        valid: "invalid",
        message: "Not implemented yet"
    }
    // TODO:
    /*
    Преобразует пользовательский инпут в соответствии с настройками.
    Заметки:
    - в дампе могут встречаться адреса, которые представляют из себя
      16-ричное число, за которым следует двоеточие
    - 16-ричные числа могут начинаться с "0x"
    - если имеется пропуск парселей, то это должно отразиться на
      адресе первого байта
    */
}
