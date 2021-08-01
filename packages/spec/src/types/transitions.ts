import { transitionsMap } from '../properties';

export interface Transitions {
  none: string;
  slow: string;
  medium: string;
  fast: string;
}

export type Transition = keyof Transitions;

type BaseTransitionProps = {
  [K in typeof transitionsMap[number]]: Transition;
};

export interface TransitionProps extends BaseTransitionProps {}

export type TransitionProperty = keyof TransitionProps;
