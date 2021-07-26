import { expect, test } from '@oclif/test';
import * as path from 'path';
import * as fs from 'fs';

const THEME_PATH = path.join(__dirname, '../utils/theme.ts');
const BUILD_PATH = path.join(__dirname, '../../build');
const TOKENS_PATH = path.join(__dirname, '../../tokens');
const THEME_NAME = 'light';

function fileExists(themeName: string) {
  const tokenPath = path.join(TOKENS_PATH, `${themeName}.json`);
  return fs.existsSync(tokenPath);
}

describe('build command', () => {
  test
    .command(['build', THEME_PATH])
    .it(`should create a file called default.json if no name is passed`, () => {
      const exists = fileExists('default');

      expect(exists).to.be.true;
    });

  test
    .command(['build', THEME_PATH, '--name', THEME_NAME])
    .it(
      `should create a file called ${THEME_NAME}.json inside tokens directory`,
      () => {
        const exists = fileExists(THEME_NAME);

        expect(exists).to.be.true;
      },
    );

  test
    .stdout()
    .stderr()
    .command(['build'])
    .catch(console.log)
    .it('should fail if no theme path is passed', ctx => {
      expect(ctx.stdout).to.contain(
        'You need to specify the path to the theme like:',
      );
    });
});

describe('when build and tokens folder already exists', () => {
  before(() => {
    const paths = [BUILD_PATH, TOKENS_PATH];

    paths.forEach(dirPath => {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
    });
  });

  test
    .stdout()
    .command(['build', THEME_PATH])
    .it('should remove build and tokens folder', ctx => {
      expect(ctx.stdout).to.contain('old build directory removed');
      expect(ctx.stdout).to.contain('old tokens directory removed');
    });
});
