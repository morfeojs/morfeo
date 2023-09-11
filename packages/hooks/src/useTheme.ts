import { morfeo, ThemeKey, Theme } from '@morfeo/core';
import { useSyncMorfeo } from './useSyncMorfeo';

/**
 * Same as `morfeo.theme.get()` but it will cause a re-render
 * each the theme is updated anywhere in your application.
 *
 * @returns the theme object
 */
export function useTheme() {
  useSyncMorfeo();
  return morfeo.theme.get();
}

/**
 * Same as `morfeo.theme.get()[slice]` but it will cause a re-render
 * each the theme is updated anywhere in your application.
 *
 * @returns the theme slice
 */
export function useThemeSlice<TK extends ThemeKey>(slice: TK) {
  return useTheme()[slice];
}

/**
 * Same as `morfeo.theme.get()[slice][value]` but it will cause a re-render
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
