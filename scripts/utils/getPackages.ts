import * as fs from 'fs';
import { PACKAGES_PATH } from './constants';

export function getPackagesPaths() {
  return fs
    .readdirSync(PACKAGES_PATH, { withFileTypes: true })
    .filter(dir => dir.isDirectory());
}

export function getPackagesNames() {
  return getPackagesPaths().map(dir => dir.name);
}
