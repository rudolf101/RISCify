import React, { useState, useEffect, ReactNode } from "react";
import { Argument } from "../kernel/Argument";
import { SimilarInstructions } from "../kernel/Disassembler";
import { InputOrder } from "../kernel/InputParser";
import { Span } from "../kernel/Span";
import { Arrows } from "./Arrows";
import { Bits } from "../kernel/Bits";

import "./Code.css";

export enum Display {
  HEX = "hex",
  BIN = "bin",
}

export enum Jump {
  RELATIVE = "relative",
  ABSOLUTE = "absolute",
}

const argumentType = (arg: Argument) => {
  if (arg.textual === arg.numerical.toString()) {
    return "const";
  }
  return "entity";
};

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

const convertJump = (
  offset: number,
  jumpOffset: bigint,
  jumpStyle: Jump
) =>
  hexWithSign(
    jumpStyle === "relative" ? jumpOffset : BigInt(offset) + jumpOffset
  );

const hexWithSign = (n: bigint) => {
  const num = (n < 0n ? -n : n).toString(16);
  const sign = n >= 0n ? "" : "-";
  const bytes = Math.ceil(num.length / 2) * 2;
  return sign + `0x${num.padStart(bytes, "0")}`;
};

export const Code = (props: {
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
    instructionVariantShowed >= 0
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
                  const argSeparators = someInst.argFormat?.split("_") ?? [];
                  return (
                    <React.Fragment key={j}>
                      <div
                        className="mnemonic"
                        onClick={setAndCloseInstructionVariant(i, j)}
                      >
                        {someInst.mnemonic}
                      </div>
                      <div className={isGlobalSpanning()}>
                        {someInst.args.flatMap((arg, j) => [
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
                          <span key={j * 2 + 1}>
                            {argSeparators.at(j + 1) ?? " "}
                          </span>,
                        ])}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            );
          }

          const argSeparators = someInst.argFormat?.split("_") ?? [];

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
                {someInst.args.flatMap((arg, j) => [
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
                    className={isCurrent(
                      i,
                      argSeparators.at(j + 1) === "(" ? j + 1 : j
                    )}
                    onMouseEnter={setCurrentCallback(
                      i,
                      argSeparators.at(j + 1) === "(" ? j + 1 : j,
                      argSeparators.at(j + 1) === "("
                        ? someInst.args[j + 1]
                        : arg
                    )}
                    onMouseLeave={resetCurrent}
                  >
                    {argSeparators.at(j + 1) ??
                      (j === someInst.args.length - 1 ? "" : ", ")}
                  </span>,
                ])}
              </div>
              {variants}
            </div>
          );
        })}
      </div>
    </div>
  );
};

