import { renderHook } from '@testing-library/react-hooks';
import { theme } from '@morfeo/core';
import { useTheme, useThemeSlice, useThemeValue } from '../src';

const THEME = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  space: {
    s: '10px',
  },
} as any;

beforeAll(() => {
  theme.set(THEME);
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
