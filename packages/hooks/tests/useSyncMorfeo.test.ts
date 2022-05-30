import { renderHook, act } from '@testing-library/react';
import { morfeo, Theme, ThemeName } from '@morfeo/core';
import { useSyncMorfeo } from '../src';

const LIGHT_THEME = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
} as Theme;

const DARK_THEME = {
  colors: {
    primary: 'white',
    secondary: 'black',
  },
} as Theme;

const LIGHT_THEME_KEY = 'light' as ThemeName;
const DARK_THEME_KEY = 'dark' as ThemeName;

function useHookForTest() {
  useSyncMorfeo();

  return morfeo.getCurrentTheme();
}

describe('useSyncMorfeo', () => {
  beforeEach(() => {
    morfeo.setTheme(LIGHT_THEME_KEY, LIGHT_THEME);
    morfeo.setTheme(DARK_THEME_KEY, DARK_THEME);
    morfeo.setCurrentTheme(LIGHT_THEME_KEY);
  });

  describe('when the theme changes', () => {
    it('should trigger a re-render and return the dark theme', () => {
      const { result } = renderHook(() => useHookForTest());
      const oldThemeName = result.current;

      act(() => {
        morfeo.setCurrentTheme(DARK_THEME_KEY);
      });

      expect(oldThemeName).toBe(LIGHT_THEME_KEY);
      expect(result.current).toBe(DARK_THEME_KEY);
    });
  });
});
