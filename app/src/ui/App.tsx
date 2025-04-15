import "./App.css";
import { Bits } from "../kernel/Bits";
import performDisassemble from "../kernel/Kernel";

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
        <span className={spanSet.has(i * 8 + j) ? "selected" : ""}>{e}</span>
      ))
    );
  } else {
    const num = BigInt("0b" + text);
    const hex = num.toString(16);
    const paddedHex = hex.padStart(text.length / 4, "0");
    spaced = Array.from(paddedHex.matchAll(/.{2}/g)).map((res) =>
      Array.from(res[0]).map((e) => <span>{e}</span>)
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

const Code = (props: {
  instructions: SimilarInstructions[];
  display: Display;
  order: InputOrder;
}) => {
  const [current, setCurrent] = useState<{
    span: Span;
    i: number;
    j: number;
  } | null>(null);
  console.log(props.instructions);
  console.log(current);
  const isCurrent = (i: number, j: number) =>
    current && current.i === i && current.j === j ? "selected" : "";
  const isSpanning = (i: number) =>
    props.display === "bin" && current && current.i === i ? "spanning" : "";
  return (
    <div
      className={`code`}
      style={{ gridTemplateRows: `repeat(${props.instructions.length}, auto)` }}
    >
      <div className="arrows">{/* TODO: Add arrows for jumps */}</div>
      <div className="offsets">
        {props.instructions.map((inst) => (
          <span>0x{inst.chunk.address.toString(16).padStart(4, "0")}</span>
        ))}
      </div>
      <div className="encoded">
        {props.instructions.map((inst, i) => (
          <span className={isSpanning(i)}>
            {convertBits(
              inst.chunk.bits,
              props.display,
              props.order,
              current?.span
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

          return (
            <React.Fragment key={i}>
              <div className={`mnemonic ${isSpanning(i)}`}>{someInst.mnemonic ?? "???"}</div>
              <div className={isSpanning(i)}>
                {someInst.args
                  .flatMap((arg, j) => [
                    <span
                      className={`${argumentType(arg)} ${isCurrent(i, j)}`}
                      onMouseEnter={() =>
                        setCurrent({
                          span: arg.span,
                          i,
                          j,
                        })
                      }
                      onMouseLeave={() => setCurrent(null)}
                    >
                      {arg.textual}
                    </span>,
                    ", ",
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
  // "0010031302b3566300331e1301c50e33ff8e3e83000e3f0301df58630010029301de3023ffee3c2300130313fd9ff06ffc0296e300008067"
  const [sourceCode, setSourceCode] = useState("");
  const [byteOrder, setByteOrder] = useState(InputOrder.BYTE_ORDER_BE);
  const [parcelSkip, setParcelSkip] = useState(0);
  const [bitDepth, setBitDepth] = useState(BitDepth.BIT_32);
  const [display, setDisplay] = useState<Display>("hex");
  let disassemblerResult = performDisassemble(
    sourceCode,
    {
      order: byteOrder,
      parcelSkip: parcelSkip,
    },
    {
      bitDepth: bitDepth,
    }
  );

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
          <span>SKIP PARCELS</span>
          <input
            type="number"
            value={parcelSkip}
            onChange={(e) => {
              if (e.currentTarget.value.trim().length === 0) {
                setParcelSkip(0);
                return;
              }
              const value = e.currentTarget.valueAsNumber;
              if (isFinite(value) && value >= 0) {
                setParcelSkip(value | 0);
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
        />
      )}
    </div>
  );
};

export default App;
