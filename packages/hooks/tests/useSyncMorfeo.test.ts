import { renderHook, act } from '@testing-library/react';
import { morfeo, Theme, ThemeMode } from '@morfeo/core';
import { useSyncMorfeo } from '../src';

const THEME_1 = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
} as Theme;

const THEME_2 = {
  colors: {
    primary: 'white',
    secondary: 'black',
  },
} as Theme;

function useHookForTest() {
  useSyncMorfeo();

  return morfeo.theme.get();
}

describe('useSyncMorfeo', () => {
  beforeEach(() => {
    morfeo.theme.set(THEME_1);
  });

  describe('when the theme changes', () => {
    it('should trigger a re-render and return the dark theme', () => {
      const { result } = renderHook(() => useHookForTest());
      const oldThemeMode = result.current;

      act(() => {
        morfeo.theme.set(THEME_2);
      });

      expect(oldThemeMode).toEqual(THEME_1);
      expect(result.current).toEqual(THEME_2);
    });
  });
});
