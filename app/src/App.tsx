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
} from '@mui/material';

import useDisassembler from './Render';

const App: React.FC = () => {
  const { hexCode, setHexCode, instructions, disassemble: handleDisassemble } = useDisassembler();
  const [error, setError] = useState<string | null>(null);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const isValidHex = /^[0-9a-fA-F\s]*$/.test(value);

    if (!isValidHex) {
      setError('Please enter a valid hex code (0-9, a-f, A-F, and spaces)');
    } else {
      setError(null); 
    }

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
                    {instGroup.map((inst, instIndex) => (
                      <Paper
                        key={instIndex}
                        elevation={3}
                        sx={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          margin: '0.5rem',
                          textAlign: 'center',
                          transition: 'background-color 0.3s, transform 0.3s',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                            transform: 'scale(1.05)', 
                          },
                        }}
                      >
                        {inst}
                      </Paper>
                    ))}
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
