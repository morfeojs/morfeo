import { createMorfeo } from '@morfeo/core';
import { renderHook } from './renderHook';
import { useTheme, useThemeSlice, useThemeValue } from '../src';

const THEME = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  spacings: {
    s: '10px',
  },
} as any;

const morfeo = createMorfeo();

beforeAll(() => {
  morfeo.theme.set(THEME);
});

describe('useTheme', () => {
  test('should return the theme', () => {
    const { result } = renderHook(() => useTheme(), { instance: morfeo });

    expect(result.current).toEqual(THEME);
  });
});

describe('useThemeSlice', () => {
  test('should return the theme slice `colors`', () => {
    const { result } = renderHook(() => useThemeSlice('colors'), {
      instance: morfeo,
    });

    expect(result.current).toEqual(THEME.colors);
  });
});

describe('useThemeValue', () => {
  test('should return the theme value `colors.primary`', () => {
    const { result } = renderHook(() => useThemeValue('colors', 'primary'), {
      instance: morfeo,
    });

    expect(result.current).toEqual(THEME.colors.primary);
  });
});
