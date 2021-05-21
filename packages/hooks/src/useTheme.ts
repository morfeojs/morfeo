import { theme, ThemeKey, Theme } from '@morfeo/core';
import { useEffect, useState } from 'react';
import { useSubscribe } from './useSubscribe';

/**
 * Same as `theme.get()` but connected it will cause a re-render
 * if the theme is updated anywhere in your application.
 */
export function useTheme() {
  const [t, setTheme] = useState(theme.get());

  useSubscribe(setTheme);

  return t;
}

/**
 * Same as `theme.getSlice(slice)` but connected it will cause a re-render
 * if the theme is updated anywhere in your application.
 */
export function useThemeSlice<TK extends ThemeKey>(slice: TK) {
  return useTheme()[slice];
}

/**
 * Same as `theme.getValue(slice, value)` but connected it will cause a re-render
 * if the theme is updated anywhere in your application.
 */
export function useThemeValue<TK extends ThemeKey, TV extends keyof Theme[TK]>(
  slice: TK,
  value: TV,
) {
  return useThemeSlice(slice)[value];
}
