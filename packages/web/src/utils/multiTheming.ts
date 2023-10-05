import { ColorScheme } from '../types';

export function isMultiThemeValue(
  schemes: Record<string, string>,
  value: any,
): value is { [K in ColorScheme]?: any } {
  if (value && typeof value === 'object') {
    return Object.keys(schemes).some(scheme => value[scheme]);
  }

  return false;
}
