import { BreakPoint } from '@morfeo/spec';
import { theme } from '../theme';

export function resolveMediaQuery(breakpoint: BreakPoint) {
  const breakPoints = theme.getSlice('breakpoints');
  const mediaQueries = theme.getSlice('mediaQueries');
  let mediaQuery = mediaQueries[breakpoint];
  if (!mediaQuery) {
    return `@media screen (min-width: ${breakPoints[breakpoint]})`;
  }

  const breakPointsKey = Object.keys(breakPoints);
  breakPointsKey.forEach(bp => {
    mediaQuery = mediaQuery.replace(`{{${bp}}}`, breakPoints[bp]);
  });

  return mediaQuery;
}
