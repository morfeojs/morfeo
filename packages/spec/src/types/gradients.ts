import { gradientsMap } from '../properties';
import { Theme } from './theme';

export type GradientCoordinate = {
  x: number;
  y: number;
};

export type GradientKind = 'linear' | 'radial';

export interface ReactNativeGradientConfig {
  end: GradientCoordinate;
  start: GradientCoordinate;
  colors: string[];
  locations?: number[];
  angle?: number;
  useAngle?: boolean;
  angleCenter?: GradientCoordinate;
}

export interface GradientConfig<T extends Partial<Theme>> {
  end?: number;
  kind?: GradientKind;
  start?: number;
  angle?: number;
  colors: (keyof T['colors'])[];
}

export type Gradient<T extends Partial<Theme>> = keyof T['gradients'];

type BaseGradientProps = {
  [K in (typeof gradientsMap)[number]]: Gradient<Theme>;
};

export interface GradientProps extends BaseGradientProps {}

export type GradientProperty = keyof GradientProps;
