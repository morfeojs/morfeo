import { ParserParams } from '../../types';
import { Color, ColorProperty } from '@morfeo/spec';
import { baseParser } from '../baseParser';

export const placeholderParser = ({
  value,
  theme,
  color,
  property,
  ...rest
}: ParserParams<ColorProperty> & { color: string }) => {
  const originalValue = color.substring(1);
  const originalAssignedStyle = theme.getValue(
    'colors',
    originalValue as Color,
  );

  if (!originalAssignedStyle) {
    return {
      [property]: value,
    };
  }

  return baseParser({
    ...rest,
    theme,
    value: originalValue as Color,
    property,
    scale: 'colors',
  });
};
