import { Style, ResolvedStyle, parsers } from '@morfeo/core';
import { useMemo, useState } from 'react';
import { useSubscribe } from './useSubscribe';

function parseStyles<K extends string>(styles: Record<K, Style>) {
  const styleKeys = Object.keys(styles);
  return styleKeys.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: parsers.resolve(styles[curr]),
    }),
    {},
  ) as Record<K, ResolvedStyle>;
}

export function useStyles<K extends string>(styles: Record<K, Style>) {
  const [_, setForceRender] = useState(0);
  useSubscribe(() => {
    setForceRender(prev => prev + 1);
  });
  return useMemo(() => parseStyles(styles), [styles]);
}

export function useStyle(style: Style) {
  const { style: parsedStyle } = useStyles({ style });

  return parsedStyle;
}
