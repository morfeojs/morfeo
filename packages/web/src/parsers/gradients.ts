import {
  Parser,
  Gradient,
  ThemeHandler,
  ParserParams,
  GradientConfig,
  ParsersContext,
  GradientProperty,
  ResolvedStyle,
} from '@morfeo/core';

function getGradientPercentages({
  start = 0,
  end = 100,
  colors,
  theme,
}: GradientConfig & { theme: ThemeHandler }) {
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

function getGradientBackground(value: Gradient, theme: ThemeHandler) {
  const config = theme.getValue('gradients', value);
  const { angle = 180, kind } = config;
  const property = getGradientProperty(config);
  const percentages = getGradientPercentages({ ...config, theme });
  const gradientAngle = kind === 'radial' ? 'circle' : `${angle}deg`;

  return `${property}(${gradientAngle}, ${percentages})`;
}

function guard(callback: Parser<GradientProperty>) {
  return function (params: ParserParams<GradientProperty>): ResolvedStyle {
    const config = params.theme.getValue('gradients', params.value as Gradient);
    if (!config) {
      return { background: params.value } as ResolvedStyle;
    }

    return callback(params);
  };
}

function gradient({ value, theme }: ParserParams<GradientProperty>) {
  const bg = getGradientBackground(value as Gradient, theme);
  return {
    background: bg,
  };
}

function textGradient(params: ParserParams<GradientProperty>) {
  const baseStyle = guard(gradient)(params);
  return {
    ...baseStyle,
    backgroundClip: 'text',
    textFillColor: 'transparent',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  };
}

export const gradientParsers: Partial<ParsersContext> = {
  gradient: guard(gradient),
  bgGradient: guard(gradient),
  textGradient: textGradient,
};
