import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

interface Instruction {
  address: string;
  hex: string;
  instruction: string;
}

const App: React.FC = () => {
  const [hexCode, setHexCode] = useState<string>('');
  const [instructions, setInstructions] = useState<Instruction[]>([]);

  const handleDisassemble = () => {
    // Мок данные дизассемблирования
    const mockInstructions: Instruction[] = [
      { address: '0x0000', hex: '0x00000013', instruction: 'addi x0, x0, 0' },
      { address: '0x0004', hex: '0x00008067', instruction: 'ret' },
      { address: '0x0008', hex: '0x00400093', instruction: 'addi x1, x0, 4' },
    ];
    setInstructions(mockInstructions);
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
        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setHexCode(e.target.value)}
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
          <TableHead>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>Hex</TableCell>
              <TableCell>Instruction</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instructions.map((inst, index) => (
              <TableRow key={index}>
                <TableCell>{inst.address}</TableCell>
                <TableCell>{inst.hex}</TableCell>
                <TableCell>{inst.instruction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default App;
