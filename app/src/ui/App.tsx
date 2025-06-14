import { useEffect, useRef, useState } from "react";

import { InputOrder } from "../kernel/InputParser";
import { BitDepth } from "../kernel/InstructionDescription";
import performDisassemble, { DisassembleOutput } from "../kernel/Kernel";

import { Message } from "./Message";
import { Code, Display, Jump } from "./Code";
import { Switch } from "./Switch";

import "./App.css";

const App = () => {
  const [sourceCode, setSourceCode] = useState("");
  const [byteOrder, setByteOrder] = useState(InputOrder.BYTE_ORDER_BE);
  const [bytesSkip, setBytesSkip] = useState(0);
  const [bitDepth, setBitDepth] = useState(BitDepth.BIT_32);
  const [display, setDisplay] = useState<Display>("hex");
  const [edit, setEdit] = useState(false);
  const [jump, setJump] = useState<Jump>("relative");
  const [disassemblerResult, setDisassemblerResult] =
    useState<DisassembleOutput>({
      valid: "valid",
      result: [],
    });

  let ref = useRef<HTMLTextAreaElement>(null);

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
        setEdit(false);
      }
    };

    document.addEventListener("paste", handler);

    return () => {
      document.removeEventListener("paste", handler);
    };
  }, []);

  useEffect(() => {
    if (edit) {
      ref.current?.setSelectionRange(0, 0);
      ref.current?.focus();
      ref.current?.setSelectionRange(0, 0);
      // double setSelectionRange need for the same behavior of focus in Firefox and Chrome
    }
  }, [edit]);

  return (
    <div className="app">
      <div className="left">
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
          <div className="tool">
            <button
              className={edit ? "selected" : ""}
              onClick={() => setEdit((edit) => !edit)}
            >
              EDIT DUMP
            </button>
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
      <div className={`right ${edit ? "show" : ""}`}>
        <textarea
          ref={ref}
          value={sourceCode}
          onPaste={(e) => e.stopPropagation()}
          onChange={(e) => setSourceCode(e.currentTarget.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default App;
