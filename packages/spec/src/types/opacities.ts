import { opacitiesMap } from '../properties';

export interface Opacities {
  none: string | number;
  light: string | number;
  strong: string | number;
  medium: string | number;
}

export type Opacity = keyof Opacities;

type BaseOpacityProps = {
  [K in (typeof opacitiesMap)[number]]: Opacity;
};

export interface OpacityProps extends BaseOpacityProps {}

export type OpacityProperty = keyof OpacityProps;
