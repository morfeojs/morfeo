import * as path from 'path';
import { Command, flags } from '@oclif/command';
import { buildTheme } from '../utils';
import { theme } from '@morfeo/web';

export default class Build extends Command {
  static description = 'build css styles based on your themes';

  static examples = [`$ morfeo build path/to/theme.ts --name="light"`];

  static usage = 'build path/to/theme';

  static flags = {
    help: flags.help({ char: 'h', description: Build.description }),
    name: flags.string({
      char: 'n',
      description:
        'an identifier for the passed theme, for example "light", "dark"',
      default: 'default',
    }),
    build: flags.string({
      char: 'b',
      description: 'the path where the generated css files will be placed',
      required: false,
    }),
    config: flags.string({
      char: 'c',
      description: 'the path to the configuration file',
      default: '.morfeorc',
      required: false,
    }),
  };

  static args = [{ name: 'theme' }];

  printMissingThemeError() {
    this.error(
      `You need to specify the path to the theme like:\n${Build.examples.join(
        '\n',
      )}`,
    );
  }

  async run() {
    const { args, flags } = this.parse(Build);
    const { name, build, config } = flags;

    const themePath = args.theme;
    if (!themePath) {
      this.printMissingThemeError();
    }

    const localTheme = require(path.join(process.cwd(), themePath));

    theme.set(localTheme.default ? localTheme.default : localTheme);

    buildTheme({ name, buildPath: build, configPath: config });
  }
}
