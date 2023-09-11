import { Theme, ThemeKey } from '@morfeo/core';
import { deepMerge } from '@morfeo/utils';
import { defaultTheme } from '../defaultTheme';

const slicesToTransform: ThemeKey[] = [
  'radii',
  'sizes',
  'fonts',
  'colors',
  'spacings',
  'zIndices',
  'opacities',
  'fontSizes',
  'fontWeights',
  'lineHeights',
  'transitions',
  'borderWidths',
  'borderStyles',
  'letterSpacings',
];

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export function extractCssVariables(partialTheme: DeepPartial<Theme>) {
  const theme = deepMerge(defaultTheme, partialTheme) as Theme;
  function extractSliceVariables<SN extends (typeof slicesToTransform)[number]>(
    sliceName: SN,
  ) {
    const slice = theme[sliceName];
    const sliceKeys = Object.keys(slice);

    return sliceKeys.reduce<{
      slice: Theme[SN];
      light: Record<string, string>;
      dark: Record<string, string>;
    }>(
      (acc, sliceKey) => {
        const sliceValue = slice[sliceKey];

        const lightValue =
          typeof sliceValue === 'object' ? sliceValue.light : sliceValue;
        const darkValue =
          typeof sliceValue === 'object'
            ? sliceValue.dark || lightValue
            : sliceValue;

        const isCssVariable =
          typeof lightValue === 'string' && lightValue.indexOf('var(') >= 0;

        const variableName = `--${sliceName}-${sliceKey}`.replace(/\./, '-');

        return {
          slice: {
            ...acc.slice,
            [sliceKey]: isCssVariable ? lightValue : `var(${variableName})`,
          },
          light: {
            ...acc.light,
            [variableName]: lightValue,
          },
          dark:
            darkValue && lightValue !== darkValue
              ? {
                  ...acc.dark,
                  [variableName]: darkValue,
                }
              : acc.dark,
        };
      },
      { light: {}, dark: {}, slice },
    );
  }

  return slicesToTransform.reduce(
    (acc, sliceName) => {
      const { light, dark, slice } = extractSliceVariables(sliceName);

      return {
        theme: { ...acc.theme, [sliceName]: slice },
        light: { ...acc.light, ...light },
        dark: { ...acc.dark, ...dark },
      };
    },
    { light: {}, dark: {}, theme },
  );
}
