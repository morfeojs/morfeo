import { Theme, ThemeKey, Property } from '@morfeo/spec';
import { ParserParams, ResolvedStyle } from '../types';

type BaseParser<
  T extends Partial<Theme>,
  K extends keyof T,
  P extends Property,
> = ParserParams<T, P> & {
  /**
   * Indicates the theme key where the parser will resolve the value of the property
   */
  scale: K;
};

function isSliceValue<T extends ThemeKey>(slice: Theme[T], value: unknown) {
  return (
    (typeof value === 'string' || typeof value === 'number') &&
    slice.hasOwnProperty(value)
  );
}

export function baseParser<
  T extends Partial<Theme>,
  K extends keyof T,
  P extends Property = Property,
>({ theme, value, scale, property }: BaseParser<T, K, P>): ResolvedStyle {
  const slice = theme.getSlice(scale);
  if (slice && isSliceValue(slice, value)) {
    return { [property]: slice[value as any] };
  }

  return { [property]: value };
}
