import * as path from 'node:path';
import * as babel from '@babel/core';
import type { TransformOptions } from '@babel/core';
import type { LoaderContext } from 'webpack';
import type { MorfeoWebpackPluginOptions } from './types';
import { getCssPath } from './utils';
import virtualModules from './virtualModules';

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
      plugins: [...(options.babel.plugins || []), ['@morfeo/babel-plugin', {}]],
      inputSourceMap,
      sourceFileName: this.resourcePath,
      filename: path.basename(this.resourcePath),
      sourceMaps: true,
    });

    // @ts-ignore
    const css = result!.metadata.morfeo;
    let importExtractedCss: string = '';

    if (css) {
      const virtualFilePath = getCssPath(this, css);
      virtualModules.write(this._compiler!, virtualFilePath, css);
      importExtractedCss = `\nimport '${virtualFilePath}';`;
    }

    return this.callback(
      null,
      result!.code! + importExtractedCss,
      result!.map!,
    );
  } catch (e) {
    return this.callback(e as Error, input, inputSourceMap!);
  }
}
