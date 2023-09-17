import { PropertyResolver } from '@morfeo/core';
import { isMultiThemeValue, resolveMultiThemeValue } from '../utils';
import { ColorSchema } from '../types';

export const multiThemeProperty: PropertyResolver = ({
  property,
  value,
  style,
  next,
}) => {
  if (!isMultiThemeValue(value)) {
    return;
  }

  const keys = Object.keys(value);
  return keys.reduce((acc, mode) => {
    const currentValue = next({
      property,
      value: value[mode],
      style: {
        ...style,
        [property]: value[mode],
      },
    });

    const preferredColorSchemeMedia = resolveMultiThemeValue(
      mode as ColorSchema,
    );

    return {
      ...acc,
      [preferredColorSchemeMedia]: currentValue,
    };
  }, {});
};
