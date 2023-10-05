import {
  Theme,
  Parser,
  Gradient,
  ThemeHandler,
  ParserParams,
  ResolvedStyle,
  GradientConfig,
  ParsersContext,
  GradientProperty,
} from '@morfeo/core';

function getGradientPercentages<T extends Partial<Theme>>({
  start = 0,
  end = 100,
  colors,
  theme,
}: GradientConfig<T> & { theme: ThemeHandler<T> }) {
  const { length } = colors;
  const diff = end - start;
  const part = diff / (length - 1 > 0 ? length - 1 : 1);
  let percentage = 0;

  return colors.reduce((prev, colorKey) => {
    const color = (theme.getValue('colors', colorKey) || colorKey) as string;
    const current = `${color} ${start + percentage}%`;
    percentage += part;
    return prev ? `${prev}, ${current}` : current;
  }, '');
}

function getGradientProperty<T extends Partial<Theme>>({
  kind,
}: GradientConfig<T>) {
  if (kind === 'radial') {
    return 'radial-gradient';
  }

  return 'linear-gradient';
}

function getGradientBackground<T extends Partial<Theme>>(
  value: Gradient<T>,
  theme: ThemeHandler<T>,
) {
  const config = theme.getValue('gradients', value) as GradientConfig<T>;
  const { angle = 180, kind } = config;
  const property = getGradientProperty(config);
  const percentages = getGradientPercentages({ ...config, theme });
  const gradientAngle = kind === 'radial' ? 'circle' : `${angle}deg`;

  return `${property}(${gradientAngle}, ${percentages})`;
}

function guard<T extends Partial<Theme>>(
  callback: Parser<T, GradientProperty>,
) {
  return function (params: ParserParams<T, GradientProperty>): ResolvedStyle {
    const config = params.theme.getValue(
      'gradients',
      params.value as Gradient<T>,
    );
    if (!config) {
      return { background: params.value } as ResolvedStyle;
    }

    return callback(params);
  };
}

function gradient<T extends Partial<Theme>>({
  value,
  theme,
}: ParserParams<T, GradientProperty>) {
  const bg = getGradientBackground(value as Gradient<T>, theme);
  return {
    background: bg,
  };
}

function textGradient<T extends Partial<Theme>>(
  params: ParserParams<T, GradientProperty>,
) {
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
