import { ShadowConfig } from './shadows';
import { BorderConfig } from './borders';
import { GradientConfig } from './gradients';
import { ComponentConfig } from './components';

export interface CustomTheme {}

type BaseTheme = {
  radii: Record<string, string>;
  sizes: Record<string, string>;
  fonts: Record<string, string>;
  colors: Record<string, string>;
  shadows: Record<string, ShadowConfig<BaseTheme>>;
  borders: Record<string, BorderConfig>;
  spacings: Record<string, string>;
  zIndices: Record<string, string | number>;
  fontSizes: Record<string, string>;
  gradients: Record<string, GradientConfig<BaseTheme>>;
  opacities: Record<string, string | number>;
  fontWeights: Record<string, string>;
  lineHeights: Record<string, string>;
  transitions: Record<string, string>;
  borderWidths: Record<string, string>;
  letterSpacings: Record<string, string>;
  components: Record<string, ComponentConfig<any>>;
} & CustomTheme;

export interface Theme extends BaseTheme {}

export type ThemeKey<T extends Theme = Theme> = keyof T;
