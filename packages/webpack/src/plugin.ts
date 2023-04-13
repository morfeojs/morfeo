import { CleanPlugin } from 'webpack';
import type { Compiler } from 'webpack';
import type { MorfeoWebpackPluginOptions } from './types';

export class MorfeoWebpackPlugin extends CleanPlugin {
  loaderOptions: MorfeoWebpackPluginOptions;

  constructor(options: MorfeoWebpackPluginOptions) {
    super(options);
    this.loaderOptions = options;
  }

  applyMorfeoLoader(compiler: Compiler) {
    compiler.options.module.rules.unshift({
      test: /\.(tsx|ts|js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('./loader'),
          options: this.loaderOptions,
        },
      ],
    });
  }

  apply(compiler: Compiler) {
    this.applyMorfeoLoader(compiler);
  }
}
