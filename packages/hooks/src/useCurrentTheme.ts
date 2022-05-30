import { morfeo, ThemeName } from '@morfeo/core';
import { useSyncMorfeo } from './useSyncMorfeo';

type UseCurrentThemeReturnValue = [ThemeName, (name: ThemeName) => void];

export function useCurrentTheme(): UseCurrentThemeReturnValue {
  useSyncMorfeo();
  return [morfeo.getCurrentTheme(), morfeo.setCurrentTheme];
}
