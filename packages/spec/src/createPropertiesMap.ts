import { ThemeKey } from './types';

type PropertiesMap<P extends readonly string[], T extends ThemeKey> = {
  [K in P[number]]: T;
};

export function createPropertiesMap<
  P extends readonly string[],
  T extends ThemeKey
>(properties: P, scale: T) {
  return properties.reduce((acc, property) => {
    return { ...acc, [property]: scale };
  }, {}) as PropertiesMap<P, T>;
}
