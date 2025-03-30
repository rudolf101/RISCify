import "./App.css";
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
          <div className='code'>
            <div className='arrows'>
              {/* TODO: Add arrows for jumps */}
            </div>
            <pre className='offsets'>{`0x0000
0x0004
0x0008
0x000c
0x0010
0x0014
0x0018
0x001c
0x0020
0x0024
0x0028
0x002c
0x0030
0x0034
0x0038`}</pre>
            <pre className='encoded'>{`00000293
00100313
02b35663
00331e13
01c50e33
ff8e3e83
000e3f03
01df5863
00100293
01de3023
ffee3c23
00130313
fd9ff06f
fc0296e3
00008067`}</pre>
            <div className='decoded'>
              <div>li</div>
              <div>t0, 0</div>
              <div>li</div>
              <div>t1, 1</div>
              <div>bge</div>
              <div>t1, a1, 2f</div>
              <div>slli</div>
              <div>t3, t1, 3</div>
              <div>add</div>
              <div>t3, a0, t3</div>
              <div>ld</div>
              <div>t4, -8(t3)</div>
              <div>ld</div>
              <div>t5, 0(t3)</div>
              <div>ble</div>
              <div>t4, t5, 3f</div>
              <div>li</div>
              <div>t0, 1</div>
              <div>sd</div>
              <div>t4, 0(t3)</div>
              <div>sd</div>
              <div>t5, -8(t3)</div>
              <div>addi</div>
              <div>t1, t1, 1</div>
              <div>j</div>
              <div>2b</div>
              <div>bnez</div>
              <div>t0, 1b</div>
              <div>ret</div>
              <div></div>
            </div>
          </div>
      }
    </div>
  );
};

export default App;
