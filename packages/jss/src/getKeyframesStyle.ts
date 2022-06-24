import { morfeo, Style, ThemeName } from '@morfeo/core';

function getGetKeyFramesStyle() {
  const cache = new Map<ThemeName, Style>();

  return function getKeyFramesStyle(
    newTheme: any,
  ): Record<string, Style> | undefined {
    const { keyframes } = newTheme;
    if (!keyframes) {
      return undefined;
    }
    const keyframesKeys = Object.keys(keyframes);

    if (keyframesKeys.length === 0) {
      return undefined;
    }

    const currentTheme = morfeo.getCurrentTheme();
    if (cache.has(currentTheme)) {
      return cache.get(currentTheme);
    }

    const keyframesStyle = Object.keys(keyframes).reduce(
      (acc, key) => ({
        ...acc,
        [`@keyframes ${key}`]: keyframes[key],
      }),
      {},
    );

    cache.set(currentTheme, keyframesStyle);

    return keyframesStyle;
  };
}

export const getKeyFramesStyle = getGetKeyFramesStyle();
