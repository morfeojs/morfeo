import { MorfeoWebpackPlugin } from '@morfeo/compiler';
import type { MorfeoPluginOptions } from '@morfeo/compiler';
import { NextConfig } from 'next';

export function withMorfeo(
  nextConfig: NextConfig,
  pluginOptions?: MorfeoPluginOptions,
): NextConfig {
  return {
    ...nextConfig,
    webpack(config, options) {
      config.plugins.unshift(
        MorfeoWebpackPlugin({
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
