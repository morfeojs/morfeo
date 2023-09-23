import { Theme, createMorfeo } from '@morfeo/core';
import { renderHook, act } from './renderHook';
import { useStyles, useStyle } from '../src';

const THEME_1 = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  spacings: {
    s: '10px',
  },
} as Theme;

const THEME_2 = {
  colors: {
    primary: 'white',
    secondary: 'black',
  },
} as Theme;

const morfeo = createMorfeo();

beforeEach(() => {
  morfeo.theme.set(THEME_1);
});

describe('useStyles', () => {
  test('should return the parsed styles', () => {
    const { result } = renderHook(
      () =>
        useStyles({
          button: {
            bg: 'primary',
          },
        }),
      { instance: morfeo },
    );

    expect(result.current).toEqual({ button: { backgroundColor: 'black' } });
  });
});

describe('useStyle', () => {
  test('should return the theme slice `colors`', () => {
    const { result } = renderHook(() => useStyle({ p: 's' }), {
      instance: morfeo,
    });

    expect(result.current).toEqual({ padding: '10px' });
  });

  test('should change the result after theme update', async () => {
    const { result } = renderHook(() => useStyle({ color: 'primary' }), {
      instance: morfeo,
    });

    expect(result.current).toEqual({ color: 'black' });

    act(() => {
      morfeo.theme.set(THEME_2);
    });

    expect(result.current).toEqual({ color: 'white' });
  });
});
