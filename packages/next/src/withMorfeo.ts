import { MorfeoWebpackPlugin } from '@morfeo/webpack';
import type { MorfeoWebpackPluginOptions } from '@morfeo/webpack';
import { NextConfig } from 'next';

export function withMorfeo(
  nextConfig: NextConfig,
  pluginOptions?: MorfeoWebpackPluginOptions,
): NextConfig {
  return {
    ...nextConfig,
    webpack(config, options) {
      config.plugins.unshift(
        new MorfeoWebpackPlugin({
          ...pluginOptions,
          babel: {
            ...pluginOptions?.babel,
            presets: [...(pluginOptions?.babel?.presets || []), 'next/babel'],
          },
        }),
      );

      if (typeof nextConfig.webpack === 'function') {
        config = nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}
