import { ParserParams, SliceParsers } from '../types';
import { ShadowProperty, shadowsProperties } from '@morfeo/spec';
import { theme } from '../theme';

type ShadowsParsers = SliceParsers<typeof shadowsProperties, ShadowProperty>;

function removePixels(value?: string | number): number {
  if (typeof value === 'number' || value === undefined) {
    return value || 0;
  }
  const [number] = value.split('px');
  return Number.parseInt(number, 10);
}

export function shadows({ value, property }: ParserParams<ShadowProperty>) {
  const slice = theme.getSlice('shadows');
  const config = slice[value as ShadowProperty];
  if (!config) {
    return {};
  }

  const color = config.color
    ? theme.getSlice('colors')[config.color] || config.color
    : 'black';

  const { width, height } = config.offset || { width: 0, height: 0 };
  const parsedWidth = removePixels(
    theme.getSlice('space')[width] || theme.getSlice('sizes')[width] || width,
  );
  const parsedHeight = removePixels(
    theme.getSlice('space')[height] ||
      theme.getSlice('sizes')[height] ||
      height,
  );
  const radius = removePixels(config.radius || 0);

  return {
    [property]: `${parsedWidth}px ${parsedHeight}px ${radius}px ${color}`,
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
