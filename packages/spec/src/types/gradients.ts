import { gradientsMap } from '../properties';
import { Color } from './colors';

export type GradientCoordinate = {
  x: number;
  y: number;
};

export type GradientKind = 'linear' | 'radial';

export interface ReactNativeGradientConfig {
  end: GradientCoordinate;
  start: GradientCoordinate;
  colors: Color[];
  locations?: number[];
  angle?: number;
  useAngle?: boolean;
  angleCenter?: GradientCoordinate;
}

export interface GradientConfig {
  end?: number;
  kind?: GradientKind;
  start?: number;
  angle?: number;
  colors: Color[];
}

export interface Gradients {
  primary: GradientConfig;
  secondary: GradientConfig;
}

export type Gradient = keyof Gradients;

type BaseGradientProps = {
  [K in (typeof gradientsMap)[number]]: Gradient;
};

export interface GradientProps extends BaseGradientProps {}

export type GradientProperty = keyof GradientProps;
