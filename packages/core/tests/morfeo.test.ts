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

  it('should add a theme as default if `setTheme` is called without calling `useTheme` before', () => {
    morfeo.setTheme(LIGHT_THEME);

    expect(morfeo.getTheme('default').colors.primary).toBe(
      LIGHT_THEME.colors.primary,
    );
  });

  it('should return the current theme if no arguments are passed to `getTheme` method', () => {
    morfeo.addTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.useTheme('light' as ThemeName);

    expect(morfeo.getTheme().colors.primary).toBe(LIGHT_THEME.colors.primary);
  });

  it('should use another theme after calling `useTheme` method', () => {
    morfeo.addTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.addTheme('dark' as ThemeName, DARK_THEME as any);

    morfeo.useTheme('light' as ThemeName);

    expect(morfeo.getTheme().colors.primary).toBe(LIGHT_THEME.colors.primary);

    morfeo.useTheme('dark' as ThemeName);

    expect(morfeo.getTheme().colors.primary).toBe(DARK_THEME.colors.primary);
  });

  it("should return false the theme name passed to `useTheme` it's not a valid theme", () => {
    expect(morfeo.useTheme('not a valid theme nme' as ThemeName)).toBe(false);
  });

  it('should parse the style object based on the current theme', () => {
    morfeo.addTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.addTheme('dark' as ThemeName, DARK_THEME as any);

    morfeo.useTheme('light' as ThemeName);

    expect(morfeo.resolve({ bg: 'primary' })).toEqual({
      backgroundColor: LIGHT_THEME.colors.primary,
    });

    morfeo.useTheme('dark' as ThemeName);

    expect(morfeo.resolve({ bg: 'primary' })).toEqual({
      backgroundColor: DARK_THEME.colors.primary,
    });
  });

  it('should get the current theme name', () => {
    morfeo.addTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.useTheme('light' as ThemeName);

    expect(morfeo.getCurrent()).toBe('light');
  });

  it('should get all the added themes', () => {
    morfeo.addTheme('light' as ThemeName, LIGHT_THEME as any);
    morfeo.addTheme('dark' as ThemeName, DARK_THEME as any);

    const themes = morfeo.getThemes();

    expect(themes).toEqual({
      light: LIGHT_THEME,
      dark: DARK_THEME,
    });
  });
});
