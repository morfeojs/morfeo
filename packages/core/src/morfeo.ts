import { Theme } from '@morfeo/spec';
import { createParsers } from './parsers/createParsers';
import { createTheme } from './theme/createTheme';

type CreateMorfeo<T extends Partial<Theme>> = {
  theme: T;
};

export function createMorfeo<T extends Partial<Theme>>(
  options?: CreateMorfeo<T>,
) {
  const theme = createTheme<T>(options?.theme);
  const parsers = createParsers<T>(theme);

  return {
    theme,
    parsers,
  };
}

type MorfeoInstance<T extends Partial<Theme>> = ReturnType<
  typeof createMorfeo<T>
>;

export interface Morfeo<T extends Partial<Theme> = Partial<Theme>>
  extends MorfeoInstance<T> {}
