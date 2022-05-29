import { renderHook, act } from '@testing-library/react';
import { morfeo, theme, Theme, ThemeName } from '@morfeo/core';
import { useMorfeo } from '../src';

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

beforeEach(() => {
  morfeo.setTheme(LIGHT_THEME_KEY, LIGHT_THEME);
  morfeo.setTheme(DARK_THEME_KEY, DARK_THEME);
  morfeo.setCurrentTheme(LIGHT_THEME_KEY);
});

describe('useMorfeo', () => {
  it('should return the theme', () => {
    const { result } = renderHook(() => useMorfeo());

    expect(result.current.getTheme()).toEqual(LIGHT_THEME);
  });

  describe('when the theme changes', () => {
    it('should return the dark theme', () => {
      const { result } = renderHook(() => useMorfeo());

      act(() => {
        result.current.setCurrentTheme(DARK_THEME_KEY);
      });

      expect(result.current.getTheme()).toEqual(DARK_THEME);
    });
  });
});
