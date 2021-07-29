import { theme, ThemeKey } from '@morfeo/web';
import * as fs from 'fs';
import * as path from 'path';
import { paramCase } from 'change-case';
import { SLICES_TO_BE_EXCLUDED } from '../constants';
import { getCSSClasses } from './getCSSClasses';
import { safeWrite } from './safeWrite';
import { parseSlice } from './parseSlice';
import { BuildConfig } from '../types';

function getStylePaths(buildPath: string, themeName: string) {
  const variablesPath = path.join(
    process.cwd(),
    buildPath,
    `${paramCase(themeName)}-variables.css`,
  );

  const stylePath = path.join(
    process.cwd(),
    buildPath,
    `${paramCase(themeName)}-style.css`,
  );

  return {
    variablesPath,
    stylePath,
  };
}

function writeIndexCss(buildPath: string) {
  const buildDirectory = path.join(process.cwd(), buildPath);
  const indexPath = path.join(buildDirectory, `index.css`);
  const files = fs.readdirSync(buildDirectory, { withFileTypes: true });
  const cssFiles = files
    .filter(file => file.name.indexOf('.css') > 0)
    .filter(file => file.name !== 'index.css')
    .map(file => file.name)
    .sort(
      (first, second) =>
        second.indexOf('variables.css') - first.indexOf('variables.css'),
    );

  const css = cssFiles.reduce((acc, curr) => {
    return acc + `@import "./${curr}";\n`;
  }, '');

  safeWrite(indexPath, css);
}

function wrapWithScope(name: string, css: string) {
  const parsedCss = css.replace(/\n/g, '\n\t');
  return `:root, html[data-morfeo-theme="${name}"] {\n\t${parsedCss}\n}\n`;
}

export function buildTheme({ name, buildPath }: BuildConfig) {
  const currentTheme = theme.get();
  const slices = Object.keys(currentTheme) as ThemeKey[];
  const filtered = slices.filter(
    slice => !SLICES_TO_BE_EXCLUDED.includes(slice),
  );
  let cssText = '';

  // `breakpoints` excluded since is not possible to have variables in media queries
  const { breakpoints, ...newTheme } = filtered.reduce((acc, curr) => {
    const { css, object } = parseSlice(curr);
    cssText += css;
    return {
      ...acc,
      [curr]: object,
    };
  }, currentTheme);

  const { stylePath, variablesPath } = getStylePaths(buildPath as string, name);

  safeWrite(variablesPath, wrapWithScope(name, cssText));

  /**
   * Setting the new theme where values of slices are css variables
   */
  theme.set(newTheme);

  /**
   * getCSSClasses will return a css class for each component and foreach variant using
   * the new theme with css variables as values
   */
  const componentStyle = getCSSClasses();

  safeWrite(stylePath, componentStyle);

  writeIndexCss(buildPath as string);

  /**
   * restored the old theme
   */
  theme.set(currentTheme);
}
