import { useTheme, Theme, ThemeKey } from '@morfeo/react';

function getThemeSlices(theme?: Theme) {
  return Object.keys(theme || {}).sort((first, second) =>
    first.localeCompare(second),
  ) as ThemeKey[];
}

export function useThemeSlices() {
  const theme = useTheme();
  return getThemeSlices(theme);
}
