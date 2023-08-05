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

  function writer(content: string) {
    if (timeout) {
      clearTimeout(timeout);
    }

    return new Promise(resolve => {
      timeout = setTimeout(() => {
        fs.promises.writeFile(output, content).then(resolve);
      }, delay);
    });
  }

  return writer;
}
