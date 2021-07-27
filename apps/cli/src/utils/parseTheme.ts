import { theme, ThemeKey } from '@morfeo/web';
import { SLICES_TO_BE_EXCLUDED } from '../constants';
import * as path from 'path';
import { makeClasses } from './makeClasses';
import { safeWrite } from './safeWrite';
import { parseSlice } from './parseSlice';

const BUILD_PATH = path.join(__dirname, '../../morfeo');
const CSS_VARIABLES_PATH = path.join(BUILD_PATH, 'variables.css');

export function parseTheme(themeName: string) {
  const currentTheme = theme.get();
  const slices = Object.keys(currentTheme) as ThemeKey[];
  const filtered = slices.filter(
    slice => !SLICES_TO_BE_EXCLUDED.includes(slice),
  );
  let cssText = `:root, html[data-morfeo-theme="${themeName}"] {`;

  // `breakpoints` excluded since is not possible to have variables in media queries
  const { breakpoints, ...newTheme } = filtered.reduce((acc, curr) => {
    const { css, object } = parseSlice(curr);
    cssText += css;
    return {
      ...acc,
      [curr]: object,
    };
  }, currentTheme);

  cssText += '\n}\n';

  theme.set(newTheme);

  safeWrite(CSS_VARIABLES_PATH, cssText);
  makeClasses();

  theme.set(currentTheme);
}
