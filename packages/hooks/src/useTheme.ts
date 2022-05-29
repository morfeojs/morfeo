import { ThemeKey, Theme } from '@morfeo/core';
import { useMorfeo } from './useMorfeo';

/**
 * Same as `morfeo.getTheme()` but it will cause a re-render
 * each the theme is updated anywhere in your application.
 *
 * @returns the theme object
 */
export function useTheme() {
  const { getTheme } = useMorfeo();
  return getTheme();
}

/**
 * Same as `morfeo.getTheme()[slice]` but it will cause a re-render
 * each the theme is updated anywhere in your application.
 *
 * @returns the theme slice
 */
export function useThemeSlice<TK extends ThemeKey>(slice: TK) {
  return useTheme()[slice];
}

/**
 * Same as `morfeo.getTheme()[slice][value]` but it will cause a re-render
 * each the theme is updated anywhere in your application.
 *
 * @returns the theme slice value
 */
export function useThemeValue<TK extends ThemeKey, TV extends keyof Theme[TK]>(
  slice: TK,
  value: TV,
) {
  return useThemeSlice(slice)[value];
}
