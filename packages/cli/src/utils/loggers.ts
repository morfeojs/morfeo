import chalk from 'chalk';
import cli from 'cli-ux';

export function logFileList(allFiles: string[], editedFiles?: string[]) {
  cli.annotation(
    chalk.cyan(`found ${allFiles.length} morfeo style files`),
    allFiles.join('\n'),
  );

  if (editedFiles && editedFiles.length > 0) {
    cli.info('\nLast composed:', chalk.green(`${editedFiles[0]}`));
  }
}

export function logUpdatedThemes(themes: Record<string, string>) {
  cli.info('updated themes at:\n');
  const rows = Object.keys(themes).map(key => ({
    path: themes[key],
    name: key,
  }));
  const columns = { name: {}, path: {} };

  cli.table(rows, columns, { 'no-header': true });
}

export function logThemesBuilded() {
  cli.info(chalk.cyan(`Themes builded successfully`));
}

export function logFooter(watching?: boolean) {
  if (watching) {
    cli.info(chalk.cyan(`^ + C to exit`));
  }

  cli.info(
    chalk.italic.gray(
      '\n\nFor more information about @morfeo/cli check the documentation by clicking here:',
    ),
  );
  cli.url(
    'morfeo.dev',
    chalk.italic.gray(
      'https://morfeo.dev/docs/Features/CLI/morfeo-cli-introduction',
    ),
  );
}
