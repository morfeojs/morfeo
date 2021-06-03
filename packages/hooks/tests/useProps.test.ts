import { renderHook } from '@testing-library/react-hooks';
import { theme } from '@morfeo/core';
import { useProps } from '../src';
import { act } from 'react-test-renderer';

const THEME = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  spacings: {
    s: '10px',
  },
  components: {
    Box: {
      props: {
        'aria-label': 'regular box',
      },
      variants: {
        primary: {
          props: {
            'aria-label': 'primary box',
          },
        },
      },
    },
    Button: {
      props: {
        'aria-label': 'regular button',
      },
    },
  },
} as any;

beforeAll(() => {
  theme.set(THEME);
});

describe('useProps', () => {
  test('should return the default props of the Box component', () => {
    const { result } = renderHook(() => useProps('Box'));
    expect(result.current).toEqual({ 'aria-label': 'regular box' });
  });

  test('should return the default props of the Box/primary component', () => {
    const { result } = renderHook(() => useProps('Box', 'primary'));
    expect(result.current).toEqual({ 'aria-label': 'primary box' });
  });

  test('should not crash if component variant does not exist', () => {
    const { result } = renderHook(() => useProps('Button' as any, 'primary'));
    expect(result.current).toEqual({ 'aria-label': 'regular button' });
  });

  test('should not crash if component does not exist', () => {
    const { result } = renderHook(() => useProps('Invalid' as any, 'primary'));
    expect(result.current).toEqual({});
  });
});
