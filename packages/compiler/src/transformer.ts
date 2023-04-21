import * as path from 'node:path';
import * as babel from '@babel/core';
import morfeoBabelPlugin from '@morfeo/babel-plugin';
import type { MorfeoPluginOptions } from './types';
import { UnpluginContextMeta } from 'unplugin';
import { MORFEO_UNPLUGIN_ID, writer } from './utils';

type LoaderOptions = {
  input: string;
  options?: MorfeoPluginOptions;
  fileName: string;
  meta: UnpluginContextMeta;
};

export function transformer({ input, fileName, options, meta }: LoaderOptions) {
  if (!input.includes('@morfeo/css')) {
    return;
  }

  try {
    const babelPlugins = options?.babel?.plugins || [];
    const result = babel.transformSync(input, {
      ...options?.babel,
      plugins: [...babelPlugins, [morfeoBabelPlugin, {}]],
      sourceFileName: fileName,
      filename: path.basename(fileName),
      sourceMaps: true,
      code: true,
      ast: false,
      parserOpts: {
        sourceType: 'unambiguous',
      },
      /**
       * `caller` is set to supports everything in order to be sure
       * that the generated code is not "touched" by this transformation
       * bot only the target functions are replaced.
       */
      caller: {
        name: MORFEO_UNPLUGIN_ID,
        supportsStaticESM: true,
        supportsDynamicImport: true,
        supportsTopLevelAwait: true,
        supportsExportNamespaceFrom: true,
      },
    });

    // @ts-ignore
    const css = result!.metadata.morfeo;

    if (css) {
      writer.add(css, meta.framework);
    }

    return {
      code: `import '${writer.getImport(fileName, meta.framework)}';\n${
        result!.code
      }`,
      map: result!.map,
      ast: result!.ast,
    };
  } catch (e) {
    return;
  }
}
