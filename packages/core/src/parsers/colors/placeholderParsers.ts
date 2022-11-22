import { ParserParams } from '../../types';
import { Color, ColorProperty } from '@morfeo/spec';
import { theme } from '../../theme';
import { baseParser } from '../baseParser';

export const placeholderParser = ({
  value,
  property,
  color,
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
      value: originalValue as Color,
      property: property === 'bg' ? 'backgroundColor' : property,
      scale: 'colors',
    });
};