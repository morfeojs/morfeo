import * as path from 'node:path';
import * as fs from 'node:fs';
import { UnpluginContextMeta } from 'unplugin';

export const MORFEO_CSS_PATH = path.join(
  __dirname,
  '../__static',
  'morfeo.css',
);

export const MORFEO_VIRTUAL_MODULE_PREFIX = 'virtual:morfeo';

function createCssWriter() {
  let css = '';
  if (!fs.existsSync(path.dirname(MORFEO_CSS_PATH))) {
    fs.mkdirSync(path.dirname(MORFEO_CSS_PATH));
  }

  fs.writeFileSync(MORFEO_CSS_PATH, ``);

  function collect(content: string) {
    css += content;
  }

  function write(content: string) {
    fs.appendFileSync(MORFEO_CSS_PATH, content, {
      encoding: 'utf8',
    });
  }

  function add(content: string, framework: UnpluginContextMeta['framework']) {
    if (framework === 'vite' || framework === 'rollup') {
      return collect(content);
    }

    return write(content);
  }

  function getImport(
    fileName: string,
    framework: UnpluginContextMeta['framework'],
  ) {
    if (framework === 'vite' || framework === 'rollup') {
      return `${MORFEO_VIRTUAL_MODULE_PREFIX}/${fileName}.css`;
    }

    return MORFEO_CSS_PATH;
  }

  function get() {
    const chunk = css;
    css = '';
    return chunk;
  }

  return { add, get, getImport };
}

export const writer = createCssWriter();
