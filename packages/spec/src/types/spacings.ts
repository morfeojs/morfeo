import { spacingsMap } from '../properties';

export interface Spacings {
  '2xs': string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  '2xl': string;
  none: string;
}

export type Spacing = keyof Spacings;

type BaseSpacingProps = {
  [K in typeof spacingsMap[number]]: Spacing;
};

export interface SpacingProps extends BaseSpacingProps {}

export type SpacingProperty = keyof SpacingProps;
