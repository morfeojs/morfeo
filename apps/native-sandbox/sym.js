const path = require('path');
const fs = require('fs');
const os = require('os');

const symlinkType = os.platform() === 'win32' ? 'junction' : 'dir';
const packagesPath = path.join(__dirname, '../../packages');
const rootPath = path.join(__dirname, './node_modules/@morfeo');

function getAllInternalPackages() {
  return fs
    .readdirSync(packagesPath, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);
}

function getAppInternalPackages() {
  const packages = getAllInternalPackages();
  const packageJsonFile = fs.readFileSync(path.join(__dirname, 'package.json'));
  const packageJson = JSON.parse(packageJsonFile);
  const { dependencies, peerDependencies, devDependencies } = packageJson;
  const allDependencies = {
    ...dependencies,
    ...peerDependencies,
    ...devDependencies,
  };
  const keys = Object.keys(allDependencies);
  const filteredKeys = keys
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
    path.join(packagesPath, packName),
    path.join(rootPath, packName),
    symlinkType,
    function (err) {
      console.log(err || packName);
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
