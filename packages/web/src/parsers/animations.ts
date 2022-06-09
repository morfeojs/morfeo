import { theme } from '@morfeo/core';
import {
  AnimationConfig,
  AnimationParser,
  AnimationProperty,
  AnimationsParserParams,
} from '../types';

type AnimationsParser = {
  [K in AnimationProperty]: AnimationParser<K>;
};

export function animations({ value }: AnimationsParserParams) {
  const animationConfig = theme.getValue('animations', value);

  if (!animationConfig) {
    return {};
  }

  const orderedAnimationProperties: (keyof AnimationConfig)[] = [
    'name',
    'duration',
    'timingFunction',
    'delay',
    'iterationCount',
    'direction',
    'fillMode',
    'playState',
  ];

  const animation = orderedAnimationProperties.reduce((acc, curr) => {
    if (animationConfig[curr]) {
      const prefix = acc ? `${acc} ` : acc;
      const value =
        typeof animationConfig[curr] === 'number'
          ? `${animationConfig[curr]}s`
          : animationConfig[curr];

      return `${prefix}${value}`;
    }
    return acc;
  }, '');

  return {
    animation,
  };
}

export const animationsParses: AnimationsParser = {
  animation: animations,
};
