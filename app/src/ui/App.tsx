import "./App.css";
import { Bits } from "../kernel/Bits";
import performDisassemble, { DisassembleOutput } from "../kernel/Kernel";

import { InputOrder } from "../kernel/InputParser";
import { BitDepth } from "../kernel/InstructionDescription";
import { SimilarInstructions } from "../kernel/Disassembler";
import React, { ReactNode, useEffect, useState } from "react";
import { Argument } from "../kernel/Argument";
import { Span } from "../kernel/Span";

const Message = (props: { header: string; text: string; error?: boolean }) => {
  return (
    <>
      <div className={"header " + (props.error ? "error" : "")}>
        {props.header}
      </div>
      <div className={"message " + (props.error ? "error" : "")}>
        {props.text}
      </div>
    </>
  );
};

type Display = "hex" | "bin";
type Jump = "relative" | "absolute";

const convertBits = (
  bits: Bits,
  display: Display,
  order: InputOrder,
  span?: Span
): ReactNode[] => {
  const text = bits.bigEndian;
  let spaced: ReactNode[][];
  let spanSet = span
    ? new Set(span.map((i) => text.length - 1 - i))
    : new Set();
  if (display === "bin") {
    spaced = Array.from(text.matchAll(/.{8}/g)).map((res, i) =>
      Array.from(res[0]).map((e, j) => (
        <span
          key={i * 8 + j}
          className={spanSet.has(i * 8 + j) ? "selected" : ""}
        >
          {e}
        </span>
      ))
    );
  } else {
    const num = BigInt("0b" + text);
    const hex = num.toString(16);
    const paddedHex = hex.padStart(text.length / 4, "0");
    spaced = Array.from(paddedHex.matchAll(/.{2}/g)).map((res, j) =>
      Array.from(res[0]).map((e, i) => <span key={i * 8 + j}>{e}</span>)
    );
  }
  if (order === InputOrder.BYTE_ORDER_LE) {
    spaced.reverse();
  }
  return spaced.flatMap((e) => e.concat([" "])).slice(0, -1);
};

const argumentType = (arg: Argument) => {
  if (arg.textual === arg.numerical.toString()) {
    return "const";
  }
  return "entity";
};

const convertJump = (offset: number, jumpOffset: number, jumpStyle: Jump) =>
  jumpStyle === "relative" ? jumpOffset : offset + jumpOffset;

const packJumps = (jumps: [number, number][]): [number, number, number][] => {
  const sortedJumps = jumps.sort((j1, j2) => {
    const d1 = Math.abs(j1[0] - j1[1]);
    const d2 = Math.abs(j2[0] - j2[1]);
    if (d1 < d2) {
      return -1;
    }
    if (d2 < d1) {
      return 1;
    }
    return j1[0] - j2[0];
  });
  const result: [number, number, number][] = new Array(jumps.length);
  const levels: number[] = [0];
  for (const [i, [from, to]] of sortedJumps.entries()) {
    const dist = Math.abs(from - to);
    let currentLevel = 0;
    for (const [i, level] of levels.entries()) {
      if (level <= 0) {
        levels[i] = dist;
        currentLevel = i + 1;
        break;
      }
    }
    if (currentLevel === 0) {
      levels.push(dist);
      currentLevel = levels.length;
    }
    result[i] = [from, to, currentLevel];
    levels.forEach((_, i) => {
      levels[i]--;
    });
  }
  return result;
};

