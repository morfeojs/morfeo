import {
  morfeo,
  Style,
  Shadows,
  ParserParams,
  ShadowProperty,
} from '@morfeo/core';

function getFirstValidNumber(...numbers: number[]): number {
  for (let number of numbers) {
    if (number === undefined) {
      continue;
    }

    return number;
  }
  return 0;
}

export function shadowOffset({ value, theme }: ParserParams<any>) {
  const { width, height } = value || { width: 0, height: 0 };
  const parsedWidth = getFirstValidNumber(
    theme.getValue('sizes', width),
    theme.getValue('spacings', width),
    width,
  );
  const parsedHeight = getFirstValidNumber(
    theme.getValue('sizes', height),
    theme.getValue('spacings', height),
    height,
  );

  if (!parsedHeight && !parsedWidth) {
    return {};
  }

  return {
    shadowOffset: {
      height: parsedHeight,
      width: parsedWidth,
    },
  };
}

export function shadows({ value, theme }: ParserParams<ShadowProperty>) {
  const { color, offset, opacity, radius, elevation } =
    theme.getValue('shadows', value as keyof Shadows) || {};

  return morfeo.parsers.resolve({
    ...(elevation ? { elevation } : {}),
    ...(color ? { shadowColor: color } : {}),
    ...(offset ? { shadowOffset: offset } : {}),
    ...(radius ? { shadowRadius: radius } : {}),
    ...(opacity ? { shadowOpacity: opacity } : {}),
  } as Style);
}
