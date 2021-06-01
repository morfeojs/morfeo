import {
  theme,
  Gradient,
  ParserParams,
  SliceParsers,
  GradientConfig,
  gradientProperties,
  GradientProperty,
} from '@morfeo/core';

type GradientsParsers = SliceParsers<
  typeof gradientProperties,
  keyof typeof gradientProperties
>;

function getGradientPercentages({
  start = 0,
  end = 100,
  colors = [],
}: GradientConfig) {
  const { length } = colors;
  const diff = end - start;
  const part = diff / (length - 1 > 0 ? length - 1 : 1);
  let percentage = 0;

  return colors.reduce((prev, colorKey) => {
    const color = theme.getValue('colors', colorKey) || colorKey;
    const current = `${color} ${start + percentage}%`;
    percentage += part;
    return prev ? `${prev}, ${current}` : current;
  }, '');
}

function getGradientProperty({ kind }: GradientConfig) {
  if (kind === 'radial') {
    return 'radial-gradient';
  }

  return 'linear-gradient';
}

function getGradientBackground(value: Gradient) {
  const config = theme.getValue('gradients', value) || {};
  const { angle = 180, kind } = config;
  const property = getGradientProperty(config);
  const percentages = getGradientPercentages(config);
  const gradientAngle = kind === 'radial' ? 'circle' : `${angle}deg`;

  if (!percentages) {
    return undefined;
  }

  return `${property}(${gradientAngle}, ${percentages})`;
}

function gradient({ value }: ParserParams<GradientProperty>) {
  const bg = getGradientBackground(value as any);
  return {
    background: bg,
  };
}

function textGradient({ value }: ParserParams<GradientProperty>) {
  const baseStyle = gradient({ value } as any);
  return {
    ...baseStyle,
    backgroundClip: 'text',
    textFillColor: 'transparent',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  };
}

export const gradientParsers: GradientsParsers = {
  gradient: gradient,
  bgGradient: gradient,
  textGradient: textGradient,
};
