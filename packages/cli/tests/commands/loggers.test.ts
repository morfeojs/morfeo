import chalk from 'chalk';
import cli from 'cli-ux';
import { logFileList, logUpdatedThemes } from '../../src/utils';

describe('logFileList', () => {
  test('should not print the last composed files', () => {
    const consoleSpy = jest.spyOn(cli, 'info');

    logFileList(['test']);

    expect(consoleSpy).not.toHaveBeenCalledWith(
      ...['\nLast composed:', chalk.green(`test`)],
    );
  });
});

describe('logUpdatedThemes', () => {
  test('should print the updated themes', () => {
    const consoleSpy = jest.spyOn(cli, 'info');

    logUpdatedThemes({ test: 'test' });

    expect(consoleSpy).toHaveBeenCalledWith('updated themes at:\n');
  });
});
