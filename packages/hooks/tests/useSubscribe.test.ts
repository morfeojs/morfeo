import { renderHook, act } from '@testing-library/react-hooks';
import { theme } from '@morfeo/core';
import { useSubscribe } from '../src';

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

describe('useSubscribe', () => {
  test('should call the callback after a change of the theme', async () => {
    const mockFn = jest.fn();
    renderHook(() => useSubscribe(mockFn));
    act(() => theme.set({}));
    act(() => theme.set({}));
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
