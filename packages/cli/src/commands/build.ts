import * as path from 'path';
import { buildTheme, logFooter, logThemesBuilded } from '../utils';
import { deepMerge, theme } from '@morfeo/web';
import { getConfiguration } from '../utils/getConfiguration';
import { getBuildConfiguration } from '../utils/getBuildConfiguration';
import { Argv } from 'yargs';

export type BuildFlags = {
  name: string;
  theme?: string;
  build?: string;
  config: string;
};

function printMissingThemeError() {
  console.error(
    [
      `No theme specified`,
      `You need to specify the path to the theme like:\n`,
      `morfeo build path/to/theme.ts`,
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
  process.exitCode = 1;
}

function getThemes(flags: BuildFlags) {
  const { name, config } = flags;
  const { themes } = getConfiguration(config);

  const themePath = flags.theme;
  let themeFromCli = {};

  if (themePath) {
    themeFromCli = {
      [name]: themePath,
    };
  }

  return deepMerge(themes || {}, themeFromCli);
}

export async function handler(flags: BuildFlags) {
  const { build, config } = flags;

  const allThemes = getThemes(flags);
  const themeKeys = Object.keys(allThemes);

  if (themeKeys.length === 0) {
    printMissingThemeError();
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

export function builder(instance: Argv) {
  return instance
    .option('theme', {
      type: 'string',
      alias: 't',
      required: false,
    })
    .option('name', {
      type: 'string',
      alias: 'n',
      description:
        'an identifier for the passed theme, for example "light", "dark"',
      default: 'default',
      required: false,
    })
    .option('build', {
      type: 'string',
      alias: 'b',
      description: 'the path where the generated css files will be placed',
      required: false,
    })
    .option('config', {
      type: 'string',
      alias: 'c',
      description: 'the path to the configuration file',
      default: '.morfeorc',
      required: false,
    })
    .example('simple', 'morfeo build')
    .example(
      'with custom config',
      'morfeo build --config="configurations/.morfeorc"',
    )
    .example(
      'custom options',
      'morfeo build --theme="path/to/theme.ts" --name="light"',
    );
}
