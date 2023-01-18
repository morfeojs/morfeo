import { CleanPlugin, Compiler } from 'webpack';
import virtualModules from './virtualModules';
import { MorfeoWebpackPluginOptions } from './types';

export class MorfeoWebpackPlugin extends CleanPlugin {
  loaderOptions: MorfeoWebpackPluginOptions;

  constructor(options: MorfeoWebpackPluginOptions) {
    super(options);
    this.loaderOptions = options;
  }

  apply(compiler: Compiler): void {
    compiler.options.plugins.push(virtualModules.instance);
    compiler.options.module.rules.push({
      test: /\.(tsx|ts|js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('./loader'),
          options: {
            babel: this.loaderOptions.babel,
          },
        },
      ],
    });
  }
}
