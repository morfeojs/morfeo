import { theme, ThemeKey, deepMerge } from '@morfeo/web';
import * as fs from 'fs';
import * as path from 'path';
import { BLACK_LIST } from '../constants';
import { parseSlice } from './parseSlice';
import { buildTokens } from './buildTokens';
import { rmdir } from './rmdir';
import { makeComponentClasses } from './makeComponentClasses';

const TOKENS_BASE_PATH = path.join(__dirname, '../../tokens');

function getTokenPath(themeName: string) {
  const tokenPath = path.join(TOKENS_BASE_PATH, `${themeName}.json`);

  console.log('old tokens directory removed');
  rmdir(TOKENS_BASE_PATH);
  fs.mkdirSync(TOKENS_BASE_PATH);

  return tokenPath;
}

export function morfeoToStyleDictionary(themeName: string) {
  const morfeoTheme = theme.get();

  const slices = Object.keys(morfeoTheme) as ThemeKey[];
  const filtered = slices.filter(key => !BLACK_LIST.includes(key));

  const object = filtered.reduce(
    (acc, curr) => deepMerge(acc, parseSlice(curr)),
    {},
  );

  const tokenPath = getTokenPath(themeName);

  fs.writeFileSync(tokenPath, JSON.stringify(object, undefined, 2));

  buildTokens(themeName);

  makeComponentClasses();
}
