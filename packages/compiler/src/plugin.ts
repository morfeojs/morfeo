import { transformer } from './transformer';
import { MorfeoPluginOptions } from './types';
import { writer, MORFEO_UNPLUGIN_ID, SUPPORTED_EXTENSIONS } from './utils';
import { UnpluginContextMeta } from 'unplugin';

export function getMorfeoUnpluginOptions(
  options: MorfeoPluginOptions | undefined = undefined,
  meta: UnpluginContextMeta,
): any {
  return {
    name: MORFEO_UNPLUGIN_ID,
    transformInclude(id: string) {
      return SUPPORTED_EXTENSIONS.some(ext => id.endsWith(ext));
    },
    resolveId(source: string) {
      if (source.startsWith(MORFEO_UNPLUGIN_ID)) {
        return source;
      }
      return null;
    },
    transform(code: string, fileName: string) {
      return transformer({ input: code, fileName, options, meta });
    },
    load(id: string) {
      if (id.startsWith(MORFEO_UNPLUGIN_ID)) {
        return writer.get();
      }

      return null;
    },
  };
}
