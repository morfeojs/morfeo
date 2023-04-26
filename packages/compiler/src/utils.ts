import * as path from 'node:path';
import * as fs from 'node:fs';
import { UnpluginContextMeta } from 'unplugin';

export const MORFEO_UNPLUGIN_ID = 'unplugin-morfeo';

export const VIRTUAL_MORFEO_CSS = 'virtual:morfeo';

export const SUPPORTED_EXTENSIONS = ['ts', 'js', 'tsx', 'jsx'];

export const VIRTUAL_MODULES_FRAMEWORKS: UnpluginContextMeta['framework'][] = [
  'vite',
  'rollup',
  'rspack',
  'esbuild',
];

export const MORFEO_CSS_PATH = path.join(
  __dirname,
  '../__static',
  'morfeo.css',
);

if (!fs.existsSync(path.dirname(MORFEO_CSS_PATH))) {
  fs.mkdirSync(path.dirname(MORFEO_CSS_PATH));
}

function createCssWriter() {
  let css = '';

  function collect(content: string) {
    css += content;
  }

  function write(content: string) {
    fs.writeFileSync(MORFEO_CSS_PATH, content, {
      encoding: 'utf8',
    });
  }

  function add(content: string, framework: UnpluginContextMeta['framework']) {
    if (VIRTUAL_MODULES_FRAMEWORKS.includes(framework)) {
      return collect(content);
    }

    return write(content);
  }

  function getImport(
    fileName: string,
    framework: UnpluginContextMeta['framework'],
  ) {
    if (VIRTUAL_MODULES_FRAMEWORKS.includes(framework)) {
      return `${VIRTUAL_MORFEO_CSS}/${fileName}.css`;
    }

    return MORFEO_CSS_PATH;
  }

  function get() {
    const chunk = css;
    css = '';
    return chunk;
  }

  function reset() {
    css = '';
  }

  return { add, get, getImport, reset };
}

export const writer = createCssWriter();
