import * as fs from 'fs';
import * as path from 'path';
import { cosmiconfig } from 'cosmiconfig';
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader';
import { CosmiconfigResult } from 'cosmiconfig/dist/types';
import { Command } from 'commander';
import { MorfeoCompilerOptions, collector } from './collector';
import { logger } from './logger';

const moduleName = 'morfeo';

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'package.json'), {
    encoding: 'utf8',
  }),
);

const explorer = cosmiconfig(moduleName, {
  searchPlaces: [
    `.${moduleName}rc.js`,
    `.${moduleName}rc.ts`,
    `.${moduleName}rc.cjs`,
    `${moduleName}.config.js`,
    `${moduleName}.config.ts`,
    `${moduleName}.config.cjs`,
  ],
  loaders: {
    '.ts': TypeScriptLoader(),
  },
});

const program = new Command();

program
  .name('morfeo')
  .version(packageJson.version, '-v, --version')
  .description("Run the morfeo's CLI to extract CSS from your js/ts files")
  .option(
    '-e, --entryPoints',
    'Entry points where morfeo should search for styles to extract',
  )
  .option('-c, --classNamePrefix', 'The prefix for each generated class')
  .option('-o, --output', 'The path of the file where the css will be stored')
  .option(
    '-E, --emojis',
    'Whether or not the minified classes should use emojis 😎',
  )
  .option('-m, --minify', 'Whether or not the classes should be minified')
  .option(
    '-w, --watch [boolean]',
    'Indicated if morfeo should watch for file changes',
  )
  .parse(process.argv);

const configFromCli = program.opts();

function runMorfeo(config: Partial<MorfeoCompilerOptions>) {
  collector.init({
    ...config,
    ...configFromCli,
  });
  collector.collect();
}

function onError() {
  logger.warning('morfeo configuration file not found.');

  runMorfeo(configFromCli as any);
}

function onFound(result: CosmiconfigResult) {
  if (!result) {
    return onError();
  }
  logger.success(`morfeo configuration file found at ${result.filepath}`);
  runMorfeo(result.config);
}

explorer.search().then(onFound).catch(onError);
