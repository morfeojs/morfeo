import { Command, flags } from '@oclif/command';
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

type ComposeParams = {
  edited: string[];
  files: string[];
  watching?: boolean;
  themes: Record<string, string>;
};

export default class Compose extends Command {
  static description = 'compose morfeo style files into themes';

  static examples = [`$ morfeo compose`, `$ morfeo compose --watch`];

  static usage = 'compose';

  static flags = {
    help: flags.help({ char: 'h', description: Compose.description }),
    watch: flags.boolean({
      char: 'w',
      description: 'watch file changes',
      default: false,
      required: false,
    }),
    config: flags.string({
      char: 'c',
      description: 'the path to the configuration file',
      default: '.morfeorc',
      required: false,
    }),
  };

  static args = [];

  compose({ edited, themes, files, watching }: ComposeParams) {
    console.clear();

    logFileList(files, edited);

    cli.info(`\n\n`);

    const mergedThemes = composeThemes(themes, edited);
    updateThemes(themes, mergedThemes);

    logUpdatedThemes(themes);

    cli.info(`\n\n`);

    logFooter(watching);
  }

  async run() {
    const { flags } = this.parse(Compose);
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
      this.error('No *.morfeo.{ts|js} files found');
    }

    const composeCallback = (...edited: string[]) => {
      this.compose({ edited, themes, files, watching: flags.watch });
    };

    if (flags.watch) {
      watchFiles(files, composeCallback);
    }

    composeCallback(...files);
  }
}
