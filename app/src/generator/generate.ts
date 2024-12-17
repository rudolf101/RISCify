import { YAMLData } from "./models";

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function loadYAML(filePath: string): YAMLData {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return yaml.load(fileContents) as YAMLData;
    } catch (e) {
      throw new Error(`Error reading YAML file (${filePath}): ${e}`);
    }
  }
  
  // Генерация TypeScript-константы с типом YAMLData
  function generateTypescriptConstants(folderPath: string) {
    const data: YAMLData[] = [];
  
    try {
      const files = fs.readdirSync(folderPath);
      files.forEach((file: string) => {
        const filePath = path.join(folderPath, file);
        if (file.endsWith('.yml') || file.endsWith('.yaml')) {
          const yamlData = loadYAML(filePath);
          data.push(yamlData);
        }
      });
    } catch (e) {
      throw new Error(`Error reading folder (${folderPath}): ${e}`);
    }
  
    // Генерация TypeScript-кода
    const tsCode = `
  import { YAMLData } from './models'; 
  
  export const YAMLDataGen: YAMLData[] = ${JSON.stringify(data, null, 2)};
  `;
  
    // Сохранение TypeScript-кода в файл
    fs.writeFileSync(path.join('.', 'generatedData.ts'), tsCode);
    console.log('TypeScript constants generated in "generatedData.ts"');
  }
  
  // Пример использования: генерируем код из данных в папке "data"
  generateTypescriptConstants('../../../dsl');
  