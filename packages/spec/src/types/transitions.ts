import { transitionsMap } from '../properties';

export interface Transitions {
  none: string | number;
  light: string | number;
  strong: string | number;
  medium: string | number;
}

export type Transition = keyof Transitions;

type BaseTransitionProps = {
  [K in typeof transitionsMap[number]]: Transition;
};

export interface TransitionProps extends BaseTransitionProps {}

export type TransitionProperty = keyof TransitionProps;
