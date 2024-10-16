import * as fs from 'fs';
import * as yaml from 'js-yaml';

interface Instruction {
  name: string;
  opcode: string;
  format: string;
  params: string[];
  parsing: string;
}

function generateTSClass(instruction: Instruction): string {
  const className = instruction.name.charAt(0).toUpperCase() + instruction.name.slice(1);
  const params = instruction.params.map(param => `\tpublic ${param}: number`).join(';\n');
  const parsingWithThis = instruction.parsing.replace(/(\b\w+\b)(\s*=\s*)/g, '\t\tthis.$1$2');
  const logParams = instruction.params.map(p => `${p}=\${this.${p}}`).join(', ');
  return `
export class ${className} {
  public opcode: string = "${instruction.opcode}";
  public format: string = "${instruction.format}";
${params};

  constructor() {}

  public parse(hexCode: number): void {
${parsingWithThis}
    
    console.log(\`Parsed ${className}: ${logParams}\`);
  }
}
`;
}

function main() {
  const yamlFile = fs.readFileSync('instructions.yaml', 'utf8');
  const doc = yaml.load(yamlFile) as { instructions: Instruction[] };

  const classes = doc.instructions.map(generateTSClass).join('\n');

  fs.writeFileSync('instructions.ts', classes);
}


  

main();
