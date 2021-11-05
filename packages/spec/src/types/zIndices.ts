import { zIndicesMap } from '../properties';

export interface ZIndices {
  none: string | number;
  lowest: string | number;
  lower: string | number;
  low: string | number;
  high: string | number;
  higher: string | number;
  highest: string | number;
}

export type ZIndex = keyof ZIndices;

type BaseZIndexProps = {
  [K in typeof zIndicesMap[number]]: ZIndex;
};

export interface ZIndexProps extends BaseZIndexProps {}

export type ZIndexProperty = keyof ZIndexProps;
