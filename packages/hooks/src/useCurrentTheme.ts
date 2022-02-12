import { theme, morfeo, ThemeName } from '@morfeo/core';
import { useEffect, useState } from 'react';

type UseCurrentThemeReturnValue = [ThemeName, (name: ThemeName) => void];

export function useCurrentTheme(): UseCurrentThemeReturnValue {
  const [current, setCurrent] = useState(morfeo.getCurrentTheme());

  function setCurrentTheme(themeName: ThemeName) {
    morfeo.setCurrentTheme(themeName);
    setCurrent(morfeo.getCurrentTheme());
  }

  useEffect(() => {
    const uid = theme.subscribe(() => setCurrent(morfeo.getCurrentTheme()));

    return () => theme.cleanUp(uid);
  }, []);

  return [current, setCurrentTheme];
}
