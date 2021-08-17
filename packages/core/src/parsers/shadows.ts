import { ParserParams, SliceParsers } from '../types';
import {
  Radius,
  Shadow,
  ShadowProperty,
  shadowsProperties,
  Size,
  Spacing,
} from '@morfeo/spec';
import { theme } from '../theme';

type ShadowsParsers = SliceParsers<typeof shadowsProperties, ShadowProperty>;

function firstValid(...params: (string | number | undefined)[]) {
  for (const param of params) {
    if (param) {
      return param;
    }
  }

  return 0;
}

export function shadows({ value, property }: ParserParams<ShadowProperty>) {
  const config = theme.getValue('shadows', value as Shadow);
  if (!config) {
    return {};
  }

  const color = config.color
    ? theme.getSlice('colors')[config.color] || config.color
    : 'black';

  const { width, height } = config.offset || { width: 0, height: 0 };
  const parsedWidth = firstValid(
    theme.getValue('spacings', width as Spacing),
    theme.getValue('sizes', width as Size),
    width,
  );
  const parsedHeight = firstValid(
    theme.getValue('spacings', height as Spacing),
    theme.getValue('sizes', height as Size),
    height,
  );
  const radius = firstValid(
    theme.getValue('radii', config.radius as Radius),
    config.radius,
  );

  return {
    [property]: `${parsedWidth} ${parsedHeight} ${radius} ${color}`,
  };
}

export const shadowsParsers: ShadowsParsers = Object.keys(
  shadowsProperties,
).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: shadows,
  }),
  {} as ShadowsParsers,
);

shadowsParsers.shadow = ({ property, ...props }) =>
  shadows({ property: 'boxShadow', ...props });
