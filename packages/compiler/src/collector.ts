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
import { type Theme, morfeo, getStyles } from '@morfeo/web';
import { deepMerge } from '@morfeo/utils';
import { createWriter } from './writer';
import { logger } from './logger';

const DEFAULT_BABEL_PRESETS = ['@babel/preset-env', '@babel/preset-typescript'];
const DEFAULT_BABEL_PLUGINS = ['@babel/plugin-syntax-jsx'];

export type MorfeoCompilerOptions = MorfeoBabelPluginOptions & {
  babel?: TransformOptions;
  entryPoints?: string[];
  output?: string;
  theme: Theme;
  watch?: boolean;
};

const DEFAULT_OPTIONS = {
  emojis: false,
  classNamePrefix: '',
  entryPoints: [path.join('.', '**/*.{ts,tsx,js,jsx}')],
  output: path.join(__dirname, '..', 'css', 'morfeo.css'),
  theme: {} as any,
  watch: false,
};

function createCollector() {
  const cache = new Map<string, MorfeoBabelResult>();
  let options: MorfeoCompilerOptions = DEFAULT_OPTIONS;
  let writer = createWriter({
    output: DEFAULT_OPTIONS.output,
  });

  function init(pluginOptions: Partial<MorfeoCompilerOptions>) {
    options = {
      ...DEFAULT_OPTIONS,
      ...pluginOptions,
      babel: {
        ...pluginOptions?.babel,
        presets: Array.from(
          new Set([
            ...DEFAULT_BABEL_PRESETS,
            ...(options.babel?.presets || []),
            ...(pluginOptions.babel?.presets || []),
          ]),
        ),
        plugins: Array.from(
          new Set([
            ...DEFAULT_BABEL_PLUGINS,
            ...(options.babel?.plugins || []),
            ...(pluginOptions.babel?.plugins || []),
            [morfeoBabelPlugin, {}],
          ]),
        ),
      },
    };

    morfeo.theme.set(options.theme);

    writer = createWriter({
      delay: 10,
      output: pluginOptions.output || DEFAULT_OPTIONS.output,
    });
  }

  async function write() {
    function onWrite() {
      const { light = {}, dark = {} } = morfeo.theme.getMetadata();

      const variables = getStyles({
        '@global': {
          ':root': light,
          [morfeo.theme.resolveMultiThemeValue('dark')]: {
            ':root': dark,
          },
        },
      } as any).sheet.toString();

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

      return `${variables}\n${css}`;
    }

    return writer(onWrite);
  }

  async function extract(fileName: string): Promise<MorfeoBabelResult> {
    const fileContent = fs.readFileSync(fileName, { encoding: 'utf-8' });

    const result = await babel.transformAsync(fileContent, {
      ...options.babel,
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

  function watch(entryPoints: string[]) {
    const watcher = chokidar.watch(entryPoints, {
      ignoreInitial: true,
    });

    watcher.add(entryPoints).on('add', fileName => {
      logger.debug(`${path.basename(fileName)} added`);
      collectFile(fileName);
    });

    watcher.add(entryPoints).on('change', fileName => {
      logger.debug(`${path.basename(fileName)} changed`);
      collectFile(fileName);
    });
  }

  async function collect() {
    const entryPoints = options.entryPoints || DEFAULT_OPTIONS.entryPoints;
    logger.debug(`Start extracting CSS from ${entryPoints}`);
    const fileNames = await glob(entryPoints);

    logger.startTimer('css extraction');

    Promise.all(fileNames.map(collectFile)).then(() => {
      const diff = logger.endTimer('css extraction');
      logger.debug(`CSS extracted in ${diff} seconds.`);
    });

    if (options.watch) {
      logger.debug('Watching for file changes');
      watch(entryPoints);
    }
  }

  return { init, collect };
}

export const collector = createCollector();
