import * as path from 'path';
import { Command, flags } from '@oclif/command';
import { morfeoToStyleDictionary } from '../utils';
import { theme } from '@morfeo/web';

export default class Build extends Command {
  static description = 'build design tokens based on your theme';

  static examples = [`$ morfeo build path/to/theme.ts`];

  static usage = 'build path/to/theme.(ts|js|json) [--name="theme name"]';

  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({
      char: 'n',
      description:
        'an identifier for the passed theme, for example "light", "dark"',
      default: 'default',
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

    const themePath = args.theme;
    if (!themePath) {
      this.printMissingThemeError();
    }

    const localTheme = require(path.resolve(themePath));

    theme.set(localTheme.default);

    morfeoToStyleDictionary(flags.name);
  }
}
