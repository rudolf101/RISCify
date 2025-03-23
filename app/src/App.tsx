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
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        RISC-V Disassembler
      </Typography>
      <TextField
        label="Hex Code"
        variant="outlined"
        fullWidth
        value={hexCode}
        onChange={handleHexChange}
        style={{ marginBottom: '1rem' }}
        error={!!error} 
        helperText={error} 
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleDisassemble}
        style={{ marginBottom: '2rem' }}
        disabled={!!error} 
      >
        Disassemble
      </Button>
      <Box component={Paper} style={{ padding: '1rem', marginTop: '1rem' }}>
        <Typography variant="h5" gutterBottom>
          Instructions
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {instructions.map((instGroup, index) => (
                <TableRow key={index}>
                  <TableCell style={{ textAlign: 'center' }}>
                    {instGroup.length === 0 ? (
                      <Paper
                        elevation={3}
                        sx={{
                          display: 'inline-block',
                          padding: '1rem',
                          margin: '0.5rem',
                          textAlign: 'center',
                          backgroundColor: 'red',
                          color: 'white',
                          fontWeight: 'bold',
                          transition: 'background-color 0.3s, transform 0.3s',
                          '&:hover': {
                            backgroundColor: 'darkred',
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        Failed to disassemble instructions
                      </Paper>
                    ) : (
                    <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem', 
                      justifyContent: 'center', 
                      alignItems: 'flex-start',
                    }}
                  >
                    {instGroup.map((apply, instIndex) => (
                      <InstructionCard key={instIndex} apply={apply} />
                    ))}
                  </Box>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default App;
