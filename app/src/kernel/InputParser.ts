export enum InputOrder {
    /*
    Означает, что в одна последовательность
    16-ричных цифр записывает байты в LITTLE_ENDIAN:
    "0a1b2c3d 4e5f" -> [0x3d, 0x2c, 0x1b, 0x0a, 0x5f, 0x4e]
    */
    BYTE_ORDER_LE = 0, // default
    /*
    Означает, что в одна последовательность
    16-ричных цифр записывает байты в :BIG_ENDIAN
    "0a1b2c3d 4e5f" -> [0x0a, 0x1b, 0x2c, 0x3d, 0x4e, 0x5f] -> "01010000110110000..."
    */
    BYTE_ORDER_BE = 1,
}

export type InputSettings = {
    order: InputOrder,

    /*
    Количество пропускаемых байт в начале инпута.
    Изначально планировалось скипать по одному парселю (2 байта),
    но потом было решено, что нужно скипать байты.
    */
    bytesSkip: number,
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


export function inputParser(input: string, settings: InputSettings): Input {
    function hex2bin(hex: string, size: number): string {
        return (parseInt(hex, 16).toString(2)).padStart(size, '0');
    }

    function isAddress(s: string) {
        return s.match(/(0x)?([a-f0-9 ]+):\s*$/);
    }

    function parseAddress(s: string) {
        return parseInt(s.trim().match(/^(0x)?([a-f0-9 ]+):/i)!![2], 16);
    }

    function isHexString(s: string) {
        return !!s.match(/^[a-f0-9 ]*$/i);
    }

    const result: ValidInput = {
        valid: "valid",
        startAddress: settings.bytesSkip,
        bytesConcat: "",
    }
    let notSkippedBytesCount = settings.bytesSkip;
    let currentOffset = 0;
    let addressLabelWasRead = false;

    try {
        const resultBuilder: string[] = [];
        const chunks = input.split(/((?:0x)?[0-9a-f]+: *)/gm);
        for (let curChunk of chunks) {
            if (curChunk.trim() === "") {
                continue
            }
            if (isAddress(curChunk)) {
                const address = parseAddress(curChunk);
                if (address === undefined) {
                    return {
                        valid: "invalid",
                        message: "Invalid address format: " + curChunk.trim(),
                    }
                }
                if (addressLabelWasRead) {
                    if (result.startAddress - settings.bytesSkip + currentOffset !== address) {
                        return {
                            valid: "invalid",
                            message: `Label: 0x${address.toString(16)}, but expected 0x${result.startAddress - settings.bytesSkip + currentOffset.toString(16)}`,
                        }
                    }
                } else {
                    result.startAddress = address + settings.bytesSkip - currentOffset;
                }
                addressLabelWasRead = true;
            } else {
                for (let hex of curChunk.split(/\s/g)) {
                    if (!isHexString(hex)){
                        return {
                            valid: "invalid",
                            message: "invalid hex value: " + hex,
                        }
                    }
                    if (hex.length % 2) {
                        return {
                            valid: "invalid",
                            message: "invalid hex fragment length: " + hex,
                        }
                    }
                    switch (settings.order) {
                        case InputOrder.BYTE_ORDER_BE: {
                            for (let j = 0; j < hex.length; j += 2) {
                                if (notSkippedBytesCount) {
                                    notSkippedBytesCount--;
                                    continue
                                }
                                const [a, b] = hex.slice(j, j + 2)
                                resultBuilder.push(Array.from(hex2bin(b, 4)).reverse().join(""))
                                resultBuilder.push(Array.from(hex2bin(a, 4)).reverse().join(""))
                            }
                            currentOffset += hex.length / 2;
                            break;
                        }
                        case InputOrder.BYTE_ORDER_LE: {
                            for (let i = hex.length - 1; i >= 0; i -= 2) {
                                if (notSkippedBytesCount) {
                                    notSkippedBytesCount--;
                                    continue
                                }
                                const [a, b] = hex.slice(i - 1, i + 1);
                                resultBuilder.push(Array.from(hex2bin(b, 4)).reverse().join(""));
                                resultBuilder.push(Array.from(hex2bin(a, 4)).reverse().join(""));
                            }
                            currentOffset += hex.length / 2;
                            break;
                        }
                        default: {
                            return {
                                valid: "invalid",
                                message: "invalid bytes order"
                            }
                        }
                    }
                }
            }
        }
        result.bytesConcat = resultBuilder.join("");
        return result;
    } catch (error) {
        return {
            valid: "invalid",
            message: (error as object).toString()
        }
    }
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
