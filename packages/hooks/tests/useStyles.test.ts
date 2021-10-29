import { theme } from '@morfeo/core';
import { act } from 'react-test-renderer';
import { useStyles, useStyle } from '../src';
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
  theme.set(THEME);
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

    act(() =>
      theme.set({
        colors: {
          primary: 'white',
          secondary: 'black',
        },
      }),
    );
    expect(result.current).toEqual({ color: 'white' });
  });
});
