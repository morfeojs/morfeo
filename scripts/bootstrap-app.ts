// import fs from 'fs';
// import path from 'path';
import { spawnSync } from 'child_process';
// import { filterInternalDependencies } from './utils';

const args = process.argv.slice(2);
const [APP_NAME] = args;

// function getPackageJsonWithoutInternalDependencies(appName: string) {
//   const packageJsonFile = fs.readFileSync(path.join(appName, 'package.json'), {
//     encoding: 'utf-8',
//   });
//   const packageJson = JSON.parse(packageJsonFile);

//   const { dependencies, peerDependencies, devDependencies } = packageJson;
//   const newDependencies = filterInternalDependencies(dependencies);
//   const newPeerDependencies = filterInternalDependencies(peerDependencies);
//   const newDevDependencies = filterInternalDependencies(devDependencies);

//   return {
//     ...packageJson,
//     dependencies: newDependencies,
//     peerDependencies: newPeerDependencies,
//     devDependencies: newDevDependencies,
//   };
// }

// function removeInternalPackagesFromPackageJson(appName: string) {
//   const packageJsonPath = path.join(appName, 'package.json');
//   const packageJsonFile = fs.readFileSync(packageJsonPath, {
//     encoding: 'utf-8',
//   });
//   const tempPackageJsonPath = path.join(appName, 'package.tmp.json');
//   const newPackageJson = getPackageJsonWithoutInternalDependencies(appName);
//   fs.writeFileSync(tempPackageJsonPath, packageJsonFile);
//   fs.writeFileSync(
//     packageJsonPath,
//     JSON.stringify(newPackageJson, undefined, 2),
//   );
// }

// function restorePackageJson(appName: string) {
//   const packageJsonPath = path.join(appName, 'package.json');
//   const tempPackageJsonPath = path.join(appName, 'package.tmp.json');
//   const packageJsonFile = fs.readFileSync(tempPackageJsonPath, {
//     encoding: 'utf-8',
//   });
//   fs.writeFileSync(packageJsonPath, packageJsonFile);
//   fs.unlinkSync(tempPackageJsonPath);
// }

function shellCommand(command: string, params: string[] = [], options = {}) {
  spawnSync(command, params, {
    shell: true,
    stdio: 'inherit',
    ...options,
  });
}

function runBootstrap(appName: string) {
  // removeInternalPackagesFromPackageJson(appName);
  shellCommand(`yarn`, [''], { cwd: `./${appName}` });
  // restorePackageJson(appName);
  shellCommand(`ts-node`, ['./scripts/symlink-packages.ts', appName]);
}

runBootstrap(APP_NAME);
