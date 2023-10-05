import { ParserParams } from '../../types';
import { ColorProperty, Theme } from '@morfeo/spec';
import { baseParser } from '../baseParser';

export function placeholderParser<T extends Partial<Theme>>({
  value,
  theme,
  color,
  property,
  ...rest
}: ParserParams<T, ColorProperty> & { color: string }) {
  const originalValue = color.substring(1);
  const originalAssignedStyle = theme.getValue(
    'colors',
    originalValue as keyof T['colors'],
  );

  if (!originalAssignedStyle) {
    return {
      [property]: value,
    };
  }

  return baseParser({
    ...rest,
    theme,
    value: originalValue,
    property,
    scale: 'colors',
  });
}
