import { Theme, useTheme } from '@morfeo/react';
import { THEME_KEYS, COMING_SOON_SLICES } from '../constants';
import { SliceStatus, SliceWithStatus } from '../types';

function getSortedSlices(theme: Theme) {
  const slices: SliceWithStatus[] = THEME_KEYS.map(slice => {
    const config = theme[slice];
    const values = Object.keys(config || {}).length;
    const status = values > 0 ? SliceStatus.ACTIVE : SliceStatus.INACTIVE;
    return {
      name: slice,
      values,
      status: COMING_SOON_SLICES.includes(slice)
        ? SliceStatus.COMING_SOON
        : status,
    };
  });

  const sortedSlices = slices.sort((first, second) => {
    if (first.status === SliceStatus.INACTIVE) {
      return Infinity;
    }

    if (second.status === SliceStatus.INACTIVE) {
      return -Infinity;
    }

    if (first.status === SliceStatus.COMING_SOON) {
      return slices.length;
    }

    if (second.status === SliceStatus.COMING_SOON) {
      return -slices.length;
    }

    return first.name.localeCompare(second.name);
  });

  return sortedSlices || [];
}

export function useSlicesWithStatus() {
  const theme = useTheme();
  const slices = getSortedSlices(theme);

  return slices;
}
