import { parsers, Style } from '@morfeo/core';
import preset from 'jss-preset-default';
import { JssOptions, Plugin } from 'jss';

const defaultPreset = preset();

export const morfeoJSS: Plugin = {
  onProcessStyle(style) {
    return parsers.resolve(style as Style);
  },
};

export const morfeoJSSPreset: Partial<JssOptions> = {
  ...defaultPreset,
  plugins: [morfeoJSS, ...defaultPreset.plugins],
};
