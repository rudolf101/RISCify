```
tsc demo.ts
node demo.js
```

`instruction.ts` will be generated:
```typescript
// instruction.ts
export class Add {
  public opcode: string = "0x33";
  public format: string = "R-type";
	public rd: number;
	public rs1: number;
	public rs2: number;

  constructor() {}

  public parse(hexCode: number): void {
		this.rd = (hexCode >> 7) & 0x1F;
		this.rs1 = (hexCode >> 15) & 0x1F;
		this.rs2 = (hexCode >> 20) & 0x1F;

    
    console.log(`Parsed Add: rd=${this.rd}, rs1=${this.rs1}, rs2=${this.rs2}`);
  }
}


export class Addi {
  public opcode: string = "0x13";
  public format: string = "I-type";
	public rd: number;
	public rs1: number;
	public imm: number;

  constructor() {}

  public parse(hexCode: number): void {
		this.rd = (hexCode >> 7) & 0x1F;
		this.rs1 = (hexCode >> 15) & 0x1F;
		this.imm = (hexCode >> 20) & 0xFFF;

    
    console.log(`Parsed Addi: rd=${this.rd}, rs1=${this.rs1}, imm=${this.imm}`);
  }
}

```