import { getPackagesNames } from './getPackages';

function getAllInternalPackages() {
  return getPackagesNames().map(name => `@morfeo/${name}`);
}

export function handler(
  dependencies: any = {},
  condition: (key: string, packages: string[]) => boolean,
) {
  const keys = Object.keys(dependencies);
  const packages = getAllInternalPackages();
  const filteredKeys = keys.filter(key => condition(key, packages));

  return filteredKeys.reduce(
    (prev, key) => ({
      ...prev,
      [key]: dependencies[key],
    }),
    {},
  );
}

export function filterInternalDependencies(dependencies: any = {}) {
  return handler(dependencies, (key, packages) => !packages.includes(key));
}

export function getInternalDependencies(dependencies: any = {}) {
  return handler(dependencies, (key, packages) => packages.includes(key));
}
