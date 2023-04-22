/* eslint-disable @typescript-eslint/no-var-requires */
const { rmSync, rmdirSync, existsSync } = require('node:fs');
const { join } = require('node:path');

const MORFEO_STATIC_DIR = join(__dirname, '__static');
const MORFEO_STATIC_CSS = join(MORFEO_STATIC_DIR, 'morfeo.css');

if (existsSync(MORFEO_STATIC_CSS)) {
  rmSync(MORFEO_STATIC_CSS);
}

if (existsSync(MORFEO_STATIC_DIR)) {
  rmdirSync(MORFEO_STATIC_DIR);
}
