import { renderHook, act } from '@testing-library/react-hooks';
import { morfeo, ThemeName } from '@morfeo/core';
import { useCurrentTheme } from '../src';

const LIGHT_THEME_KEY = 'light' as ThemeName;
const DARK_THEME_KEY = 'dark' as ThemeName;

beforeAll(() => {
  morfeo.setTheme(LIGHT_THEME_KEY, {});
  morfeo.setTheme(DARK_THEME_KEY, {});
  morfeo.setCurrentTheme(LIGHT_THEME_KEY);
});

describe('useCurrentTheme', () => {
  it('should return the current theme', () => {
    const { result } = renderHook(() => useCurrentTheme());
    const [currentTheme] = result.current;

    expect(currentTheme).toEqual(LIGHT_THEME_KEY);
  });

  describe('when the theme changes', () => {
    it('should return the dark theme', () => {
      const { result } = renderHook(() => useCurrentTheme());
      const [, use] = result.current;

      act(() => {
        use(DARK_THEME_KEY);
      });

      const [currentTheme] = result.current;

      expect(currentTheme).toEqual(DARK_THEME_KEY);
    });
  });
});
