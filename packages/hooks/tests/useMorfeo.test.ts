import { renderHook, act } from './renderHook';
import { Theme, createMorfeo } from '@morfeo/core';
import { useMorfeo } from '../src';

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

const morfeo = createMorfeo();

describe('useSyncMorfeo', () => {
  beforeEach(() => {
    morfeo.theme.set(THEME_1);
  });

  describe('when the theme changes', () => {
    it('should trigger a re-render and return the dark theme', () => {
      const { result } = renderHook(() => useMorfeo(), {
        instance: morfeo,
      });
      const oldThemeMode = result.current.theme.get();

      act(() => {
        morfeo.theme.set(THEME_2);
      });

      expect(oldThemeMode).toEqual(THEME_1);
      expect(result.current.theme.get()).toEqual(THEME_2);
    });
  });
});
