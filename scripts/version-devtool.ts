import * as fs from 'fs';
import * as path from 'path';

const args = process.argv.slice(2);
const [VERSION_TYPE] = args;

const DEVTOOL_PATH = path.join(__dirname, '../devtool');
const DEVTOOL_PUBLIC_PATH = path.join(DEVTOOL_PATH, 'public');

const DEVTOOL_PACKAGE_JSON_PATH = path.join(DEVTOOL_PATH, 'package.json');
const DEVTOOL_MANIFEST_PATH = path.join(DEVTOOL_PUBLIC_PATH, 'manifest.json');
const MOZILLA_DEVTOOL_MANIFEST_PATH = path.join(
  DEVTOOL_PUBLIC_PATH,
  'manifest.firefox.json',
);

const devtoolPackageJson = JSON.parse(
  fs.readFileSync(DEVTOOL_PACKAGE_JSON_PATH, { encoding: 'utf8' }),
);

const devtoolManifest = JSON.parse(
  fs.readFileSync(DEVTOOL_MANIFEST_PATH, { encoding: 'utf8' }),
);

const mozillaDevtoolManifest = JSON.parse(
  fs.readFileSync(MOZILLA_DEVTOOL_MANIFEST_PATH, { encoding: 'utf8' }),
);

const currentVersion = devtoolManifest.version as string;

let [major = 0, minor = 0, patch = 0] = currentVersion
  .split('.')
  .map((number: string) => {
    const parsed = Number.parseInt(number);
    return Number.isNaN(parsed) ? 0 : parsed;
  });

if (VERSION_TYPE === 'major') {
  major += 1;
  minor = 0;
  patch = 0;
} else if (VERSION_TYPE === 'minor') {
  minor += 1;
  patch = 0;
} else {
  patch += 1;
}

const newVersion = [major, minor, patch].join('.');

devtoolPackageJson.version = newVersion;
devtoolManifest.version = newVersion;
mozillaDevtoolManifest.version = newVersion;

fs.writeFileSync(
  DEVTOOL_PACKAGE_JSON_PATH,
  JSON.stringify(devtoolPackageJson, undefined, 2) + '\n',
);

fs.writeFileSync(
  DEVTOOL_MANIFEST_PATH,
  JSON.stringify(devtoolManifest, undefined, 2) + '\n',
);

fs.writeFileSync(
  MOZILLA_DEVTOOL_MANIFEST_PATH,
  JSON.stringify(mozillaDevtoolManifest, undefined, 2) + '\n',
);
