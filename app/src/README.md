# SRC

В настоящее время Проект переписывается на
болле сопровождаемую кодовую базу.

Актуальные каталоки и файлы:
- [`kernel`](./kernel/)
  - Ядро дизассемлера
  - [`Argument.ts`](./kernel/Argument.ts)
    - Уже готовый аргумент инструкции на выходе из дизассемблера
  - [`ArgumentInterpretation.ts`](./kernel/ArgumentInterpretation.ts)
    - Описание того, как интерпретировать аргумент,
      переданный в виде битов
  - [`ArgumentPattern.ts`](./kernel/ArgumentPattern.ts)
    - Описание того, как из инструкции выделить аргумент,
      и как его интерпретировать
  - [`Bits.ts`](./kernel/Bits.ts)
    - Последовательность бит в LITTLE-ENDIAN
  - [`Descriptions.ts`](./kernel/Descriptions.ts)
    - Список описаний инструкций
    - Этот файл должен генерироваться из YAML-описаний
      во время развёртывания 
  - [`Disassembler.ts`](./kernel/Disassembler.ts)
    - Дизассемблер
  - [`InputParser.ts`](./kernel/InputParser.ts)
    - Преобразует пользовательский ввод в последовательность бит
  - [`Instruction.ts`](./kernel/Instruction.ts)
    - Результат дизассемблирования одной инструкции
  - [`InstructionDescription.ts`](./kernel/InstructionDescription.ts)
    - Описание инструкции
  - [`Matcher.ts`](./kernel/Matcher.ts)
    - Сопоставитель для определения полей и ограничителей
  - [`Span.ts`](./kernel/Span.ts)
    - Описывает выборку и перестановку битов, тобы преобразовать
      одну последовательность бит в другую
  - [`Splitter.ts`](./kernel/Splitter.ts)
    - разделяет сплошную последовательность бит на чанки,
      каждый из которых соответствует одной инструкции
- [`ui`](./ui/)
  - Пользовательский интерфейс
  - [`App.tsx`](./ui/App.tsx)
    - Вся страница
  - [`AssemblyTable.tsx`](./ui/AssemblyTable.tsx)
    - Интерактивная таблица с результатом дизассемблирования
  - [`InputField.tsx`](./ui/InputField.tsx)
    - Поле ввода дампа памяти
  - [`InstructionBox.tsx`](./ui/InstructionBox.tsx)
    - Элеиент, отображающий одну инструкцию
  - [`InstructionRow.tsx`](./ui/InstructionRow.tsx)
    - Строка таблицы
  - [`SettingsBox.tsx`](./ui/SettingsBox.tsx)
    - Панель настроек

Когда будут готовы модули будем собирать и удалять старый код.
