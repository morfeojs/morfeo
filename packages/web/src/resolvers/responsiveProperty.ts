import { PropertyResolver } from '@morfeo/core';
import { isResponsive, resolveMediaQuery } from '../utils';
import { BreakPoint } from '../types';

export const responsiveProperty: PropertyResolver = ({
  property,
  value,
  style,
  next,
  theme,
}) => {
  if (!isResponsive(theme.getSlice('breakpoints'), value)) {
    return;
  }

  const keys = Object.keys(value);

  return keys.reduce((acc, breakpoint) => {
    const currentValue = next({
      property,
      value: value[breakpoint],
      style: {
        ...style,
        [property]: value[breakpoint],
      },
    });

    if (breakpoint === 'default') {
      return {
        ...acc,
        ...currentValue,
      };
    }

    const mediaQuery = resolveMediaQuery(theme, breakpoint as BreakPoint);

    return {
      ...acc,
      [mediaQuery]: {
        ...acc[mediaQuery],
        ...currentValue,
      },
    };
  }, {});
};
