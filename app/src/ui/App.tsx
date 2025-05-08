import "./App.css";
import { Bits } from "../kernel/Bits";
import performDisassemble, { DisassembleOutput } from "../kernel/Kernel";

import { InputOrder } from "../kernel/InputParser";
import { BitDepth } from "../kernel/InstructionDescription";
import { SimilarInstructions } from "../kernel/Disassembler";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
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
  if (order === InputOrder.BYTE_ORDER_BE) {
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

const hexWithSign = (n: number) => {
  const num = Math.abs(n).toString(16);
  const sign = n >= 0 ? "" : "-";
  const bytes = Math.ceil(num.length / 2) * 2;
  return sign + `0x${num.padStart(bytes, "0")}`;
};
const convertJump = (offset: number, jumpOffset: number, jumpStyle: Jump) =>
  hexWithSign(jumpStyle === "relative" ? jumpOffset : offset + jumpOffset);

type LocalJump = {
  from: number;
  to: number;
  broken: boolean;
};
type LevelledJump = LocalJump & {
  level: number;
};
const packJumps = (jumps: LocalJump[]): LevelledJump[] => {
  const sortedJumps = jumps.sort((j1, j2) => {
    const d1 = Math.abs(j1.from - j1.to);
    const d2 = Math.abs(j2.from - j2.to);
    if (d1 < d2) {
      return -1;
    }
    if (d2 < d1) {
      return 1;
    }
    return j1.from - j2.from;
  });
  const result: LevelledJump[] = new Array(jumps.length);
  const length = jumps.reduce((a, b) => Math.max(a, b.from, b.to), 0);
  const levels: boolean[][] = new Array(length)
    .fill(null)
    .map((_) => new Array(jumps.length).fill(false));
  for (const [i, { from, to, broken }] of sortedJumps.entries()) {
    let currentLevel = 0;
    const _from = Math.min(from, to);
    const _to = Math.max(from, to);
    const usedLevels = levels
      .slice(_from, _to + 1)
      .reduce((a, b) => a.map((e, i) => e || b[i]));
    for (const [i, level] of usedLevels.entries()) {
      if (!level) {
        levels.slice(_from, _to + 1).forEach((a) => {
          a[i] = true;
        });
        currentLevel = i + 1;
        break;
      }
    }
    result[i] = { from, to, broken, level: currentLevel };
  }
  return result;
};

const Arrows = (props: {
  instructions: SimilarInstructions[];
  current?: number;
  skip: { from: number; length: number };
}) => {
  const fontSize = parseInt(window.getComputedStyle(document.body)["fontSize"]);
  const lineHeight = fontSize * 1.3;
  const height = lineHeight * props.instructions.length;

  const packedJumps = useMemo(() => {
    const jumps = props.instructions.flatMap((e, i) => {
      if (e.instructions.length < 1) {
        return [];
      }
      const jump = e.instructions[0].actualJump;
      if (jump.label === "concrete") {
        return [{ from: i, to: i + jump.distance, broken: false }];
      }
      if (jump.label === "between") {
        return [{ from: i, to: i + jump.distance, broken: true }];
      }
      return [];
    });
    const packedJumps = packJumps(jumps);
    packedJumps.reverse();

    const skippedPackedJumps = packedJumps.map(({ from, to, ...rest }) => ({
      from: from > props.skip.from ? from + props.skip.length : from,
      to: to > props.skip.from ? to + props.skip.length : to,
      ...rest,
    }));

    return skippedPackedJumps;
  }, [props.instructions, props.skip]);

  const width = (packedJumps.reduce((a, b) => Math.max(a, b.level), 0) + 1) * fontSize;

  const renderJump = (jump: LevelledJump) => {
    let x1 = width - 1;
    let x2 = x1 - fontSize * jump.level;
    let y1 = jump.from * lineHeight + lineHeight / 2;
    let y2 = jump.to * lineHeight + lineHeight / 2;
    return (
      <React.Fragment key={jump.from}>
        <polyline
          fill="none"
          strokeWidth={8}
          stroke="var(--color-bg)"
          points={`${x1},${y1} ${x2},${y1} ${x2},${y2} ${x1},${y2}`}
        />
        <polyline
          fill="none"
          strokeWidth={2}
          stroke={
            props.current && props.current !== jump.from
              ? "var(--color-comment)"
              : jump.broken
              ? "var(--color-dots)"
              : "currentColor"
          }
          markerEnd={`url(${
            props.current && props.current !== jump.from
              ? "#head-grey"
              : jump.broken
              ? "#head-red"
              : "#head-green"
          })`}
          points={`${x1},${y1} ${x2},${y1} ${x2},${y2} ${x1},${y2}`}
        />
      </React.Fragment>
    );
  };

  return (
    <svg
      className="arrows"
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <defs>
        <marker
          id="head-green"
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
            stroke={"currentColor"}
            strokeLinejoin="round"
            strokeLinecap="round"
          ></polyline>
        </marker>
        <marker
          id="head-red"
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
            stroke={"var(--color-dots)"}
            strokeLinejoin="round"
            strokeLinecap="round"
          ></polyline>
        </marker>
        <marker
          id="head-grey"
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
            stroke={"var(--color-comment)"}
            strokeLinejoin="round"
            strokeLinecap="round"
          ></polyline>
        </marker>
      </defs>
      {packedJumps
        .filter((jump) => jump.from !== props.current)
        .map(renderJump)}
      {packedJumps
        .filter((jump) => jump.from === props.current)
        .map(renderJump)}
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
  const [instructionVariantShowed, setInstructionVariantShowed] = useState(-1);
  const [overrides, setOverrides] = useState<Map<number, number>>(new Map());

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
  const openInstructionVariants = (i: number) => () =>
    setInstructionVariantShowed(i);
  const closeInstructionVariants = () => setInstructionVariantShowed(-1);
  const setAndCloseInstructionVariant = (i: number, j: number) => () => {
    setInstructionVariantShowed(-1);
    setOverrides(new Map(overrides).set(i, j));
  };
  const skip =
    instructionVariantShowed > 0
      ? {
          from: instructionVariantShowed,
          length:
            (props.instructions.at(instructionVariantShowed)?.instructions
              .length ?? 1) - 1,
        }
      : { from: 0, length: 0 };

  useEffect(() => {
    setInstructionVariantShowed(-1);
    setOverrides(new Map());
  }, [props.instructions]);

  return (
    <div
      className={`code ${isGlobalSpanning()}`}
      style={{ gridTemplateRows: `repeat(${props.instructions.length}, auto)` }}
    >
      <Arrows
        instructions={props.instructions}
        current={current?.i}
        skip={skip}
      />
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
          const someInst = inst.instructions.at(overrides.get(i) ?? 0);
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

          let variants = null;
          if (instructionVariantShowed === i) {
            variants = (
              <div className="variants">
                {inst.instructions.map((someInst, j) => {
                  if (j === (overrides.get(i) ?? 0)) {
                    return null;
                  }
                  const jumpIdx =
                    someInst.jump.label === "within"
                      ? someInst.jump.argIndex
                      : -1;
                  return (
                    <React.Fragment key={j}>
                      <div
                        className="mnemonic"
                        onClick={setAndCloseInstructionVariant(i, j)}
                      >
                        {someInst.mnemonic}
                      </div>
                      <div className={isGlobalSpanning()}>
                        {someInst.args
                          .flatMap((arg, j) => [
                            <span
                              key={j * 2}
                              className={
                                j === jumpIdx ? "jump" : argumentType(arg)
                              }
                            >
                              {j === jumpIdx
                                ? convertJump(
                                    inst.chunk.address,
                                    arg.numerical,
                                    props.jump
                                  )
                                : arg.textual}
                            </span>,
                            <span key={j * 2 + 1}>{", "}</span>,
                          ])
                          .slice(0, -1)}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            );
          }

          return (
            <div key={i} className="instruction">
              <div className={`mnemonic ${isGlobalSpanning()}`}>
                {someInst.mnemonic ?? "???"}
                {inst.instructions.length > 1 ? (
                  <span
                    className="ellipsis"
                    onClick={
                      instructionVariantShowed === i
                        ? closeInstructionVariants
                        : openInstructionVariants(i)
                    }
                  ></span>
                ) : null}
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
              {variants}
            </div>
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
