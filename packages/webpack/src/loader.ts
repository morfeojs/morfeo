import * as path from 'node:path';
import * as babel from '@babel/core';
import type { TransformOptions } from '@babel/core';
import morfeoBabelPlugin from '@morfeo/babel-plugin';
import type { LoaderContext } from 'webpack';
import type { MorfeoWebpackPluginOptions } from './types';
import { MORFEO_CSS_PATH, writer } from './utils';

export default function morfeoLoader(
  this: LoaderContext<MorfeoWebpackPluginOptions>,
  input: string,
  inputSourceMap?: TransformOptions['inputSourceMap'],
) {
  const options = this.getOptions();

  if (!input.includes('@morfeo/core') || !input.includes('morfeo.parse')) {
    return this.callback(null, input, inputSourceMap!);
  }

  try {
    this.cacheable(false);

    const result = babel.transform(input, {
      ...options.babel,
      plugins: [...(options.babel.plugins || []), [morfeoBabelPlugin, {}]],
      inputSourceMap,
      sourceFileName: this.resourcePath,
      filename: path.basename(this.resourcePath),
      sourceMaps: true,
    });

    // @ts-ignore
    const css = result!.metadata.morfeo;

    if (css) {
      writer.write(css);
    }

    return this.callback(
      null,
      result!.code! + `\nimport '${MORFEO_CSS_PATH}';`,
      result!.map!,
    );
  } catch (e) {
    return this.callback(e as Error, input, inputSourceMap!);
  }
}
