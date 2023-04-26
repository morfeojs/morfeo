import { parseNumber } from '@morfeo/utils';
import { BreakPoint, ResponsiveValue, Style, theme } from '@morfeo/web';

function getResponsiveValue(
  style: Style,
): ResponsiveValue<unknown> | undefined {
  const keys = Object.keys(style);
  let responsiveValue: ResponsiveValue<unknown> | undefined = undefined;

  keys.forEach(key => {
    const value = style[key];
    if (typeof value !== 'object') {
      return;
    }

    if (theme.isResponsive(value)) {
      responsiveValue = value;
      return;
    }

    responsiveValue = getResponsiveValue(value);
  });

  return responsiveValue;
}

function getBreakpoint(value?: ResponsiveValue<unknown>) {
  if (!value) {
    return 0;
  }

  const breakpoints = theme.getSlice('breakpoints');
  const breakpoint = Object.keys(breakpoints).find(
    bp => !!value[bp],
  ) as BreakPoint;
  return parseNumber(breakpoints[breakpoint]);
}

/**
 * Media queries needs to be properly sorted because otherwise they can override themselves
 */
export function orderStyles(styles: Style[]) {
  return styles.sort((first, second) => {
    const firstResponsiveValue = getResponsiveValue(first);
    const secondResponsiveValue = getResponsiveValue(second);

    return (
      getBreakpoint(firstResponsiveValue) - getBreakpoint(secondResponsiveValue)
    );
  });
}
