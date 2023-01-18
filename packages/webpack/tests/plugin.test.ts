import { Compiler } from 'webpack';
import { MorfeoWebpackPlugin } from '../src';

describe('MorfeoWebpackPlugin', () => {
  let compiler: Compiler;

  beforeEach(() => {
    // @ts-expect-error
    compiler = {
      options: {
        plugins: [],
        module: { rules: [] },
      },
    } as Compiler;
  });

  it('should set the babel options on the loader', () => {
    const babelOptions = {
      presets: ['test/preset'],
    };
    const plugin = new MorfeoWebpackPlugin({ babel: babelOptions });
    plugin.apply(compiler);
    // @ts-expect-error
    const rules = compiler.options.module.rules.map(r => r.use[0].options);
    expect(rules).toContainEqual({ babel: babelOptions });
  });
});
