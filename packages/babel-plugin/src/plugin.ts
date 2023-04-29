import type { ConfigAPI, PluginObj } from '@babel/core';
import getVisitor from './visitor';
import { MorfeoBabelPluginOptions } from './types';
import { css } from './utils';

export default function morfeoBabelPlugin(
  _babel: ConfigAPI,
  options?: MorfeoBabelPluginOptions,
): PluginObj {
  if (options) {
    css.setOptions(options);
  }

  return {
    name: '@morfeo/babel-plugin',
    visitor: getVisitor(),
  };
}
