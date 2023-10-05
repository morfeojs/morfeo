import { PropertyResolver } from '@morfeo/core';
import { isResponsive, resolveMediaQuery } from '../utils';

export const responsiveProperty: PropertyResolver = ({
  property,
  value,
  style,
  next,
  theme,
}) => {
  if (!isResponsive(theme.getSlice('breakpoints') as any, value)) {
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

    const mediaQuery = resolveMediaQuery(theme as any, breakpoint as any);

    return {
      ...acc,
      [mediaQuery]: {
        ...acc[mediaQuery],
        ...currentValue,
      },
    };
  }, {});
};
