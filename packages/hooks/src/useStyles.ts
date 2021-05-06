import { Style, parsers } from '@morfeo/core';

export function useStyles<K extends string>(styles: Record<K, Style>) {
  const styleKeys = Object.keys(styles);

  return styleKeys.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: parsers.resolve({ style: styles[curr] }),
    }),
    {},
  ) as Record<K, any>;
}

export function useStyle(style: Style) {
  return parsers.resolve({ style });
}
