import { Theme } from '@morfeo/spec';
import { parsers } from './parsers';
import { theme } from './theme';
import { deepMerge } from './utils';
import { ThemeName, Themes } from './types';

function createMorfeo() {
  let current: ThemeName;
  let themes: Themes = {};

  /**
   * Get the current theme name
   * @example
   *
   * const current = morfeo.getCurrent(); // "light"
   */
  function getCurrent(): ThemeName {
    return current;
  }

  /**
   * Get the themes added to morfeo:
   * @example
   *
   * morfeo.setTheme("light", lightTheme);
   * morfeo.setTheme("dark", darkTheme);
   *
   * const themes = morfeo.getThemes();
   * // {
   * //    "light". {...lightTheme},
   * //    "dark": {...darkTheme}
   * // }
   */
  function getThemes() {
    return themes;
  }

  /**
   * Use one of the added themes, this method should be used in case of multi-theme application, for example:
   * @example
   *
   * const button = document.querySelector("#theme-dark-switcher");
   *
   * button.addEventListener("click", () => morfeo.useTheme("dark"));
   */
  function useTheme(themeName: ThemeName) {
    const themeToBeUsed = themes[themeName];
    if (!themeToBeUsed) {
      return false;
    }

    if (current !== themeName) {
      theme.reset();
      current = themeName;
    }
    theme.set(themeToBeUsed);

    return true;
  }

  /**
   * It adds or update a new theme the can be used with the `useTheme` method:
   * @example
   *
   * morfeo.setTheme("light", { colors: { primary: "#DDFCAD" }, ...rest});
   * morfeo.setTheme("dark", { colors: { primary: "#304F03" }, ...rest});
   *
   * morfeo.useTheme("light");
   *
   * console.log(morfeo.getTheme().colors.primary); // #DDFCAD
   *
   * morfeo.useTheme("dark");
   *
   * console.log(morfeo.get().colors.primary); // #304F03
   */
  function setTheme(
    themeName: ThemeName,
    newTheme: Parameters<typeof theme.set>[0],
  ) {
    themes[themeName] = deepMerge(themes[themeName] || {}, newTheme) as Theme;
    if (!current) {
      useTheme(themeName);
    }
  }

  /**
   * It returns the theme specified in `themeName` or the current if no argument is passed:
   * @example
   * const currentTheme = morfeo.getTheme();
   * const lightTheme = morfeo.getTheme("light");
   */
  function getTheme(themeName: ThemeName = current) {
    return themes[themeName] as Theme;
  }

  /**
   * Returns a valid `css-in-js` style generated from a morfeo's style object.
   * @example
   *
   * const style = morfeo.resolve({
   *  bg: "primary",
   *  corner: "round",
   * });
   *
   * // It will produce:
   *
   * {
   *   backgroundColor: "#06f",
   *   borderRadius: "50%"
   * }
   */
  function resolve(...params: Parameters<typeof parsers.resolve>) {
    return parsers.resolve(...params);
  }

  /**
   * **DANGER**
   * This method will reset the internal state, erase the added themes and clean the current theme.
   * Even if it's useful for testing you'll unlikely want to use it in your application.
   */
  function __dangerousReset() {
    // @ts-ignore
    current = undefined;
    // @ts-ignore
    themes = {};
    theme.reset();
  }

  return Object.freeze({
    resolve,
    useTheme,
    setTheme,
    getTheme,
    getThemes,
    getCurrent,
    __dangerousReset,
  });
}

export type Morfeo = ReturnType<typeof createMorfeo>;

/**
 * morfeo exposes methods to get, use and add new themes and to parse morfeo's style objects
 * in valid `css-in-js` objects.
 *
 * @example
 *
 * import { lightTheme } from "./themes";
 *
 * morfeo.setTheme("light", lightTheme);
 *
 * morfeo.useTheme("light")
 *
 * const style = morfeo.resolve({
 *   py: "m",
 *   gradient: "primary"
 * });
 *
 * const currentTheme = morfeo.getTheme();
 */
export const morfeo: Morfeo = createMorfeo();
