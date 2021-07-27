import * as fs from 'fs';
import * as path from 'path';

export function safeWrite(filePath: string, content: string) {
  const paths = filePath.split('/');
  const resultPath: string[] = ['/'];

  for (let i = 0; i < paths.length - 1; i++) {
    const partPath = paths[i];
    resultPath.push(partPath);
    const currPath = path.join(...resultPath);

    if (!fs.existsSync(currPath)) {
      fs.mkdirSync(currPath);
    }
  }

  fs.writeFileSync(filePath, content);
}
