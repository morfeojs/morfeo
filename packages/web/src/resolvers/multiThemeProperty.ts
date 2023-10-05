import { PropertyResolver, PropertyResolverParams, Theme } from '@morfeo/core';
import { isMultiThemeValue } from '../utils';
import { ColorScheme } from '../types';

export const multiThemeProperty: PropertyResolver = ({
  property,
  value,
  style,
  theme,
  next,
}) => {
  if (!isMultiThemeValue(theme.getSlice('colorSchemes') as any, value)) {
    return;
  }

  const keys = Object.keys(value as Record<string, any>);
  return keys.reduce((acc, scheme) => {
    const currentValue = next({
      property,
      value: value?.[scheme],
      style: {
        ...style,
        [property]: value?.[scheme],
      },
    });

    const preferredColorSchemeMedia = theme.getValue(
      'colorSchemes',
      scheme as any,
    );

    return {
      ...acc,
      [preferredColorSchemeMedia]: currentValue,
    };
  }, {});
};
