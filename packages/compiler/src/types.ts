import type { TransformOptions } from '@babel/core';
import { MorfeoBabelPluginOptions } from '@morfeo/babel-plugin';

export type MorfeoPluginOptions = MorfeoBabelPluginOptions & {
  babel?: TransformOptions;
};
