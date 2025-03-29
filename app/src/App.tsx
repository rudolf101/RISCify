import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
  Box,
  Tooltip,
} from '@mui/material';

import useDisassembler from './Render';
import { Provider } from './generator/go';
import { Apply } from './generator/models';
import "./App.css";

const provider = new Provider()

type InstructionCardProps = {
  apply: Apply;
};


const InstructionCard: React.FC<InstructionCardProps> = ({ apply }) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string, event: React.MouseEvent) => {
    event.stopPropagation();
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        alert('Failed to copy: ' + err);
      });
  };

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        margin: '0.5rem',
        textAlign: 'left',
        transition: 'background-color 0.3s, transform 0.3s',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        borderRadius: '15px',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          transform: 'scale(1.02)',
        },
        cursor: 'pointer',
      }}
      onClick={toggleExpanded}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          {apply.Instruction.mnemonic} {apply.Args.map((arg) => arg.value).join(' ')}
        </Typography>
      </Box>

      {expanded && (
        <>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            <strong>Fields:</strong>
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '1rem',
            }}
          >
            {apply.Instruction.fields.map((fieldName, fieldIndex) => {
              try {
                const field = provider.getField(fieldName);
                return (
                  <Tooltip
                    key={fieldIndex}
                    title={copied ? 'Copied!' : 'Copy'}
                    sx={{ cursor: 'pointer' }}
                    arrow
                  >
                    <Box
                      sx={{
                        padding: '0.5rem',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '&:hover': {
                          backgroundColor: '#e0f7fa',
                        },
                        '&:active': {
                          backgroundColor: '#b2ebf2',
                        },
                      }}
                      onClick={(event) => copyToClipboard(field.value, event)}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {field.name}:
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#555', marginBottom: '0.5rem' }}>
                        {field.value.split('').reverse().join('')}
                      </Typography>
                    </Box>
                  </Tooltip>
                );
              } catch (e) {
                return (
                  <Box
                    key={fieldIndex}
                    sx={{
                      padding: '0.5rem',
                      border: '1px solid red',
                      borderRadius: '8px',
                      backgroundColor: '#ffe6e6',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'red' }}>
                      Field not found: {fieldName}
                    </Typography>
                  </Box>
                );
              }
            })}
          </Box>

          <Typography variant="body1" sx={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            <strong>Arguments:</strong>
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '1rem',
            }}
          >
            {apply.Instruction.args.map((argName, argIndex) => {
              try {
                const param = provider.getParam(argName);
                return (
                  <Tooltip
                    key={argIndex}
                    title={copied ? 'Copied!' : 'Copy'}
                    sx={{ cursor: 'pointer' }}
                    arrow
                  >
                    <Box
                      sx={{
                        padding: '0.5rem',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '&:hover': {
                          backgroundColor: '#e0f7fa',
                        },
                        '&:active': {
                          backgroundColor: '#b2ebf2',
                        },
                      }}
                      onClick={(event) => copyToClipboard(apply.Args[argIndex].value, event)}  // Копируем при клике на текст
                    >
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {param.name}:
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#555', marginBottom: '0.5rem' }}>
                        {apply.Args[argIndex].value}
                      </Typography>
                    </Box>
                  </Tooltip>
                );
              } catch (e) {
                return (
                  <Box
                    key={argIndex}
                    sx={{
                      padding: '0.5rem',
                      border: '1px solid red',
                      borderRadius: '8px',
                      backgroundColor: '#ffe6e6',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'red' }}>
                      Argument not found: {argName}
                    </Typography>
                  </Box>
                );
              }
            })}
          </Box>
        </>
      )}
    </Paper>
  );
};


const App: React.FC = () => {
  const { hexCode, setHexCode, instructions, disassemble: handleDisassemble } = useDisassembler();
  const [error, setError] = useState<string | null>(null);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    /* Error not used
    const isValidHex = /^[0-9a-fA-F\s]*$/.test(value);
  
    const isEvenLength = value.replace(/\s+/g, '').length % 2 === 0;
  
    if (!isValidHex) {
      setError('Please enter a valid hex code (0-9, a-f, A-F, and spaces)');
    } else if (!isEvenLength) {
      setError('Hex code should contain an even number of characters (pairs of digits)');
    } else {
      setError(null);
    }
    */

    setHexCode(value);
  };

  return (
    <div className='app'>
      <div className='tools'>Tools panel</div>
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
    </div>
  );
};

export default App;
