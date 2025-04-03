import { ValidInput } from "./InputParser";
import { Bits } from "./Bits";

export type Chunk = {
    bits: Bits,
    address: number, // адрес первого байта чанка
};

export function splitter(input: ValidInput): Chunk[] {
    const { startAddress, bytesConcat } = input;
    const chunks: Chunk[] = [];
    
    // Определяем общее число байт в bytesConcat:
    const totalBytes = bytesConcat.length / 8;
    
    // offset отсчитываем в байтах
    let offset = 0;
    while (offset < totalBytes) {
      // Извлекаем текущий первый байт инструкции.
      const byteStartIndex = offset * 8;
      const firstByte = bytesConcat.substring(byteStartIndex, byteStartIndex + 16);
      
      // Определяем количество байт для инструкции
      // (если первые два символа равны "11", то инструкция 4-байтная)
      var instrBytes = 0 
      if (firstByte.substring(0, 2) !== "11") {
        instrBytes = 2
      } else if (firstByte.substring(2, 5) !== "111") {
        instrBytes = 4
      } else if (firstByte.substring(0, 6) === "111110") {
        instrBytes = 6
      } else if (firstByte.substring(0, 7) === "1111110") {
        instrBytes = 8
      } else {
        let nnn = firstByte.substring(12, 15)
        let n = Number(nnn[0]) + Number(nnn[1]) * 2 + Number(nnn[2]) * 4
        instrBytes = (80 + 16 * n)
      }
      
      // Если недостаточно байт для завершения инструкции, можно завершить цикл,
      // выбросить ошибку или обработать по-другому.
      if (offset + instrBytes > totalBytes) {
        break;
      }
      
      // Извлекаем инструкцию как конкатенацию instrBytes байт (каждый байт – 8 символов)
      const instructionBits = bytesConcat.substring(offset * 8, (offset + instrBytes) * 8);
      
      // Сохраняем чанк с рассчитанным адресом.
      chunks.push({
        bits: new Bits(instructionBits),
        address: startAddress + offset,
      });
      
      // Переходим к следующему байтовому адресу после текущей инструкции.
      offset += instrBytes;
    }
    
    return chunks;
}
