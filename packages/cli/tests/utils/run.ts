import { cli } from 'cli-ux';
import { morfeoCLI } from '../../src/commands';

export function run(...args: string[]) {
  const _log = console.log;
  const _error = console.error;
  const _info = cli.info;
  const stdout: any[] = [];
  const stderr: any[] = [];

  cli.info = (message: any) => {
    if (typeof message === 'string') {
      stdout.push(message);
    }
    return _info(message);
  };

  console.log = (message: any) => {
    if (typeof message === 'string') {
      stdout.push(message);
    }
    return _log(message);
  };

  console.error = (message: any) => {
    if (typeof message === 'string') {
      stderr.push(message);
    }
    return _error(message);
  };

  morfeoCLI(args);

  return { stdout: stdout.join(''), stderr: stderr.join('') };
}
