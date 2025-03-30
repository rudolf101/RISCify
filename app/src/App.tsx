import "./App.css";
import { Bits } from "./kernel/Bits";
import { descriptions } from "./kernel/Descriptions";
import { disassemble, FilterSettings, SimilarInstructions } from "./kernel/Disassembler";

import { InputOrder, inputParser, ValidInput } from "./kernel/InputParser";
import { BitDepth, InstructionDescription } from "./kernel/InstructionDescription";
import { splitter } from "./kernel/Splitter";

const Message = (props: {
  header: string, text: string, error?: boolean
}) => {
  return <>
    <div className={'header ' + (props.error ? 'error' : '')}>{props.header}</div>
    <div className={'message ' + (props.error ? 'error' : '')}>{props.text}</div>
  </>
}

const bits2hex = (bits: Bits) =>
  bits.bigEndian.replaceAll(/.{4}/, (bit) => parseInt(bit, 2).toString(16))

const Code = (props: { instructions: SimilarInstructions[] }) => {
  return <div className='code'>
    <div className='arrows'>
      {/* TODO: Add arrows for jumps */}
    </div>
    <pre className='offsets'>{
      props.instructions.map(inst => '0x' + inst.chunk.address.toString(16).padStart(4, '0')).join('\n')
    }</pre>
    <pre className='encoded'>{
      props.instructions.map(inst => bits2hex(inst.chunk.bits)).join('\n')
    }</pre>
    <div className='decoded'>
      {props.instructions.flatMap(inst => <>
        <div>{inst.instructions[0].mnemonic}</div>
        <div>{inst.instructions[0].args.map(arg => arg.textual).join(', ')}</div>
      </>)}
    </div>
  </div>;
}

const disassembleChain =
  (input: ValidInput, descriptions: InstructionDescription[], settings: FilterSettings) =>
    disassemble(splitter(input), descriptions, settings)

const App = () => {
  const sourceCode = "0010031302b3566300331e1301c50e33ff8e3e83000e3f0301df58630010029301de3023ffee3c2300130313fd9ff06ffc0296e300008067"
  const byteOrder = InputOrder.BYTE_ORDER_BE;
  const parcelSkip = 0;
  const bitDepth = BitDepth.BIT_32;
  const input = inputParser(sourceCode, {
    order: byteOrder,
    parcelSkip: parcelSkip
  })
  let disassemblerResult: SimilarInstructions[] | null
  if (input.valid === 'valid') {
    let splitterResult = splitter(input)
    disassemblerResult = disassemble(splitterResult, descriptions, {
      bitDepth: bitDepth
    })
  } else {
    disassemblerResult = null
  }

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
        input.valid === 'invalid' ?
          <Message header='FAILED TO DECODE' text={input.message} error /> :
          <Code instructions={disassembleChain(input, descriptions, {
            bitDepth
          })} />
      }
    </div>
  );
};

export default App;
