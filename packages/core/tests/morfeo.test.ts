import { morfeo, ThemeName } from '../src';

const LIGHT_THEME = {
  colors: {
    primary: 'white',
  },
};

const DARK_THEME = {
  colors: {
    primary: 'black',
  },
};

describe('morfeo', () => {
  beforeEach(() => {
    morfeo.__dangerousReset();
  });

  it('should automatically use the first theme set by `setTheme` without calling `useTheme`', () => {
    morfeo.setTheme('default', LIGHT_THEME);
    morfeo.setTheme('light' as ThemeName, LIGHT_THEME);
    morfeo.setTheme('dark' as ThemeName, DARK_THEME);

    expect(morfeo.getTheme('default').colors.primary).toBe(
      LIGHT_THEME.colors.primary,
    );
  });

  it('should return the current theme if no arguments are passed to `getTheme` method', () => {
    morfeo.setTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.setCurrentTheme('light' as ThemeName);

    expect(morfeo.getTheme().colors.primary).toBe(LIGHT_THEME.colors.primary);
  });

  it('should use another theme after calling `useTheme` method', () => {
    morfeo.setTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.setTheme('dark' as ThemeName, DARK_THEME as any);

    morfeo.setCurrentTheme('light' as ThemeName);

    expect(morfeo.getTheme().colors.primary).toBe(LIGHT_THEME.colors.primary);

    morfeo.setCurrentTheme('dark' as ThemeName);

    expect(morfeo.getTheme().colors.primary).toBe(DARK_THEME.colors.primary);
  });

  it("should return false if the theme name passed to `useTheme` it's not a valid theme name", () => {
    expect(morfeo.setCurrentTheme('not a valid theme nme' as ThemeName)).toBe(false);
  });

  it('should parse the style object based on the current theme', () => {
    morfeo.setTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.setTheme('dark' as ThemeName, DARK_THEME as any);

    morfeo.setCurrentTheme('light' as ThemeName);

    expect(morfeo.resolve({ bg: 'primary' })).toEqual({
      backgroundColor: LIGHT_THEME.colors.primary,
    });

    morfeo.setCurrentTheme('dark' as ThemeName);

    expect(morfeo.resolve({ bg: 'primary' })).toEqual({
      backgroundColor: DARK_THEME.colors.primary,
    });
  });

  it('should get the current theme name', () => {
    morfeo.setTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.setCurrentTheme('light' as ThemeName);

    expect(morfeo.getCurrentTheme()).toBe('light');
  });

  it('should get all the added themes', () => {
    morfeo.setTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.setTheme('dark' as ThemeName, DARK_THEME as any);

    const themes = morfeo.getThemes();

    expect(themes).toEqual({
      light: LIGHT_THEME,
      dark: DARK_THEME,
    });
  });
});
