import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const [APP_NAME] = args;

function getAllInternalPackages() {
  return fs
    .readdirSync('packages', { withFileTypes: true })
    .filter(directory => directory.isDirectory())
    .map(directory => `@morfeo/${directory.name}`);
}

function filterInternalDependencies(dependencies = {}) {
  const keys = Object.keys(dependencies);
  const packages = getAllInternalPackages();
  const filteredKeys = keys.filter(key => !packages.includes(key));
  return filteredKeys.reduce(
    (prev, key) => ({
      ...prev,
      [key]: dependencies[key],
    }),
    {},
  );
}

function getPackageJsonWithoutInternalDependencies(appName) {
  const packageJsonFile = fs.readFileSync(
    path.join('apps', appName, 'package.json'),
  );
  const packageJson = JSON.parse(packageJsonFile);

  const { dependencies, peerDependencies, devDependencies } = packageJson;
  const newDependencies = filterInternalDependencies(dependencies);
  const newPeerDependencies = filterInternalDependencies(peerDependencies);
  const newDevDependencies = filterInternalDependencies(devDependencies);

  return {
    ...packageJson,
    dependencies: newDependencies,
    peerDependencies: newPeerDependencies,
    devDependencies: newDevDependencies,
  };
}

function removeInternalPackagesFromPackageJson(appName) {
  const packageJsonPath = path.join('apps', appName, 'package.json');
  const packageJsonFile = fs.readFileSync(packageJsonPath);
  const tempPackageJsonPath = path.join('apps', appName, 'package.tmp.json');
  const newPackageJson = getPackageJsonWithoutInternalDependencies(appName);
  fs.writeFileSync(tempPackageJsonPath, packageJsonFile);
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(newPackageJson, undefined, 2),
  );
}

function restorePackageJson(appName) {
  const packageJsonPath = path.join('apps', appName, 'package.json');
  const tempPackageJsonPath = path.join('apps', appName, 'package.tmp.json');
  const packageJsonFile = fs.readFileSync(tempPackageJsonPath);
  fs.writeFileSync(packageJsonPath, packageJsonFile);
  fs.unlinkSync(tempPackageJsonPath);
}

function shellCommand(command, params = [], options = {}) {
  spawnSync(command, params, {
    shell: true,
    stdio: 'inherit',
    ...options,
  });
}

function runBootstrap(appName) {
  removeInternalPackagesFromPackageJson(appName);
  shellCommand(`npm`, ['install'], { cwd: `./apps/${appName}` });
  restorePackageJson(appName);
  shellCommand(`npm`, ['run', 'link'], { cwd: `./apps/${appName}` });
}

runBootstrap(APP_NAME);
