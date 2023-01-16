import { shadowsMap } from '../properties';
import { BorderWidth } from './borders';
import { Color } from './colors';
import { Opacity } from './opacities';
import { Radius } from './radii';

export interface ShadowConfig {
  color?: Color;
  offset?: {
    width: BorderWidth;
    height: BorderWidth;
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
  [K in (typeof shadowsMap)[number]]: Shadow;
};

export interface ShadowProps extends BaseShadowProps {}

export type ShadowProperty = keyof ShadowProps;
