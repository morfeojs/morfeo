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

const program = new Command();

program
  .name('morfeo')
  .version(packageJson.version, '-v, --version')
  .description("Run the morfeo's CLI to extract CSS from your js/ts files")
  .option(
    '-p, --path [string]',
    'The path where you defined the morfeo instance',
    './src/morfeo.ts',
  )
  .option(
    '-w, --watch [boolean]',
    'Indicated if morfeo should watch for file changes',
  )
  .parse(process.argv);

const { path: morfeoPath, ...cliOptions } = program.opts();

const explorer = cosmiconfig(moduleName, {
  searchPlaces: [morfeoPath],
  loaders: {
    '.ts': TypeScriptLoader(),
  },
});

function normalizeConfig({ morfeo, ...rest }: MorfeoCompilerOptions) {
  const { entryPoints, output } = morfeo.theme.getMetadata();

  function normalizePath(filePath: string) {
    const dirname = path.dirname(morfeoPath);
    return path.join(dirname, filePath);
  }

  return {
    ...rest,
    morfeo,
    entryPoints: entryPoints ? entryPoints.map(normalizePath) : entryPoints,
    output: output ? normalizePath(output) : output,
  };
}

async function runMorfeo(config: Partial<MorfeoCompilerOptions>) {
  const parsedConfig = normalizeConfig({ ...config, ...cliOptions } as any);
  collector.init(parsedConfig);
  collector.collect();
}

function onError() {
  return runMorfeo(cliOptions as MorfeoCompilerOptions);
}

function onFound(result: CosmiconfigResult) {
  if (result) {
    logger.success(`morfeo configuration file found at ${result.filepath}`);
  }

  return runMorfeo(result?.config);
}

explorer.search().then(onFound).catch(onError);
