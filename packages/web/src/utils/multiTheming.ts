import { ColorSchema } from '../types';

export function isMultiThemeValue(
  value: any,
): value is { light?: any; dark?: any } {
  if (value && typeof value === 'object') {
    return !!value.light || !!value.dark;
  }

  return false;
}

export function resolveMultiThemeValue(mode: ColorSchema) {
  return `@media (prefers-color-scheme: ${mode})`;
}
