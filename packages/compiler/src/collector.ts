import * as fs from 'fs';
import * as path from 'path';
import * as chokidar from 'chokidar';
import { glob } from 'glob';
import * as babel from '@babel/core';
import type { TransformOptions } from '@babel/core';
import morfeoBabelPlugin, {
  type MorfeoBabelPluginOptions,
  type MorfeoBabelResult,
} from '@morfeo/babel-plugin';
import { deepMerge } from '@morfeo/utils';
import { createWriter } from './writer';
import { logger } from './logger';

type MorfeoPluginOptions = MorfeoBabelPluginOptions & {
  babel?: TransformOptions;
  entryPoint?: string;
  output?: string;
};

const DEFAULT_OPTIONS = {
  emojis: false,
  classNamePrefix: '',
  entryPoint: path.join('.', '**/*.{ts,tsx,js,jsx}'),
  output: path.join(__dirname, '..', 'css', 'morfeo.css'),
};

function createCollector() {
  const cache = new Map<string, MorfeoBabelResult>();
  let options: MorfeoPluginOptions = DEFAULT_OPTIONS;
  let writer = createWriter({
    output: DEFAULT_OPTIONS.output,
  });

  function init(pluginOptions: MorfeoPluginOptions) {
    options = {
      ...DEFAULT_OPTIONS,
      ...pluginOptions,
    };

    writer = createWriter({
      delay: 10,
      output: pluginOptions.output || DEFAULT_OPTIONS.output,
    });
  }

  async function write() {
    const mergedCss = Array.from(cache.entries()).reduce(
      (acc, [, { globalStyles, styles }]) => {
        return {
          globalStyles: deepMerge(acc.globalStyles, globalStyles),
          styles: deepMerge(acc.styles, styles),
        };
      },
      { globalStyles: {}, styles: {} },
    );

    const css = [
      ...Object.values(mergedCss.globalStyles),
      ...Object.values(mergedCss.styles),
    ].join('\n');

    return writer(css);
  }

  async function extract(fileName: string): Promise<MorfeoBabelResult> {
    const fileContent = fs.readFileSync(fileName, { encoding: 'utf-8' });
    const babelPlugins = options.babel?.plugins || [];

    const result = await babel.transformAsync(fileContent, {
      ...options.babel,
      plugins: [...babelPlugins, [morfeoBabelPlugin, {}]],
      sourceFileName: fileName,
      filename: path.basename(fileName),
      sourceMaps: false,
      code: false,
      ast: false,
    });

    // @ts-ignore
    if (!result || !result.metadata || !result.metadata.morfeo) {
      return { globalStyles: {}, styles: {} };
    }
    // @ts-ignore
    return result.metadata.morfeo;
  }

  async function collectFile(fileName: string) {
    const css = await extract(fileName);

    cache.set(fileName, css);

    write();
  }

  function watch(filesPath: string) {
    const watcher = chokidar.watch(filesPath, {
      ignoreInitial: true,
    });

    watcher.add(filesPath).on('add', fileName => {
      logger.debug(`${path.basename(fileName)} added`);
      collectFile(fileName);
    });

    watcher.add(filesPath).on('change', fileName => {
      logger.debug(`${path.basename(fileName)} changed`);
      collectFile(fileName);
    });
  }

  async function collect() {
    const entryPoint = options.entryPoint || DEFAULT_OPTIONS.entryPoint;
    logger.debug(`Start extracting CSS from ${entryPoint}`);
    const fileNames = await glob(entryPoint);

    logger.startTimer('css extraction');

    Promise.all(fileNames.map(collectFile)).then(() => {
      const diff = logger.endTimer('css extraction');
      logger.debug(`CSS extracted in ${diff} seconds.`);
    });

    watch(entryPoint);
  }

  return { init, collect };
}

export const collector = createCollector();
