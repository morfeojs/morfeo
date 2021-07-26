import {
  deepMerge,
  theme,
  parsers,
  Theme,
  ThemeKey,
  BreakPoint,
} from '@morfeo/web';
import { TO_BE_PARSED_SLICES_LIST } from '../constants';

function getValue<Key extends ThemeKey>(
  sliceName: Key,
  attribute: keyof Theme[Key],
) {
  const toBeParsed = TO_BE_PARSED_SLICES_LIST.find(
    config => config.name === sliceName,
  );
  if (toBeParsed) {
    const style = parsers.resolve({
      [toBeParsed.styleProp]: attribute,
    });

    return style[toBeParsed.property];
  }

  return theme.getValue(sliceName, attribute);
}

function getConfig<Key extends ThemeKey>(
  sliceName: Key,
  attribute: keyof Theme[Key],
) {
  const value = getValue(sliceName, attribute);
  const attributeConfig = {
    [attribute]: {
      value,
      comment: `value referred to morfeo's \`${sliceName}\` theme slice`,
    },
  };

  return { [sliceName]: attributeConfig };
}

function makeMediaQueriesSlice() {
  const breakpoints = theme.getSlice('breakpoints');
  const keys = Object.keys(breakpoints) as BreakPoint[];

  const values = keys.reduce(
    (acc, curr) => {
      return {
        bg: {
          ...acc.bg,
          [curr]: 'any value',
        },
      };
    },
    { bg: {} },
  );

  const style = parsers.resolve(values);
  const mediaQueries = Object.keys(style);

  return {
    mediaQueries: keys.reduce(
      (acc, curr, index) => ({
        ...acc,
        [curr]: {
          value: `"${mediaQueries[index]}"`,
          comment: "value referred to morfeo's `mediaQueries` theme slice",
        },
      }),
      {},
    ),
  };
}

export function parseSlice<Key extends ThemeKey>(sliceName: Key) {
  const slice = theme.getSlice(sliceName);
  const values = Object.keys(slice) as (keyof Theme[Key])[];

  const object = values.reduce((acc, curr) => {
    const config = getConfig(sliceName, curr);
    return deepMerge(acc, config);
  }, {});

  return deepMerge(object, makeMediaQueriesSlice());
}
