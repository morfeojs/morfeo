import { Command } from 'commander';
import { init } from './commands/init';
import { extract } from './commands/extract';
import { packageJson } from './utils';

const program = new Command();

program.name('morfeo').version(packageJson.version, '-v, --version');

program
  .command('extract')
  .usage('morfeo extract ./src/morfeo.ts --watch')
  .summary('Extract CSS')
  .description(
    `Extract CSS from your js/ts files.

Examples:
  Default path src/morfeo.ts:
  $ morfeo extract

  Watching for file changes:
  $ morfeo extract --watch

  Custom config ./morfeo.config.ts:
  $ morfeo extract --config ./morfeo.config.ts
`,
  )
  .argument(
    '[path]',
    'The path where you defined the morfeo instance',
    './src/morfeo.ts',
  )
  .option(
    '-w, --watch [boolean]',
    'Watch for file changes, suggested in development',
  )
  .action(extract);

program
  .command('init')
  .summary('Initialize morfeo')
  .description('Create morfeo configuration files')
  .action(init);

program.parse(process.argv);
