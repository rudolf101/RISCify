import "./App.css";
import { Bits } from "./kernel/Bits";
import performDisassemble from "./kernel/Kernel";

import { InputOrder, inputParser } from "./kernel/InputParser";
import { BitDepth } from "./kernel/InstructionDescription";
import { SimilarInstructions } from "./kernel/Disassembler";
import React from "react";

const Message = (props: {
  header: string, text: string, error?: boolean
}) => {
  return <>
    <div className={'header ' + (props.error ? 'error' : '')}>{props.header}</div>
    <div className={'message ' + (props.error ? 'error' : '')}>{props.text}</div>
  </>
}

const bits2hex = (bits: Bits) =>
  (console.log(bits.bigEndian),
  bits.bigEndian.replaceAll(/.{4}/g, (bit) => parseInt(bit, 2).toString(16)))

const Code = (props: { instructions: SimilarInstructions[] }) => {
  console.log(props.instructions)
  return <div className='code'>
    <div className='arrows'>
      {/* TODO: Add arrows for jumps */}
    </div>
    <pre className='offsets'>{
      props.instructions.map(inst => '0x' + inst.chunk.address.toString(16).padStart(4, '0')).join('\n')
    }</pre>
    <pre className='encoded'>{
      props.instructions.map(inst => bits2hex(inst.chunk.bits).padStart(8, ' ')).join('\n')
    }</pre>
    <div className='decoded'>
      {props.instructions.flatMap((inst, i) => <React.Fragment key={i}>
        <div>{inst.instructions.at(0)?.mnemonic ?? '???'}</div>
        <div>{inst.instructions.at(0)?.args.map(arg => arg.textual).join(', ') ?? ''}</div>
      </React.Fragment>)}
    </div>
  </div>;
}

const App = () => {
  const sourceCode = "0010031302b3566300331e1301c50e33ff8e3e83000e3f0301df58630010029301de3023ffee3c2300130313fd9ff06ffc0296e300008067"
  const byteOrder = InputOrder.BYTE_ORDER_BE;
  const parcelSkip = 0;
  const bitDepth = BitDepth.BIT_32;
  let disassemblerResult = performDisassemble(sourceCode, {
    order: byteOrder,
    parcelSkip: parcelSkip
  }, {
    bitDepth: bitDepth
  })

  return (
    <div className='app'>
      <div className='tools'>
        <div className="tool">
          <div className='switch'>
            <span className='selected'>RV32</span>
            <span>RV64</span>
          </div>
        </div>
        <div className="tool">
          <span>SKIP PARCELS</span>
          <input value={0} />
        </div>
        <div className="tool">
          <span>BYTE ORDER</span>
          <div className='switch'>
            <span className='selected'>BE</span>
            <span>LE</span>
          </div>
        </div>
        <div className="tool">
          <span>DISPLAY</span>
          <div className='switch'>
            <span className='selected'>0xFF</span>
            <span>0b01</span>
            <span>1234</span>
          </div>
        </div>
      </div>
      {sourceCode.length === 0 ?
        <Message header='PASTE CODE' text='CTRL + V' /> :
        disassemblerResult.valid === 'invalid' ?
          <Message header='FAILED TO DECODE' text={disassemblerResult.message} error /> :
          <Code instructions={disassemblerResult.result} />
      }
    </div>
  );
};

export default App;
