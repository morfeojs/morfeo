import * as fs from 'fs';
import * as path from 'path';

export function rmdir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    return;
  }
  const dirContent = fs.readdirSync(dirPath, { withFileTypes: true });
  dirContent.forEach(current => {
    const currentPath = path.join(dirPath, current.name);
    if (current.isDirectory()) {
      return rmdir(currentPath);
    }
    fs.unlinkSync(currentPath);
  });
  fs.rmdirSync(dirPath);
}
