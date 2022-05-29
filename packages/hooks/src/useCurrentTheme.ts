import { ThemeName } from '@morfeo/core';
import { useMorfeo } from './useMorfeo';

type UseCurrentThemeReturnValue = [ThemeName, (name: ThemeName) => void];

export function useCurrentTheme(): UseCurrentThemeReturnValue {
  const { getCurrentTheme, setCurrentTheme } = useMorfeo();
  return [getCurrentTheme(), setCurrentTheme];
}
