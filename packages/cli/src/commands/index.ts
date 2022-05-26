import yargs, { Argv } from 'yargs';
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
  return yargs(...args)
    .scriptName('morfeo')
    .command(
      'build [name] [options]',
      'build css styles based on your themes',
      buildBuilder as (instance: Argv) => Argv<BuildFlags>,
      buildHandler,
    )
    .command(
      'compose [name] [options]',
      'compose morfeo style files into themes',
      composeBuilder as (instance: Argv) => Argv<ComposeFlags>,
      composeHandler,
    )
    .demandCommand()
    .version('5.0.1')
    .help()
    .parse();
}
