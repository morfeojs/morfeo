import { zIndicesMap } from '../properties';

export interface ZIndices {
  none: string | number;
  light: string | number;
  strong: string | number;
  medium: string | number;
}

export type ZIndex = keyof ZIndices;

type BaseZIndexProps = {
  [K in typeof zIndicesMap[number]]: ZIndex;
};

export interface ZIndexProps extends BaseZIndexProps {}

export type ZIndexProperty = keyof ZIndexProps;
