export type Span = number[];

export function parseSpan(span: string): Span {
    return [];
    // TODO
    /*
    Преобразует строковое представление спана в последовательность индексов.
    Грамматика:
      Span                       //
        : SpanElement            // тот же список
        | SpanElement ',' Span   // конкатенация списков
        ;                        //
      SpanElement                //
        : NUMBER                 // список из одного числа
        | NUMBER '-' NUMBER      // список из чисел от одного до другого
        ;                        //
      NUMBER := [0-9]+;          // целое число
    
    Примеры:
      "0" -> [0]
      "5" -> [5]
      "1,4,0,2" -> [1, 4, 0, 2]
      "0-6" -> [0, 1, 2, 3, 4, 5, 6]
      "0-7,12-14,8-11,15" -> [0, 1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 8, 9, 10, 11, 15]
    */
}
