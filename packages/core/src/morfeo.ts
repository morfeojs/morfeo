import { createParsers } from './parsers/createParsers';
import { createTheme } from './theme/createTheme';

function createMorfeo() {
  const theme = createTheme();
  const parsers = createParsers(theme);

  return {
    theme,
    parsers,
  };
}

type MorfeoInstance = ReturnType<typeof createMorfeo>;

export interface Morfeo extends MorfeoInstance {}

/**
 * morfeo exposes methods to get, use and add new themes and to parse morfeo's style objects
 * in valid `css-in-js` objects.
 *
 * @example
 *
 * import { theme } from "./theme";
 *
 * morfeo.theme.set(theme);
 *
 * const style = morfeo.parsers.resolve({
 *   py: "m",
 *   gradient: "primary"
 * });
 *
 * const currentTheme = morfeo.theme.get();
 */
export const morfeo: Morfeo = createMorfeo();
