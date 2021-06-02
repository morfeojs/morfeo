import { radii } from './radii';
import { colors } from './colors';
import { gradients } from './gradients';
import { sizes, spaces } from './sizes';
import { components } from './components';
import { shadows } from './shadows';

export * from './sizes';
export * from './radii';
export * from './colors';
export * from './gradients';
export * from './components';

export const all = [
  colors,
  sizes,
  radii,
  spaces,
  shadows,
  gradients,
  components,
];
