import { parsers, Style } from '@morfeo/core';
import preset from 'jss-preset-default';
import { CreateGenerateIdOptions, JssOptions, Plugin, Rule } from 'jss';
import { generateClassName } from '@morfeo/utils';

const defaultPreset = preset();

export const morfeoJSS: Plugin = {
  onProcessStyle(style) {
    return parsers.resolve(style as Style);
  },
};

function createGenerateId(options?: CreateGenerateIdOptions) {
  return (rule: Rule) => {
    // @ts-expect-error
    const style = rule.style;
    return generateClassName(style, options);
  };
}

/* istanbul ignore next */
const isProd =
  typeof process === 'object' && process.env
    ? process.env.NODE_ENV === 'production'
    : false;

export const morfeoJSSPreset: Partial<JssOptions> = {
  ...defaultPreset,

  createGenerateId,
  id: {
    minify: isProd,
  },
  plugins: [morfeoJSS, ...defaultPreset.plugins],
};
