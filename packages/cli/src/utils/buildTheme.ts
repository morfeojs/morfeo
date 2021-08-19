import { theme, ThemeKey } from '@morfeo/web';
import * as fs from 'fs';
import * as path from 'path';
import { paramCase } from 'change-case';
import { SLICES_TO_BE_EXCLUDED } from '../constants';
import { getComponentsCSS } from './getComponentsCSS';
import { safeWrite } from './safeWrite';
import { parseSlice } from './parseSlice';
import { BuildConfig } from '../types';
import { getClassesCSS } from './getClassesCSS';

function getStylePaths(buildPath: string, themeName: string) {
  const themeNameInParamCase = paramCase(themeName);

  const variablesPath = path.join(
    process.cwd(),
    buildPath,
    `${themeNameInParamCase}-variables.css`,
  );

  const componentsPath = path.join(
    process.cwd(),
    buildPath,
    `${themeNameInParamCase}-components.css`,
  );

  const classesPath = path.join(process.cwd(), buildPath, `classes.css`);

  return {
    componentsPath,
    variablesPath,
    classesPath,
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
  return `:root, [data-morfeo-theme="${name}"] {\n${css}}\n`;
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

  const { componentsPath, variablesPath, classesPath } = getStylePaths(
    buildPath as string,
    name,
  );

  safeWrite(variablesPath, wrapWithScope(name, cssText));

  /**
   * Setting the new theme where values of slices are css variables
   */
  theme.set(newTheme);

  /**
   * getComponentsCSS will return a css class for each component and for each variant
   */
  const componentStyle = getComponentsCSS(name);
  safeWrite(componentsPath, componentStyle);

  /**
   * getClassesCSS will return a css class for all the combinations of properties-theme value handled by morfeo
   */
  const classesStyle = getClassesCSS();

  safeWrite(classesPath, classesStyle);

  /**
   * It writes the index.css file where all the generated styles are imported
   */
  writeIndexCss(buildPath as string);

  /**
   * restored the old theme
   */
  theme.set(currentTheme);
}
