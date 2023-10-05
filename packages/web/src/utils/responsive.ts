import { Theme, ThemeHandler } from '@morfeo/core';
import { parseNumber } from '@morfeo/utils';
import { BreakPoint, BreakPoints } from '../types';

export function isResponsive(
  breakpoints: Record<string, string>,
  value: any,
): value is object {
  if (typeof value === 'object' && breakpoints) {
    const keys = Object.keys(value);
    return keys.some(key => breakpoints[key] !== undefined);
  }

  return false;
}

function createMediaQueryResolver() {
  const mediaQueriesCache = new Map<BreakPoint, string>();

  function setMediaQuery(breakpoint: BreakPoint, mediaQuery: string) {
    mediaQueriesCache.set(breakpoint, mediaQuery);
    return mediaQuery;
  }

  function resolveMediaQuery(
    theme: ThemeHandler<Theme>,
    breakpoint: BreakPoint,
  ): string {
    if (mediaQueriesCache.has(breakpoint)) {
      return mediaQueriesCache.get(breakpoint) as string;
    }

    const breakPoints = theme.getSlice('breakpoints');
    const mediaQueries = theme.getSlice('mediaQueries');
    const hasCustomMediaQuery = !!mediaQueries[breakpoint];

    const breakPointsKeys = Object.keys(breakPoints).sort(
      (first, second) =>
        parseNumber(breakPoints[first]) - parseNumber(breakPoints[second]),
    );

    if (!hasCustomMediaQuery) {
      return setMediaQuery(
        breakpoint,
        `@media (min-width: ${breakPoints[breakpoint]})`,
      );
    }

    const mediaQuery = breakPointsKeys.reduce((acc, bp) => {
      return acc.replace(`{{${bp}}}`, breakPoints[bp]);
    }, mediaQueries[breakpoint] as string);

    return setMediaQuery(breakpoint, mediaQuery);
  }

  return resolveMediaQuery;
}

export const resolveMediaQuery = createMediaQueryResolver();
