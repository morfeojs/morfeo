import { transformer } from './transformer';
import { MorfeoPluginOptions } from './types';
import { MORFEO_VIRTUAL_MODULE_PREFIX, writer } from './utils';
import { UnpluginBuildContext, UnpluginContextMeta } from 'unplugin';

const SUPPORTED_EXTENSIONS = ['ts', 'js', 'tsx', 'jsx'];

export function getMorfeoUnpluginOptions(
  options: MorfeoPluginOptions | undefined = undefined,
  meta: UnpluginContextMeta,
) {
  return {
    name: '@morfeo/compiler',
    transformInclude(id: string) {
      return SUPPORTED_EXTENSIONS.some(ext => id.endsWith(ext));
    },
    resolveId(source: string) {
      if (source.startsWith(MORFEO_VIRTUAL_MODULE_PREFIX)) {
        return source;
      }
      return null;
    },
    transform(code: string, fileName: string) {
      return transformer({ input: code, fileName, options, meta });
    },
    load(this: UnpluginBuildContext, id: string) {
      if (id.startsWith(MORFEO_VIRTUAL_MODULE_PREFIX)) {
        const watchedFiles = this.getWatchFiles();
        if (!watchedFiles.includes(id)) {
          this.addWatchFile(id);
        }

        return writer.get();
      }

      return null;
    },
  };
}
