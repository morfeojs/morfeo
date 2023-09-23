import type { Style, ResolvedStyle, Morfeo } from '@morfeo/core';
import { useMorfeo } from './MorfeoProvider';

/**
 * useStyles
 * it returns the a record of styles that can be used as inline-style in your components.
 */
export function useStyles<K extends string>(styles: Record<K, Style>) {
  const morfeo = useMorfeo();
  const styleKeys = Object.keys(styles) as K[];

  return styleKeys.reduce<Record<K, ResolvedStyle>>(
    (acc, curr) => ({
      ...acc,
      [curr]: morfeo.parsers.resolve(styles[curr]),
    }),
    {} as Record<K, ResolvedStyle>,
  );
}

/**
 * useStyles
 * it returns the a style that can be used as inline-style in your components.
 */
export function useStyle(style: Style) {
  const { style: parsedStyle } = useStyles({ style });

  return parsedStyle;
}
