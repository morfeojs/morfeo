import { expect, test } from '@oclif/test';
import * as path from 'path';
import * as fs from 'fs';
import { rmdir } from '../utils/rmdir';

const THEME_PATH = 'test/utils/theme';
const THEME_JSON_PATH = 'test/utils/themejson';
const BUILD_PATH = 'test/builds';
const CONFIG_PATH = 'test/utils/.morfeorc';
const CONFIG_JSON_PATH = 'test/utils/.morfeorcjson';
const THEME_NAME = 'light';

function fileExists(fileName: string) {
  const filePath = path.join(BUILD_PATH, `${fileName}`);

  return fs.existsSync(filePath);
}

describe('build command', () => {
  describe(`if the build folder does not exists"`, () => {
    beforeEach(() => {
      rmdir(BUILD_PATH);
    });

    test
      .command(['build', THEME_PATH, '--build', BUILD_PATH])
      .it(
        `should create the build folder in the path passed from the CLI`,
        () => {
          const exists = fileExists('');

          expect(exists).to.be.true;
        },
      );

    test
      .command(['build', THEME_JSON_PATH, '--build', BUILD_PATH])
      .it(`should work from a theme inside a json file`, () => {
        const exists = fileExists('');

        expect(exists).to.be.true;
      });

    test
      .command(['build', THEME_PATH, '--config', CONFIG_PATH])
      .it(
        `should create the build folder from the typescript configuration file`,
        () => {
          const exists = fileExists('');

          expect(exists).to.be.true;
        },
      );

    test
      .command(['build', THEME_PATH, '--config', CONFIG_JSON_PATH])
      .it(
        `should create the build folder from the json configuration file`,
        () => {
          const exists = fileExists('');

          expect(exists).to.be.true;
        },
      );
  });

  test
    .stderr()
    .command(['build'])
    .catch(err => {
      expect(err.message).to.contain(
        'You need to specify the path to the theme',
      );
    })
    .it(`should fail if no theme is passed`);

  test
    .command(['build', THEME_PATH, '--build', BUILD_PATH])
    .it(`should create a file called variables.css`, () => {
      const exists = fileExists('variables.css');

      expect(exists).to.be.true;
    });

  test
    .command(['build', THEME_PATH, '--build', BUILD_PATH])
    .it(`should create a file called style.css`, () => {
      const exists = fileExists('style.css');

      expect(exists).to.be.true;
    });

  test
    .command(['build', THEME_PATH, '--name', THEME_NAME, '--build', BUILD_PATH])
    .it(
      `should exist a scoped block with css variables inside the file "variables.css"`,
      () => {
        const css = fs.readFileSync(path.join(BUILD_PATH, 'variables.css'), {
          encoding: 'utf8',
        });

        expect(css).to.contain(`data-morfeo-theme="${THEME_NAME}"`);
      },
    );
});
