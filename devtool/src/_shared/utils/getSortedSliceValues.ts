import { getValueAndUnit } from 'polished';

export function getSortedSliceValues<T extends Record<string, any>>(
  slice: T,
): (keyof T)[] {
  const keys = Object.keys(slice);

  return keys.sort((first, second) => {
    const [firstValue] = getValueAndUnit(slice[first]);
    const [secondValue] = getValueAndUnit(slice[second]);
    if (typeof firstValue !== 'number') {
      return Infinity;
    }

    if (typeof secondValue !== 'number') {
      return -Infinity;
    }

    return firstValue - secondValue;
  });
}
