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
import type { ColorScheme } from '@morfeo/web';
import { createMorfeoJSS } from '@morfeo/jss';
import { deepMerge } from '@morfeo/utils';
import { createWriter } from './writer';
import { logger } from './logger';

export type MorfeoCompilerOptions = MorfeoBabelPluginOptions & {
  babel?: TransformOptions;
  watch?: boolean;
  entryPoints: string[];
  output: string;
};

const DEFAULT_OPTIONS = {
  entryPoints: [path.join('./src', '**/*.{ts,tsx,js,jsx}')],
  output: path.join('./src', 'styles', 'morfeo.css'),
  theme: {} as any,
  watch: false,
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins: ['@babel/plugin-syntax-jsx'],
  },
};

function createCollector() {
  const cache = new Map<string, MorfeoBabelResult>();
  let options: MorfeoCompilerOptions;
  let cssVariables = '';
  let writer = createWriter({
    output: DEFAULT_OPTIONS.output,
  });
  let morfeoJSS: ReturnType<typeof createMorfeoJSS>;

  function init({
    morfeo: instance,
    ...pluginOptions
  }: Partial<MorfeoCompilerOptions>) {
    if (options) {
      return;
    }

    if (!instance) {
      throw new Error('Morfeo instance needs to be specified');
    }

    morfeoJSS = createMorfeoJSS(instance);

    const {
      variables: { light, ...variablesObject },
    } = instance.theme.getMetadata();

    options = {
      ...DEFAULT_OPTIONS,
      ...pluginOptions,
      morfeo: instance,
      babel: {
        ...pluginOptions.babel,
        presets: Array.from(
          new Set([
            ...(DEFAULT_OPTIONS.babel?.presets || []),
            ...(pluginOptions.babel?.presets || []),
          ]),
        ),
        plugins: Array.from(
          new Set([
            ...(DEFAULT_OPTIONS.babel?.plugins || []),
            ...(pluginOptions.babel?.plugins || []),
            [morfeoBabelPlugin, { morfeo: instance }],
          ]),
        ),
      },
    };

    const restVariables = Object.keys(variablesObject).reduce((acc, curr) => {
      const selector = options.morfeo.theme.getValue(
        'colorSchemes',
        curr as ColorScheme,
      );

      return {
        ...acc,
        [selector]: selector.startsWith('@media')
          ? {
              ':root': variablesObject[curr],
            }
          : variablesObject[curr],
      };
    }, {});

    cssVariables = morfeoJSS
      .getStyles({
        '@global': {
          ':root': light,
          ...restVariables,
        },
      } as any)
      .sheet.toString();

    writer = createWriter({
      delay: 10,
      output: options.output || DEFAULT_OPTIONS.output,
    });
  }

  async function write() {
    function onWrite() {
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

      return `${cssVariables}\n${css}`;
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
