import { Theme, ThemeKey } from '@morfeo/web';
import * as fs from 'fs';
import * as path from 'path';
import { THEME_KEYS } from '../constants';
import { MorfeoStyleFile } from '../types';

function resolvePath(filePath: string) {
  return path.join(process.cwd(), filePath);
}

function getConfigsFromFiles(files: string[]): MorfeoStyleFile[] {
  return files
    .filter(file => typeof file === 'string')
    .map(file => {
      delete require.cache[file];
      const [defaultName] = path.basename(file).split('.') as ThemeKey[];
      const {
        default: value,
        themeName,
        sliceName = defaultName,
        componentName = defaultName,
      } = require(file);

      if (THEME_KEYS.includes(defaultName) || THEME_KEYS.includes(sliceName)) {
        return { value, themeName, sliceName };
      }

      return { value, themeName, componentName };
    });
}

function getThemes(themes: Record<string, string>) {
  const themeNames = Object.keys(themes);

  return themeNames.reduce((acc, themeName) => {
    if (!fs.existsSync(resolvePath(themes[themeName]))) {
      return {
        ...acc,
        [themeName]: {},
      };
    }
    const required = require(resolvePath(themes[themeName]));
    const currentTheme = required.default ? required.default : required;

    return {
      ...acc,
      [themeName]: currentTheme,
    };
  }, {});
}

export function composeThemes(themes: Record<string, string>, files: string[]) {
  const objects = getConfigsFromFiles(files);
  const themeNames = Object.keys(themes);
  const themeObjects = getThemes(themes);

  objects.forEach(({ value, themeName, sliceName, componentName }) => {
    const filteredThemeNames = themeName ? [themeName] : themeNames;

    filteredThemeNames.forEach(currentThemeName => {
      const themeSlice = sliceName ? { [sliceName]: value } : {};
      const componentSlice = componentName ? { [componentName]: value } : {};

      themeObjects[currentThemeName] = {
        ...themeObjects[currentThemeName],
        ...themeSlice,
        components: {
          ...themeObjects[currentThemeName].components,
          ...componentSlice,
        },
      };
    });
  });

  return themeObjects as Record<string, Theme>;
}
