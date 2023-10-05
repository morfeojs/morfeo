import { shadowsMap } from '../properties';
import { Theme } from './theme';

export interface ShadowConfig<T extends Partial<Theme>> {
  color?: keyof T['colors'];
  offset?: {
    width: keyof T['borderWidths'];
    height: keyof T['borderWidths'];
  };
  radius?: keyof T['radii'];
  opacity?: keyof T['opacities'];
}

export type Shadow<T extends Partial<Theme>> = keyof T['shadows'];

type BaseShadowProps = {
  [K in (typeof shadowsMap)[number]]: Shadow<Theme>;
};

export interface ShadowProps extends BaseShadowProps {}

export type ShadowProperty = keyof ShadowProps;
