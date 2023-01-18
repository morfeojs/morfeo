import type { ConfigAPI, PluginObj } from '@babel/core';
import getVisitor from './visitor';

export default function morfeoBabelPlugin(
  _babel: ConfigAPI,
  _options: any,
): PluginObj {
  return {
    name: '@morfeo/babel-plugin',
    visitor: getVisitor(),
  };
}
