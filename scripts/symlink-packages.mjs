import path from 'path';
import fs from 'fs';
import os from 'os';

const args = process.argv.slice(2);
const [APP_NAME] = args;

const symlinkType = os.platform() === 'win32' ? 'junction' : 'dir';
const packagesPath = path.join('./packages');
const appPath = path.join('./', APP_NAME);
const rootPath = path.join(appPath, './node_modules/@morfeo');

function getAllInternalPackages() {
  return fs
    .readdirSync(packagesPath, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);
}

function getAppInternalPackages() {
  const packages = getAllInternalPackages();
  const packageJsonFile = fs.readFileSync(path.join(appPath, 'package.json'));
  const packageJson = JSON.parse(packageJsonFile);
  const { dependencies, peerDependencies, devDependencies } = packageJson;
  const allDependencies = {
    ...dependencies,
    ...peerDependencies,
    ...devDependencies,
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

function linkLocalPack(packName) {
  if (fs.existsSync(path.join(rootPath, packName))) {
    fs.rmdirSync(path.join(rootPath, packName), {
      recursive: true,
    });
  }

  fs.symlink(
    path.resolve(packagesPath, packName),
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
