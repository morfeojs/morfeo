import { Theme, ThemeKey, Property } from '@morfeo/spec';
import { theme } from '../theme';
import { ParserParams } from '../types';

type BaseParser<T extends ThemeKey, P extends Property> = ParserParams<P> & {
  /**
   * Indicates the theme key where the parser will resolve the value of the property
   */
  scale: T;
  /**
   * In case of the value of the `property` is not resolved:
   * - If `true` the parser will return an empty object.
   * - if `false` the parser will return the not resolved value
   * @default false
   */
  failOnNotFound?: boolean;
};

function isSliceValue<T extends ThemeKey>(slice: Theme[T], value: unknown) {
  return (
    (typeof value === 'string' || typeof value === 'number') &&
    slice.hasOwnProperty(value)
  );
}

export function baseParser<T extends ThemeKey, P extends Property = Property>({
  value,
  scale,
  property,
  failOnNotFound,
}: BaseParser<T, P>) {
  const slice = theme.getSlice(scale);
  if (slice && isSliceValue(slice, value)) {
    return { [property]: slice[value as any] };
  }

  if (failOnNotFound) {
    return {};
  }

  return { [property]: value };
}
