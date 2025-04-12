import "./App.css";
import { Bits } from "../kernel/Bits";
import performDisassemble from "../kernel/Kernel";

import { InputOrder } from "../kernel/InputParser";
import { BitDepth } from "../kernel/InstructionDescription";
import { SimilarInstructions } from "../kernel/Disassembler";
import React, { useEffect, useState } from "react";

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

type Display = "hex" | "dec" | "bin";

const convertBits = (
  bits: Bits,
  display: Display,
  order: InputOrder
): string => {
  const text = order === InputOrder.BYTE_ORDER_BE ? bits.bigEndian : bits.data;
  if (display === "bin") {
    return text;
  }
  const num = BigInt("0b" + text);
  if (display === "hex") {
    const hex = num.toString(16);
    return hex.padStart(text.length / 4, "0");
  }

  const dec = num.toString(10);
  const maxLen = BigInt("0b" + "1".repeat(text.length)).toString(10).length;
  return dec.padStart(maxLen, "0");
};

const Code = (props: {
  instructions: SimilarInstructions[];
  display: Display;
  order: InputOrder;
}) => {
  console.log(props.instructions);
  const pad = props.display === "hex" ? 8 : props.display === "bin" ? 32 : 10;
  return (
    <div className="code">
      <div className="arrows">{/* TODO: Add arrows for jumps */}</div>
      <pre className="offsets">
        {props.instructions
          .map(
            (inst) => "0x" + inst.chunk.address.toString(16).padStart(4, "0")
          )
          .join("\n")}
      </pre>
      <pre className="encoded">
        {props.instructions
          .map((inst) =>
            convertBits(inst.chunk.bits, props.display, props.order).padStart(
              pad,
              " "
            )
          )
          .join("\n")}
      </pre>
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
              <div className="mnemonic">{someInst.mnemonic ?? "???"}</div>
              <div>
                {someInst.args.map((arg) => arg.textual).join(", ") ?? ""}
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
              {
                text: "1234",
                value: "dec" as const,
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
