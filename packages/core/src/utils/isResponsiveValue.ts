import { theme } from '../theme';

export function isResponsiveValue(value: any): value is object {
  const breakpoints = theme.getSlice('breakpoints');
  if (typeof value === 'object' && breakpoints) {
    const keys = Object.keys(value);
    return keys.some(key => breakpoints[key] !== undefined);
  }

  return false;
}
