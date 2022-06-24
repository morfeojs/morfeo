import { Style } from '@morfeo/core';

type KeyFrameKey = `${number}%` | 'from' | 'to';

export type KeyFrameConfig = {
  [K in KeyFrameKey]?: Style;
};

export interface KeyFrames {
  default: KeyFrameConfig;
}

export type KeyFrame = keyof KeyFrames;

type AnimationFillMode =
  | 'none'
  | 'forwards'
  | 'backwards'
  | 'both'
  | 'initial'
  | 'inherit';

type AnimationDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse'
  | 'initial'
  | 'inherit';

type AnimationTimingFunction =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'step-start'
  | 'step-end'
  | `steps(${number}, ${'start' | 'end'})`
  | `steps(${number})`
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`
  | 'initial'
  | 'inherit';

type AnimationPlayState =
  | 'running'
  | 'paused'
  | 'inherit'
  | 'revert'
  | 'revert-layer'
  | 'unset';

type AnimationIterationCount =
  | number
  | 'infinite'
  | 'initial'
  | 'inherit'
  | 'revert'
  | 'revert-layer'
  | 'unset';

export interface AnimationConfig {
  name: KeyFrame;
  delay?: number;
  fillMode?: AnimationFillMode;
  duration?: number;
  direction?: AnimationDirection;
  timingFunction?: AnimationTimingFunction;
  iterationCount?: AnimationIterationCount;
  playState?: AnimationPlayState;
}

export interface Animations {
  default: AnimationConfig;
}

export type Animation = keyof Animations;

export interface AnimationProperties {
  animation: Animation;
}

export type AnimationProperty = keyof AnimationProperties;

export type AnimationsParserParams<
  P extends AnimationProperty = AnimationProperty,
> = {
  value: Animation;
  property: P;
};

export type AnimationParser<P extends AnimationProperty = AnimationProperty> = (
  params: AnimationsParserParams<P>,
) => any;
