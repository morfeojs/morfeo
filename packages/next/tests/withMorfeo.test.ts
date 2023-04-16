import { MorfeoWebpackPlugin } from '@morfeo/compiler';
import { withMorfeo } from '../src';

describe('withMorfeo', () => {
  it('should inject the morfeo webpack plugin to the passed configuration', () => {
    const webpack = jest.fn();

    const config = withMorfeo({ webpack });
    const webpackConfig = { plugins: [] };

    // @ts-ignore
    config.webpack(webpackConfig, {});

    expect(webpackConfig.plugins[0]).toEqual(
      MorfeoWebpackPlugin({
        babel: {
          presets: ['next/babel'],
        },
      }),
    );
  });

  it('should inject the additional babel configuration if passed', () => {
    const webpack = jest.fn();

    const config = withMorfeo(
      { webpack },
      {
        babel: {
          presets: ['fake/preset'],
        },
      },
    );
    const webpackConfig = { plugins: [] };

    // @ts-ignore
    config.webpack(webpackConfig, {});

    expect(webpackConfig.plugins[0]).toEqual(
      MorfeoWebpackPlugin({
        babel: {
          presets: ['fake/preset', 'next/babel'],
        },
      }),
    );
  });
});
