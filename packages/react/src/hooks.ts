import { CSSProperties } from 'react';
import { Style } from '@morfeo/web';
import * as morfeoHooks from '@morfeo/hooks';

export function useStyles<K extends string>(styles: Record<K, Style>) {
  return morfeoHooks.useStyles(styles) as Record<K, CSSProperties>;
}

export function useStyle(style: Style) {
  return useStyles({ style })['style'];
}
