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
} from '@mui/material';

import useDisassembler from './Render';

const App: React.FC = () => {
  const { hexCode, setHexCode, instructions, handleDisassemble } = useDisassembler();

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
        onChange={(e) => setHexCode(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleDisassemble}
        style={{ marginBottom: '2rem' }}
      >
        Disassemble
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {instructions.map((inst, index) => (
              <TableRow key={index}>
                <TableCell style={{ textAlign: 'center' }}>{inst}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default App;
