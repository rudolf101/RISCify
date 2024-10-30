import * as fs from 'fs';  // Use `import * as` for fs
import * as ejs from 'ejs'; // Use `import * as` for ejs
import * as yaml from 'js-yaml'; // Use `import * as` for js-yaml

// Load the YAML file
const yamlContent = fs.readFileSync('input.yaml', 'utf-8');
const data = yaml.load(yamlContent) as any;

// Extract relevant data for TypeScript generation
const sets = data.Sets.map((set: any) => ({
  name: set.name,
  size: set.size,
  instructions: set.instructions.map((instruction: any) => ({
    name: instruction.name,
    fields: instruction.fields.map((field: string) => {
      const fieldParts = field.split('.');
      return data.Fields[fieldParts[1]];
    }),
    args: instruction.args.map((arg: string) => {
      const argParts = arg.split('.');
      return data.Args[argParts[1]];
    }),
  })),
}));

// Load the EJS template
const template = fs.readFileSync('template.ejs', 'utf-8');

// Generate TypeScript classes using EJS
const result = ejs.render(template, {
  instructions: sets.flatMap((set: { instructions: any; }) => set.instructions), // Flatten the array of instructions
});

// Write the generated TypeScript class to a file
fs.writeFileSync('output.ts', result);
console.log('TypeScript class generated in output.ts');
