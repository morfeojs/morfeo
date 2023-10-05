import { colorProperties, ColorProperty, Color, Theme } from '@morfeo/spec';
import { ParserParams, SliceParsers } from '../../types';
import { baseParser } from '../baseParser';
import { placeholderParser } from './placeholderParsers';

export function parseColor<T extends Partial<Theme> = Partial<Theme>>({
  value,
  theme,
  property,
  ...rest
}: ParserParams<T, ColorProperty>) {
  const color = theme.getValue('colors', value as keyof T['colors']) as string;

  if (color && color.indexOf('$') === 0) {
    return placeholderParser({ value, property, color, theme, ...rest });
  }

  return baseParser({
    value,
    theme,
    property,
    scale: 'colors',
    ...rest,
  });
}

const baseColorsParsers = Object.keys(colorProperties).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: parseColor,
  }),
  {},
);

export const colorsParsers = {
  ...baseColorsParsers,
  bg: <T extends Partial<Theme> = Partial<Theme>>(
    props: ParserParams<T, ColorProperty>,
  ) => parseColor<T>({ ...props, property: 'backgroundColor' }),
};
