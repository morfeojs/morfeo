import { shadowsMap } from '../properties';
import { Color } from './colors';
import { Opacity } from './opacities';
import { Radius } from './radii';
import { Size } from './sizes';

export interface ShadowConfig {
  color?: Color;
  offset?: {
    width: Size;
    height: Size;
  };
  radius?: Radius;
  opacity?: Opacity;
}

export interface Shadows {
  none: ShadowConfig;
  light: ShadowConfig;
  strong: ShadowConfig;
  medium: ShadowConfig;
}

export type Shadow = keyof Shadows;

type BaseShadowProps = {
  [K in typeof shadowsMap[number]]: Shadow;
};

export interface ShadowProps extends BaseShadowProps {}

export type ShadowProperty = keyof ShadowProps;
