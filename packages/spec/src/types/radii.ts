import { radiiMap } from '../properties';

export type Radii = {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  none: string;
  round: string;
};

export type Radius = keyof Radii;

type BaseRadiusProps = {
  [K in typeof radiiMap[number]]: Radius;
};

export interface RadiusProps extends BaseRadiusProps {}

export type RadiusProperty = keyof RadiusProps;
