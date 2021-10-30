import * as fs from 'fs';
import * as path from 'path';

export function getLernaJson() {
  const file = fs.readFileSync(path.join(__dirname, '../../lerna.json'), {
    encoding: 'utf-8',
  });
  return JSON.parse(file);
}
