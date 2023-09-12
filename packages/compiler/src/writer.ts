import * as fs from 'fs';

type WriterOptions = {
  delay?: number;
  output: string;
};

const DEFAULT_OPTIONS = {
  delay: 10,
};

export function createWriter({
  output,
  delay = DEFAULT_OPTIONS.delay,
}: WriterOptions) {
  let timeout: NodeJS.Timeout;

  function safeWrite(path: string, content: string) {
    const parts = path.split('/');
    const checked: string[] = [];

    parts.forEach((part, index) => {
      checked.push(part);
      const currentPath = checked.join('/');
      if (fs.existsSync(currentPath)) {
        return;
      }

      if (index === parts.length - 1) {
        return;
      }

      fs.mkdirSync(currentPath);
    });

    return fs.promises.writeFile(path, content);
  }

  function writer(onWrite: () => string) {
    if (timeout) {
      clearTimeout(timeout);
    }

    return new Promise(resolve => {
      timeout = setTimeout(() => {
        safeWrite(output, onWrite()).then(resolve);
      }, delay);
    });
  }

  return writer;
}
