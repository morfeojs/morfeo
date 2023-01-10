import type { TransformOptions } from '@babel/core';

export type MorfeoWebpackPluginOptions = {
  babel: TransformOptions;
} & {
  dry?: boolean;
  keep?: string | RegExp | ((filename: string) => boolean);
};
