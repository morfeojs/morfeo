import { Theme, ThemeKey } from '@morfeo/web';
import * as path from 'path';

function resolvePath(filePath: string) {
  return path.join(process.cwd(), filePath);
}

const themeKeys: ThemeKey[] = [
  'sizes',
  'radii',
  'colors',
  'borders',
  'shadows',
  'zIndices',
  'spacings',
  'opacities',
  'fontSizes',
  'transitions',
  'breakpoints',
  'lineHeights',
  'fontWeights',
  'borderWidths',
  'borderStyles',
  'mediaQueries',
  'letterSpacings',
];

export function composeSlice(themes: Record<string, string>, files: string[]) {
  const objects = files.map(file => {
    delete require.cache[file];
    const [defaultName] = path.basename(file).split('.') as ThemeKey[];
    const {
      default: value,
      theme,
      sliceName = defaultName,
      componentName = defaultName,
    } = require(file);

    if (themeKeys.includes(defaultName) || themeKeys.includes(sliceName)) {
      return { value, theme, sliceName };
    }

    return { value, theme, componentName };
  });

  const themeNames = Object.keys(themes);
  let themeObjects = themeNames.reduce((acc, themeName) => {
    const required = require(resolvePath(themes[themeName]));
    const currentTheme = required.default ? required.default : required;

    return {
      ...acc,
      [themeName]: currentTheme,
    };
  }, {});

  objects.forEach(({ value, theme, sliceName, componentName }) => {
    const filteredThemeNames = theme ? [theme] : themeNames;

    filteredThemeNames.forEach(themeName => {
      themeObjects[themeName] = {
        ...themeObjects[themeName],
        ...(sliceName ? { [sliceName]: value } : {}),
        components: {
          ...themeObjects[themeName].components,
          ...(componentName ? { [componentName]: value } : {}),
        },
      };
    });
  });

  return themeObjects as Record<string, Theme>;
}
