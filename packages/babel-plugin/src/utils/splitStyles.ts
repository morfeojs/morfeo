import { Style } from '@morfeo/web';
import { DYNAMIC_VALUE_TOKEN } from '../constants';

function isStyle(value: unknown): value is Style {
  return typeof value === 'object';
}

function isDefaultObject(
  value: Record<string, unknown>,
): value is { default: unknown } {
  return !!value.default;
}

export function splitStyles(object: Style): Style[] {
  const pairs = Object.entries(object);

  return pairs.reduce<Style[]>((acc, [key, value]) => {
    if (isStyle(value)) {
      const result = splitStyles(value);
      return [
        ...acc,
        ...result.map(curr => {
          if (isDefaultObject(curr)) {
            return { [key]: curr.default } as Style;
          }

          return { [key]: curr };
        }),
      ];
    }

    // Dynamic themeable values are skipped since they're resolved in another process
    if (value === DYNAMIC_VALUE_TOKEN) {
      return acc;
    }

    return [...acc, { [key]: value }] as Style[];
  }, []);
}
