import { cli } from 'cli-ux';
import { morfeoCLI } from '../../src/commands';

export function run(...args: string[]) {
  const stdout: any[] = [];
  const stderr: any[] = [];

  cli.info = (message: any) => {
    if (typeof message === 'string') {
      stdout.push(message);
    }
  };

  console.log = (message: any) => {
    if (typeof message === 'string') {
      stdout.push(message);
    }
  };

  console.error = (message: any) => {
    if (typeof message === 'string') {
      stderr.push(message);
    }
  };

  morfeoCLI(args);

  return { stdout: stdout.join(''), stderr: stderr.join('') };
}