const Arrows = (props: { instructions: SimilarInstructions[] }) => {
  const fontSize = parseInt(window.getComputedStyle(document.body)["fontSize"]);
  const lineHeight = fontSize * 1.3;
  const height = lineHeight * props.instructions.length;
  const width = 100;

  const jumps = props.instructions.flatMap((e, i) => {
    if (e.instructions.length < 1) {
      return [];
    }
    const jump = e.instructions[0].actualJump;
    if (jump.label === "concrete") {
      return [[i, i + jump.distance] as [number, number]];
    }
    // TODO: Support between
    return [];
  });
  const packedJumps = packJumps(jumps);
  packedJumps.reverse();

  return (
    <svg
      className="arrows"
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <defs>
        <marker
          id="head"
          orient="auto"
          markerUnits="userSpaceOnUse"
          markerWidth="9"
          markerHeight="16"
          refX="8"
          refY="8"
        >
          <polyline
            strokeWidth="2"
            points="1,1 8,8 1,15"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></polyline>
        </marker>
      </defs>
      {packedJumps.map((jump) => {
        let x1 = width - 1;
        let x2 = x1 - fontSize * jump[2];
        let y1 = jump[0] * lineHeight + lineHeight / 2;
        let y2 = jump[1] * lineHeight + lineHeight / 2;
        return (
          <React.Fragment key={jump[0]}>
            <polyline
              fill="none"
              strokeWidth={8}
              stroke="var(--color-bg)"
              points={`${x1},${y1} ${x2},${y1} ${x2},${y2} ${x1},${y2}`}
            />
            <polyline
              fill="none"
              strokeWidth={2}
              stroke="currentColor"
              markerEnd="url(#head)"
              points={`${x1},${y1} ${x2},${y1} ${x2},${y2} ${x1},${y2}`}
            />
          </React.Fragment>
        );
      })}
    </svg>
  );
};

