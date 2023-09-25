import { createParsers } from './parsers/createParsers';
import { createTheme } from './theme/createTheme';

export function createMorfeo() {
  const theme = createTheme();
  const parsers = createParsers(theme);

  return {
    theme,
    parsers,
  };
}

type MorfeoInstance = ReturnType<typeof createMorfeo>;

export interface Morfeo extends MorfeoInstance {}
