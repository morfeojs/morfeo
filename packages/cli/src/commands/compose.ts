import * as glob from 'glob';
import * as path from 'path';
import cli from 'cli-ux';
import {
  watchFiles,
  updateThemes,
  composeThemes,
  getConfiguration,
  logUpdatedThemes,
  logFooter,
  logFileList,
} from '../utils';
import { Argv } from 'yargs';

type ComposeParams = {
  edited: string[];
  files: string[];
  watching?: boolean;
  themes: Record<string, string>;
};

export type ComposeFlags = {
  watch: boolean;
  config: string;
};

function compose({ edited, themes, files, watching }: ComposeParams) {
  console.clear();

  logFileList(files, edited);

  cli.info(`\n\n`);

  const mergedThemes = composeThemes(themes, edited);
  updateThemes(themes, mergedThemes);

  logUpdatedThemes(themes);

  cli.info(`\n\n`);

  logFooter(watching);
}

export async function handler(flags: ComposeFlags) {
  const { config } = flags;
  const { themes } = getConfiguration(config);

  console.clear();

  cli.action.start('Searching for morfeo style files');

  const files = glob
    .sync('**/*.morfeo.{ts,js}', {})
    .map(file => path.join(process.cwd(), file));

  cli.action.stop();

  if (files.length === 0) {
    console.clear();
    logFooter();
    cli.info(`\n\n`);
    console.error('No *.morfeo.{ts|js} files found');
    process.exitCode = 1;
    return;
  }

  const composeCallback = (...edited: string[]) => {
    compose({ edited, themes, files, watching: flags.watch });
  };

  if (flags.watch) {
    watchFiles(files, composeCallback);
  }

  composeCallback(...files);
}

export function builder(instance: Argv) {
  return instance
    .option('watch', {
      type: 'boolean',
      alias: 'w',
      description: 'watch file changes',
      default: false,
      required: false,
    })
    .option('config', {
      type: 'string',
      alias: 'c',
      description: 'the path to the configuration file',
      default: '.morfeorc',
      required: false,
    })
    .example('simple', 'morfeo compose')
    .example('watch', 'morfeo compose --watch');
}
