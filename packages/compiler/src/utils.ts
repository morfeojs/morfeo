import * as fs from 'fs';
import * as path from 'path';

export const consumerPackageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'package.json'), {
    encoding: 'utf-8',
  }),
);

export const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'package.json'), {
    encoding: 'utf-8',
  }),
);
