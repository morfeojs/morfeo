import path from 'path';
import fs from 'fs';
import os from 'os';
import { PACKAGES_PATH } from './utils';

const args = process.argv.slice(2);
const [APP_NAME] = args;

const symlinkType = os.platform() === 'win32' ? 'junction' : 'dir';
const appPath = path.join('./', APP_NAME);
const rootPath = path.join(appPath, './node_modules/@morfeo');

function getAppInternalPackages() {
  if (!fs.existsSync(rootPath)) {
    return [];
  }
  return fs
    .readdirSync(rootPath, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);
}

function linkLocalPack(packName: string) {
  if (fs.existsSync(path.join(rootPath, packName))) {
    fs.rmdirSync(path.join(rootPath, packName), {
      recursive: true,
    });
  }

  fs.symlink(
    path.resolve(PACKAGES_PATH, packName),
    path.resolve(rootPath, packName),
    symlinkType,
    function (err) {
      console.log(err || `@morfeo/${packName} symlink done ✅`);
    },
  );
}

function runSymlink() {
  const packs = getAppInternalPackages();

  packs.forEach(linkLocalPack);
}

runSymlink();
