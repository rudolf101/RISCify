import * as fs from 'fs';
import * as yaml from 'js-yaml';

type FieldDescription = {
    name: string;
    indices: number[];
    value: string;
};

type ArgumentDescription = {
    name: string;
    indices: number[];
    display: string;
};

type InstructionDescription = {
    rvset: string;
    mnemonic: string;
    fields: FieldDescription[];
    arguments: ArgumentDescription[];
    size: number;
};

type Argument = {
    name: string;
    value: string;
    display: string;
};

type Instruction = {
    rvset: string;
    mnemonic: string;
    arguments: Argument[];
};

function toNum(bits: string, signed: boolean = true): number {
    const number = parseInt(bits, 2);
    const max = 1 << (bits.length - 1);
    return signed && number >= max ? number - (max << 1) : number;
}

function parseIndices(representation: string): number[] {
    const ranges = representation.split(',');
    const indices: number[] = [];
    ranges.forEach(range => {
        if (range.includes(':')) {
            const [start, end] = range.split(':').map(Number);
            for (let i = start; i <= end; i++) indices.push(i);
        } else {
            indices.push(Number(range));
        }
    });
    return indices;
}

function extractBits(bits: string, indices: number[]): string {
    return indices.map(i => bits[i] || '0').join('');
}

function detectInstruction(bits: string, fields: FieldDescription[]): boolean {
    return fields.every(field => extractBits(bits, field.indices) === field.value);
}

function extractArguments(bits: string, args: ArgumentDescription[]): Argument[] {
    return args.map(arg => ({
        name: arg.name,
        value: extractBits(bits, arg.indices),
        display: arg.display
    }));
}

function getInstructionCandidates(bits: string, descriptions: InstructionDescription[]): Instruction[] {
    return descriptions
        .filter(desc => detectInstruction(bits, desc.fields))
        .map(desc => ({
            rvset: desc.rvset,
            mnemonic: desc.mnemonic,
            arguments: extractArguments(bits, desc.arguments)
        }));
}

function decodeAllSequences(bitSequences: string[], descriptions: InstructionDescription[]): Instruction[][] {
    return bitSequences.map(bits => getInstructionCandidates(bits, descriptions));
}

function parseHexToBinary(hexString: string): string {
    return hexString
        .split(' ')
        .map(byte => parseInt(byte, 16).toString(2).padStart(8, '0'))
        .join('');
}

function loadYamlFiles(directory: string): InstructionDescription[] {
    const files = fs.readdirSync(directory).filter(file => file.endsWith('.yaml'));
    const descriptions: InstructionDescription[] = [];
    files.forEach(file => {
        const yamlContent = fs.readFileSync(`${directory}/${file}`, 'utf8');
        const parsed = yaml.load(yamlContent) as any;
        parsed.Sets?.forEach((set: any) => {
            const rvset = set.name;
            set.instructions.forEach((instr: any) => {
                descriptions.push({
                    rvset,
                    mnemonic: instr.mnemonic,
                    size: parseInt(set.size, 10), // ??
                    fields: instr.fields.map((field: any) => ({
                        name: field.name,
                        indices: parseIndices(field.span),
                        value: field.value
                    })),
                    arguments: instr.args?.map((arg: any) => ({
                        name: arg.name,
                        indices: parseIndices(arg.span),
                        display: arg.display
                    })) || []
                });
            });
        });
    });
    return descriptions;
}

function splitBitStream(bits: string, instructionSize: number): string[] {
    const instructions: string[] = [];
    for (let i = 0; i < bits.length; i += instructionSize) {
        const chunk = bits.slice(i, i + instructionSize);
        if (chunk.length === instructionSize) {
            instructions.push(chunk);
        } else {
            console.warn(`Skipped incomplete instruction: ${chunk}`);
        }
    }
    return instructions;
}


function decodeInput(inputFilePath: string, yamlDirectory: string): void {
    const descriptions = loadYamlFiles(yamlDirectory);

    const input = fs.readFileSync(inputFilePath, 'utf8');
    const lines = input.split('\n').filter(line => line.trim());
    lines.forEach(line => {
        const [address, hex] = line.split(':').map(part => part.trim());
        const bits = parseHexToBinary(hex);

        const maxInstructionSize = Math.max(...descriptions.map(desc => desc.size));
        const bitChunks = splitBitStream(bits, maxInstructionSize);

        bitChunks.forEach(chunk => {
            const instructions = getInstructionCandidates(chunk, descriptions);
            console.log(`${address}: ${instructions.map(instr => instr.mnemonic).join(', ')}`);
        });
    });
}

decodeInput('input.txt', '../../../dsl');
