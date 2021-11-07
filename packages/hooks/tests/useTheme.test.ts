import { renderHook as baseRenderHook } from '@testing-library/react-hooks';
import { morfeo } from '@morfeo/core';
import { useTheme, useThemeSlice, useThemeValue } from '../src';
import { renderHook } from './customRenderer';

const THEME = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  spacings: {
    s: '10px',
  },
} as any;

beforeAll(() => {
  morfeo.setTheme('default', THEME);
  morfeo.useTheme('default');
});

describe('useTheme', () => {
  test('should return the theme', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current).toEqual(THEME);
  });
});

describe('useThemeSlice', () => {
  test('should return the theme slice `colors`', () => {
    const { result } = renderHook(() => useThemeSlice('colors'));

    expect(result.current).toEqual(THEME.colors);
  });
});

describe('useThemeValue', () => {
  test('should return the theme value `colors.primary`', () => {
    const { result } = renderHook(() => useThemeValue('colors', 'primary'));

    expect(result.current).toEqual(THEME.colors.primary);
  });
});

describe('useTheme without provider', () => {
  test('should return the theme even if the app is not wrapped with `MorfeoProvider`', () => {
    const { result } = baseRenderHook(() => useTheme());

    expect(result.current).toEqual(THEME);
  });
});
