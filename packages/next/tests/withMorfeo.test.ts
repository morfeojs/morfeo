import * as MorfeoCompiler from '@morfeo/compiler';
import { withMorfeo } from '../src';

const MorfeoWebpackPluginSpy = jest.spyOn(
  MorfeoCompiler,
  'MorfeoWebpackPlugin',
);

describe('withMorfeo', () => {
  it('should inject the morfeo webpack plugin to the passed configuration', () => {
    const webpack = {
      plugins: [],
    };

    // @ts-expect-error
    const config = withMorfeo({ webpack });
    const webpackConfig = { plugins: [] };

    // @ts-ignore
    config.webpack(webpackConfig, {});

    expect(MorfeoWebpackPluginSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        babel: {
          presets: ['next/babel'],
        },
      }),
    );
  });

  it('should inject the additional babel configuration if passed', () => {
    const webpack = {
      plugins: [],
    };

    const config = withMorfeo(
      // @ts-expect-error
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

    expect(MorfeoWebpackPluginSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        babel: {
          presets: ['fake/preset', 'next/babel'],
        },
      }),
    );
  });

  it('should handle a function as webpack configuration', () => {
    const webpack = () => ({
      plugins: [],
    });

    const config = withMorfeo({ webpack });
    const webpackConfig = { plugins: [] };

    // @ts-ignore
    config.webpack(webpackConfig, {});

    expect(MorfeoWebpackPluginSpy).toHaveBeenCalled();
  });
});
