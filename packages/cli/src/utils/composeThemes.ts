import { Theme, ThemeKey } from '@morfeo/web';
import * as fs from 'fs';
import * as path from 'path';
import { THEME_KEYS } from '../constants';

function resolvePath(filePath: string) {
  return path.join(process.cwd(), filePath);
}

function getConfigsFromFiles(files: string[]) {
  return files
    .filter(file => typeof file === 'string')
    .map(file => {
      delete require.cache[file];
      const [defaultName] = path.basename(file).split('.') as ThemeKey[];
      const {
        default: value,
        theme,
        sliceName = defaultName,
        componentName = defaultName,
      } = require(file);

      if (THEME_KEYS.includes(defaultName) || THEME_KEYS.includes(sliceName)) {
        return { value, theme, sliceName };
      }

      return { value, theme, componentName };
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

  objects.forEach(({ value, theme, sliceName, componentName }) => {
    const filteredThemeNames = theme ? [theme] : themeNames;

    filteredThemeNames.forEach(themeName => {
      const themeSlice = sliceName ? { [sliceName]: value } : {};
      const componentSlice = componentName ? { [componentName]: value } : {};

      themeObjects[themeName] = {
        ...themeObjects[themeName],
        ...themeSlice,
        components: {
          ...themeObjects[themeName].components,
          ...componentSlice,
        },
      };
    });
  });

  return themeObjects as Record<string, Theme>;
}
