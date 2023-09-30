import { cosmiconfig } from 'cosmiconfig';
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader';
import { CosmiconfigResult } from 'cosmiconfig/dist/types';
import { MorfeoCompilerOptions, collector } from '../collector';
import { logger } from '../logger';
import * as path from 'path';

const moduleName = 'morfeo';

type MorfeoExtractOptions = {
  config?: string;
  watch?: boolean;
};

export function extract(morfeoPath: string, cliOptions: MorfeoExtractOptions) {
  const searchPlaces = cliOptions.config ? [cliOptions.config] : [morfeoPath];

  const explorer = cosmiconfig(moduleName, {
    searchPlaces,
    loaders: {
      '.ts': TypeScriptLoader(),
    },
  });

  function normalizeConfig({
    morfeo,
    ...rest
  }: Partial<MorfeoCompilerOptions>) {
    if (!morfeo) {
      throw new Error('morfeo instance not found');
    }
    const { entryPoints, output } = morfeo.theme.getMetadata();

    function normalizePath(filePath: string) {
      const dirname = path.dirname(morfeoPath);
      return path.join(dirname, filePath);
    }

    return {
      ...rest,
      morfeo,
      entryPoints: entryPoints ? entryPoints.map(normalizePath) : entryPoints,
      output: output ? normalizePath(output) : output,
    };
  }

  async function runMorfeo(config: Partial<MorfeoCompilerOptions>) {
    const { watch } = cliOptions;
    const parsedConfig = normalizeConfig({ ...config, watch } as any);
    collector.init(parsedConfig);
    collector.collect();
  }

  function onError() {
    throw new Error('morfeo instance not found');
  }

  function onFound(result: CosmiconfigResult) {
    if (result) {
      logger.success(`morfeo configuration file found at ${result.filepath}`);
    }

    return runMorfeo(result?.config);
  }

  explorer.search().then(onFound).catch(onError);
}
