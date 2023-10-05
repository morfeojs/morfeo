import { ParserParams } from '../types';
import {
  ShadowProperty,
  shadowsProperties,
  Theme,
  ShadowConfig,
} from '@morfeo/spec';

function firstValid(...params: (string | number | undefined)[]) {
  for (const param of params) {
    if (param) {
      return param;
    }
  }

  return 0;
}

export function shadows<T extends Partial<Theme> = Partial<Theme>>({
  value,
  theme,
  property,
}: ParserParams<T, ShadowProperty>) {
  const config = theme.getValue(
    'shadows',
    value as keyof T['shadows'],
  ) as ShadowConfig<T>;

  if (!config) {
    return {
      [property]: value,
    };
  }

  const color = config.color
    ? theme.getSlice('colors')?.[config.color] || config.color
    : 'black';

  const { width, height } = config.offset || { width: 0, height: 0 };
  const parsedWidth = firstValid(
    theme.getValue('borderWidths', width as keyof T['borderWidths']) as string,
    width as string,
  );
  const parsedHeight = firstValid(
    theme.getValue('borderWidths', height as keyof T['borderWidths']) as string,
    height as string,
  );
  const radius = firstValid(
    theme.getValue('radii', config.radius as keyof T['radii']) as string,
    config.radius as string,
  );

  return {
    [property]: `${parsedWidth} ${parsedHeight} ${radius} ${color as string}`,
  };
}

export const shadowsParsers = {
  ...Object.keys(shadowsProperties).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: shadows,
    }),
    {},
  ),
  shadow: ({ property, ...props }) =>
    shadows({ property: 'boxShadow', ...props } as any),
};
