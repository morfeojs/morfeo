import * as path from 'node:path';
import * as fs from 'node:fs';

export const MORFEO_CSS_PATH = path.join(
  __dirname,
  '../__static',
  'morfeo.css',
);

export const writer = createCssWriter();

function createCssWriter() {
  const cache = new Map<string, boolean>();

  if (!fs.existsSync(path.dirname(MORFEO_CSS_PATH))) {
    fs.mkdirSync(path.dirname(MORFEO_CSS_PATH));
  }

  fs.writeFileSync(MORFEO_CSS_PATH, ``);

  function write(content: string) {
    cache.set(content, true);

    fs.appendFileSync(MORFEO_CSS_PATH, content, {
      encoding: 'utf8',
    });
  }

  return { write };
}
