import { renderHook, act } from '@testing-library/react';
import { Theme, morfeo, ThemeName } from '@morfeo/core';
import { useStyles, useStyle } from '../src';

const LIGHT_THEME = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  spacings: {
    s: '10px',
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

describe('useStyles', () => {
  test('should return the parsed styles', () => {
    const { result } = renderHook(() =>
      useStyles({
        button: {
          bg: 'primary',
        },
      }),
    );

    expect(result.current).toEqual({ button: { backgroundColor: 'black' } });
  });
});

describe('useStyle', () => {
  test('should return the theme slice `colors`', () => {
    const { result } = renderHook(() => useStyle({ p: 's' }));

    expect(result.current).toEqual({ padding: '10px' });
  });

  test('should change the result after theme update', async () => {
    const { result } = renderHook(() => useStyle({ color: 'primary' }));

    expect(result.current).toEqual({ color: 'black' });

    act(() => {
      morfeo.setCurrentTheme(DARK_THEME_KEY);
    });

    expect(result.current).toEqual({ color: 'white' });
  });
});
