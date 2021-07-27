import { expect, test } from '@oclif/test';
import * as path from 'path';
import * as fs from 'fs';
import { rmdir } from '../utils/rmdir';

const THEME_PATH = path.join(__dirname, '../utils/theme.ts');
const BUILD_PATH = path.join(__dirname, '../../morfeo');
const THEME_NAME = 'light';

function fileExists(fileName: string) {
  const filePath = path.join(BUILD_PATH, `${fileName}`);
  return fs.existsSync(filePath);
}

describe('should create a folder called `morfeo` is it does not exists', () => {
  beforeEach(() => {
    rmdir(BUILD_PATH);
  });

  test
    .command(['build', THEME_PATH])
    .it(`should create a file called style.css`, () => {
      const exists = fileExists('');

      expect(exists).to.be.true;
    });
});

describe('build command', () => {
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
    .command(['build', THEME_PATH])
    .it(`should create a file called variables.css`, () => {
      const exists = fileExists('variables.css');

      expect(exists).to.be.true;
    });

  test
    .command(['build', THEME_PATH])
    .it(`should create a file called style.css`, () => {
      const exists = fileExists('style.css');

      expect(exists).to.be.true;
    });

  test
    .command(['build', THEME_PATH, '--name', THEME_NAME])
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
