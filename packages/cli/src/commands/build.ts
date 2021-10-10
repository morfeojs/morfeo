import * as path from 'path';
import { Command, flags } from '@oclif/command';
import { buildTheme, logFooter, logThemesBuilded } from '../utils';
import { deepMerge, theme } from '@morfeo/web';
import { getConfiguration } from '../utils/getConfiguration';
import { getBuildConfiguration } from '../utils/getBuildConfiguration';

export default class Build extends Command {
  static description = 'build css styles based on your themes';

  static examples = [
    `$ morfeo build`,
    `$ morfeo build --config="configurations/.morfeorc"`,
    `$ morfeo build path/to/theme.ts --name="light"`,
  ];

  static usage = 'build';

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
      [
        `No theme specified`,
        `You need to specify the path to the theme like:\n${Build.examples.join(
          '\n',
        )}`,
        `Or place your themes inside the configuration file:`,
        '// .morfeorc',
        JSON.stringify(
          {
            themes: {
              light: 'path/to/theme/light',
              dark: 'path/to/theme/dark',
            },
          },
          undefined,
          2,
        ),
      ].join('\n'),
    );
  }

  getThemes() {
    const { args, flags } = this.parse(Build);
    const { name, config } = flags;
    const { themes } = getConfiguration(config);

    const themePath = args.theme;
    let themeFromCli = {};

    if (themePath) {
      themeFromCli = {
        [name]: themePath,
      };
    }

    return deepMerge(themes || {}, themeFromCli);
  }

  async run() {
    const { flags } = this.parse(Build);
    const { build, config } = flags;

    const allThemes = this.getThemes();
    const themeKeys = Object.keys(allThemes);

    if (themeKeys.length === 0) {
      this.printMissingThemeError();
    }

    const buildConfiguration = getBuildConfiguration({
      buildPath: build,
      configPath: config,
    });

    for (const currentTheme of themeKeys) {
      const localTheme = require(path.join(
        process.cwd(),
        allThemes[currentTheme],
      ));
      theme.reset();
      theme.set(localTheme.default ? localTheme.default : localTheme);
      buildTheme({ ...buildConfiguration, name: currentTheme });
    }

    console.clear();

    logThemesBuilded();

    logFooter();
  }
}
