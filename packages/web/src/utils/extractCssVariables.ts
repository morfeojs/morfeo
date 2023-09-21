import { Theme, ThemeKey } from '@morfeo/core';
import { deepMerge } from '@morfeo/utils';
import { ColorScheme, ColorSchemes } from '../types';

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

type SliceConfig<SN extends (typeof slicesToTransform)[number]> = {
  slice: Theme[SN];
  variables: {
    [K in ColorScheme]?: Record<string, string>;
  };
};

export function extractCssVariables<T extends DeepPartial<Theme>>(
  theme: T,
): Omit<SliceConfig<any>, 'slice'> & { theme: T } {
  const schemesKeys = Object.keys(
    (theme.colorSchemes || {}) as ColorSchemes,
  ) as ColorScheme[];

  function extractSliceVariables<SN extends (typeof slicesToTransform)[number]>(
    sliceName: SN,
  ): SliceConfig<SN> {
    const slice = theme[sliceName];
    if (!slice) {
      return { slice: slice as Theme[SN], variables: {} };
    }
    const sliceKeys = Object.keys(slice);

    return sliceKeys.reduce<SliceConfig<SN>>(
      (acc, sliceKey) => {
        const sliceValue = slice[sliceKey];
        const isPlain = typeof sliceValue !== 'object';
        const variableName = `--${sliceName}-${sliceKey}`.replace(/\./, '-');
        const { variables: oldVariables } = acc;

        const variables = schemesKeys.reduce((old, scheme) => {
          if (isPlain) {
            return deepMerge(old, {
              light: { [variableName]: sliceValue },
            });
          }

          if (!sliceValue[scheme]) {
            return old;
          }

          return deepMerge(old, {
            [scheme]: {
              [variableName]: sliceValue[scheme],
            },
          });
        }, oldVariables);

        const isCssVariable =
          isPlain &&
          typeof sliceValue === 'string' &&
          sliceValue.indexOf('var(') >= 0;

        const plainValue = isPlain
          ? sliceValue
          : sliceKeys
              .map(key => variables[key])
              .find(scheme => (scheme ? scheme[variableName] : false));

        return {
          slice: {
            ...acc.slice,
            [sliceKey]: isCssVariable ? plainValue : `var(${variableName})`,
          },
          variables,
        };
      },
      { slice, variables: {} } as SliceConfig<SN>,
    );
  }

  return slicesToTransform.reduce(
    ({ theme, variables: oldVariables }, sliceName) => {
      const { slice, variables } = extractSliceVariables(sliceName);

      return {
        theme: { ...theme, [sliceName]: slice },
        variables: deepMerge(oldVariables, variables),
      };
    },
    { theme, variables: {} },
  );
}
