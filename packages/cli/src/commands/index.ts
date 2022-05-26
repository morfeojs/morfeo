import yargs, { Argv } from 'yargs';
import * as fs from 'fs';
import * as path from 'path';
import {
  BuildFlags,
  builder as buildBuilder,
  handler as buildHandler,
} from './build';
import {
  ComposeFlags,
  builder as composeBuilder,
  handler as composeHandler,
} from './compose';

export function morfeoCLI(...args: Parameters<typeof yargs>) {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', '..', 'package.json'), {
      encoding: 'utf8',
    }),
  );

  return yargs(...args)
    .scriptName('morfeo')
    .command(
      'build [options]',
      'build css styles based on your themes',
      buildBuilder as (instance: Argv) => Argv<BuildFlags>,
      buildHandler,
    )
    .command(
      'compose [options]',
      'compose morfeo style files into themes',
      composeBuilder as (instance: Argv) => Argv<ComposeFlags>,
      composeHandler,
    )
    .demandCommand()
    .version(packageJson.version)
    .help()
    .parse();
}
