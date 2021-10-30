import * as fs from 'fs';
import * as path from 'path';
import {
  getLernaJson,
  getPackagesNames,
  getInternalDependencies,
} from './utils';

const lernaJSON = getLernaJson();

function getPackagePath(packageName: string) {
  return path.join('./packages', packageName, 'package.json');
}

function getPackagePackageJson(packageName: string) {
  const packageJson = fs.readFileSync(getPackagePath(packageName), {
    encoding: 'utf-8',
  });

  return JSON.parse(packageJson);
}

function writePackagePackageJson(packageName: string, packageJson = {}) {
  fs.writeFileSync(
    getPackagePath(packageName),
    JSON.stringify(packageJson, undefined, 2) + '\n',
  );
}

function updatePackagePeerDependencies(
  packageName: string,
  newPeerDependencies: any = {},
) {
  const packageJson = getPackagePackageJson(packageName);
  if (!packageJson.peerDependencies) {
    return packageJson;
  }
  const dependenciesKeys = Object.keys(newPeerDependencies);
  dependenciesKeys.forEach(dep => {
    packageJson.peerDependencies[dep] = newPeerDependencies[dep];
  });

  return packageJson;
}

function syncPackagePeerDependencies(packageName: string) {
  const { version } = lernaJSON;
  const { peerDependencies } = getPackagePackageJson(packageName);
  const filteredDependencies = getInternalDependencies(peerDependencies);
  const dependenciesKeys = Object.keys(filteredDependencies);
  const newPeerDependencies = dependenciesKeys.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: `^${version}`,
    }),
    {},
  );
  const updatedPackageJson = updatePackagePeerDependencies(
    packageName,
    newPeerDependencies,
  );

  writePackagePackageJson(packageName, updatedPackageJson);
}

function syncPeerDependencies() {
  const packages = getPackagesNames();

  packages.forEach(syncPackagePeerDependencies);
}

syncPeerDependencies();