const Code = (props: {
  instructions: SimilarInstructions[];
  display: Display;
  order: InputOrder;
  jump: Jump;
}) => {
  const [current, setCurrent] = useState<{
    span: Span;
    i: number;
    j: number;
  } | null>(null);

  const isCurrent = (i: number, j: number) =>
    current && current.i === i && current.j === j ? "selected" : "";
  const isGlobalSpanning = () =>
    props.display === "bin" && current ? "spanning" : "";
  const isSelected = (i: number) =>
    props.display === "bin" && current && current.i === i ? "selected" : "";
  const currentSpan = (i: number) =>
    current && current.i === i ? current.span : undefined;
  const setCurrentCallback =
    (i: number, j: number, { span }: Argument) =>
    () =>
      setCurrent({
        i,
        j,
        span,
      });
  const resetCurrent = () => setCurrent(null);
  return (
    <div
      className={`code ${isGlobalSpanning()}`}
      style={{ gridTemplateRows: `repeat(${props.instructions.length}, auto)` }}
    >
      <Arrows instructions={props.instructions} />
      <div className="offsets">
        {props.instructions.map((inst) => (
          <span key={inst.chunk.address}>
            0x{inst.chunk.address.toString(16).padStart(4, "0")}
          </span>
        ))}
      </div>
      <div className="encoded">
        {props.instructions.map((inst, i) => (
          <span
            key={inst.chunk.address}
            className={`${isGlobalSpanning()} ${isSelected(i)}`}
          >
            {convertBits(
              inst.chunk.bits,
              props.display,
              props.order,
              currentSpan(i)
            )}
          </span>
        ))}
      </div>
      <div className="decoded">
        {props.instructions.flatMap((inst, i) => {
          const someInst = inst.instructions.at(0);
          if (!someInst) {
            return (
              <React.Fragment key={i}>
                <div className="error">???</div>
                <div></div>
              </React.Fragment>
            );
          }
          const jumpIdx =
            someInst.jump.label === "within" ? someInst.jump.argIndex : -1;

          return (
            <React.Fragment key={i}>
              <div className={`mnemonic ${isGlobalSpanning()}`}>
                {someInst.mnemonic ?? "???"}
              </div>
              <div className={isGlobalSpanning()}>
                {someInst.args
                  .flatMap((arg, j) => [
                    <span
                      key={j * 2}
                      className={`${
                        j === jumpIdx ? "jump" : argumentType(arg)
                      } ${isCurrent(i, j)}`}
                      onMouseEnter={setCurrentCallback(i, j, arg)}
                      onMouseLeave={resetCurrent}
                    >
                      {j === jumpIdx
                        ? convertJump(
                            inst.chunk.address,
                            arg.numerical,
                            props.jump
                          )
                        : arg.textual}
                    </span>,
                    <span
                      key={j * 2 + 1}
                      className={isCurrent(i, j)}
                      onMouseEnter={setCurrentCallback(i, j, arg)}
                      onMouseLeave={resetCurrent}
                    >
                      {", "}
                    </span>,
                  ])
                  .slice(0, -1)}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const Switch = <T,>(props: {
  cases: { text: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
}) => {
  return (
    <div className="switch">
      {props.cases.map((_case, i) => (
        <span
          key={i}
          className={props.value === _case.value ? "selected" : ""}
          onClick={() => {
            props.onChange(_case.value);
          }}
        >
          {_case.text}
        </span>
      ))}
    </div>
  );
};

const App = () => {
  const [sourceCode, setSourceCode] = useState("");
  const [byteOrder, setByteOrder] = useState(InputOrder.BYTE_ORDER_BE);
  const [bytesSkip, setBytesSkip] = useState(0);
  const [bitDepth, setBitDepth] = useState(BitDepth.BIT_32);
  const [display, setDisplay] = useState<Display>("hex");
  const [jump, setJump] = useState<Jump>("relative");
  const [disassemblerResult, setDisassemblerResult] =
    useState<DisassembleOutput>({
      valid: "valid",
      result: [],
    });

  useEffect(() => {
    const result = performDisassemble(
      sourceCode,
      {
        order: byteOrder,
        bytesSkip: bytesSkip,
      },
      {
        bitDepth: bitDepth,
      }
    );
    setDisassemblerResult(result);
    console.log(result);
  }, [sourceCode, byteOrder, bytesSkip, bitDepth]);

  useEffect(() => {
    const handler = (e: ClipboardEvent) => {
      if (e.clipboardData) {
        setSourceCode(e.clipboardData.getData("text"));
      }
    };

    document.addEventListener("paste", handler);

    return () => {
      document.removeEventListener("paste", handler);
    };
  }, []);

  return (
    <div className="app">
      <div className="tools">
        <div className="tool">
          <Switch
            cases={[
              { text: "RV32", value: BitDepth.BIT_32 },
              { text: "RV64", value: BitDepth.BIT_64 },
            ]}
            value={bitDepth}
            onChange={setBitDepth}
          />
        </div>
        <div className="tool">
          <span>SKIP BYTES</span>
          <input
            type="number"
            value={bytesSkip}
            onChange={(e) => {
              if (e.currentTarget.value.trim().length === 0) {
                setBytesSkip(0);
                return;
              }
              const value = e.currentTarget.valueAsNumber;
              if (isFinite(value) && value >= 0) {
                setBytesSkip(value | 0);
              }
            }}
          />
        </div>
        <div className="tool">
          <span>BYTE ORDER</span>
          <Switch
            cases={[
              {
                text: "BE",
                value: InputOrder.BYTE_ORDER_BE,
              },
              {
                text: "LE",
                value: InputOrder.BYTE_ORDER_LE,
              },
            ]}
            value={byteOrder}
            onChange={setByteOrder}
          />
        </div>
        <div className="tool">
          <span>DISPLAY</span>
          <Switch
            cases={[
              {
                text: "0xFF",
                value: "hex" as const,
              },
              {
                text: "0b01",
                value: "bin" as const,
              },
            ]}
            value={display}
            onChange={setDisplay}
          />
        </div>
        <div className="tool">
          <span>JUMP STYLE</span>
          <Switch
            cases={[
              {
                text: "REL",
                value: "relative" as const,
              },
              {
                text: "ABS",
                value: "absolute" as const,
              },
            ]}
            value={jump}
            onChange={setJump}
          />
        </div>
      </div>
      {sourceCode.length === 0 ? (
        <Message header="PASTE CODE" text="CTRL + V" />
      ) : disassemblerResult.valid === "invalid" ? (
        <Message
          header="FAILED TO DECODE"
          text={disassemblerResult.message}
          error
        />
      ) : (
        <Code
          instructions={disassemblerResult.result}
          display={display}
          order={byteOrder}
          jump={jump}
        />
      )}
    </div>
  );
};

export default App;
