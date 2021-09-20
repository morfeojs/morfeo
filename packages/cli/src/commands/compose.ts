import { Command, flags } from '@oclif/command';
import * as glob from 'glob';
import * as path from 'path';
import {
  watchFiles,
  composeSlice,
  updateThemes,
  getConfiguration,
} from '../utils';

export default class Compose extends Command {
  static description = 'compose morfeo style files into a single theme';

  static examples = [`$ morfeo compose`, `$ morfeo compose --watch`];

  static usage = 'build';

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

  async run() {
    const { flags } = this.parse(Compose);
    const { config } = flags;
    const { themes } = getConfiguration(config);

    const files = glob
      .sync('**/*.morfeo.{ts,js}', {})
      .map(file => path.join(process.cwd(), file));

    if (files.length === 0) {
      this.error('No *.morfeo.{ts|js} files found');
    }

    const compose = (list: string[]) => {
      console.clear();
      console.log(` - ${list.join(',\n - ')}`);
      const mergedThemes = composeSlice(themes || {}, list);
      updateThemes(themes || {}, mergedThemes);
      console.log(`\n\n\n\n^ + C to exit`);
    };

    if (flags.watch) {
      watchFiles(files, (file: string) => {
        compose([file]);
      });
    }

    compose(files);
  }
}
