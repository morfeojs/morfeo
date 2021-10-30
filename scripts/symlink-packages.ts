import path from 'path';
import fs from 'fs';
import os from 'os';
import { getPackagesNames, PACKAGES_PATH } from './utils';

const args = process.argv.slice(2);
const [APP_NAME] = args;

const symlinkType = os.platform() === 'win32' ? 'junction' : 'dir';
const appPath = path.join('./', APP_NAME);
const rootPath = path.join(appPath, './node_modules/@morfeo');

function getAppInternalPackages() {
  const packages = getPackagesNames();
  const packageJsonFile = fs.readFileSync(path.join(appPath, 'package.json'), {
    encoding: 'utf-8',
  });
  const packageJson = JSON.parse(packageJsonFile);
  const { dependencies, peerDependencies, devDependencies } = packageJson;
  const allDependencies = {
    ...dependencies,
    ...devDependencies,
    ...peerDependencies,
  };
  const keys = Object.keys(allDependencies);
  const filteredKeys = keys
    .filter(name => name.includes('@morfeo/'))
    .map(name => name.replace('@morfeo/', ''))
    .filter(dependency => packages.includes(dependency));

  return filteredKeys;
}

function makeRootFolder() {
  if (!fs.existsSync(rootPath)) {
    fs.mkdirSync(rootPath);
  }
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
  makeRootFolder();

  packs.forEach(p => {
    linkLocalPack(p);
  });
}

runSymlink();
