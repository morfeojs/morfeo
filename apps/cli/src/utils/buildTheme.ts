import { theme, ThemeKey } from '@morfeo/web';
import * as path from 'path';
import { SLICES_TO_BE_EXCLUDED } from '../constants';
import { getCSSClasses } from './getCSSClasses';
import { safeWrite } from './safeWrite';
import { parseSlice } from './parseSlice';
import { BuildConfig } from '../types';
import { getConfiguration } from './getConfiguration';

function getStylePaths(buildPath: string) {
  const variablesPath = path.join(process.cwd(), buildPath, 'variables.css');
  const stylePath = path.join(process.cwd(), buildPath, 'style.css');

  return {
    variablesPath,
    stylePath,
  };
}

function wrapWithScope(name: string, css: string) {
  const parsedCss = css.replace(/\n/g, '\n\t');
  return `:root, html[data-morfeo-theme="${name}"] {\n\t${parsedCss}\n}\n`;
}

export function buildTheme(config: BuildConfig) {
  const { name, buildPath } = getConfiguration(config);

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

  const { stylePath, variablesPath } = getStylePaths(buildPath as string);

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

  /**
   * restored the old theme
   */
  theme.set(currentTheme);
}
