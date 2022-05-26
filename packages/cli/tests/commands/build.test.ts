import * as path from 'path';
import * as fs from 'fs';
import { rmdir, run } from '../utils';

const THEME_PATH = 'packages/cli/tests/config/theme';
const THEME_JSON_PATH = 'packages/cli/tests/config/themejson';
const BUILD_PATH = 'packages/cli/tests/builds';
const CONFIG_PATH = 'packages/cli/tests/config/.morfeorc';
const CONFIG_JSON_PATH = 'packages/cli/tests/config/.morfeorcjson';
const CONFIG_WITH_THEMES_PATH = 'packages/cli/tests/config/.morfeorcWithThemes';
const THEME_NAME = 'light';

function fileExists(fileName: string) {
  const filePath = path.join(BUILD_PATH, `${fileName}`);

  return fs.existsSync(filePath);
}

describe('build command', () => {
  afterEach(() => {
    rmdir(BUILD_PATH);
  });

  describe(`if the build folder does not exists`, () => {
    beforeEach(() => {
      rmdir(BUILD_PATH);
    });

    it(`should create the build folder in the path passed from the CLI`, () => {
      run('build', '--theme', THEME_PATH, '--build', BUILD_PATH);
      const exists = fileExists('');

      expect(exists).toBeTruthy();
    });

    it(`should work from a theme inside a json file`, () => {
      run('build', '--theme', THEME_JSON_PATH, '--build', BUILD_PATH);
      const exists = fileExists('');

      expect(exists).toBeTruthy;
    });

    it(`should create the build folder from the typescript configuration file`, () => {
      run('build', '--theme', THEME_PATH, '--config', CONFIG_PATH);
      const exists = fileExists('');

      expect(exists).toBeTruthy();
    });

    it(`should create the build folder from the json configuration file`, () => {
      run('build', '--theme', THEME_PATH, '--config', CONFIG_JSON_PATH);
      const exists = fileExists('');

      expect(exists).toBeTruthy();
    });
  });

  it(`should create a file called default-variables.css`, () => {
    run('build', '--theme', THEME_PATH, '--build', BUILD_PATH);
    const exists = fileExists(`default-variables.css`);

    expect(exists).toBeTruthy();
  });

  it(`should create a file called default-style.css`, () => {
    run('build', '--theme', THEME_PATH, '--build', BUILD_PATH);
    const exists = fileExists(`default-components.css`);

    expect(exists).toBeTruthy();
  });

  it(`should create a file called classes.css`, () => {
    run('build', '--theme', THEME_PATH, '--build', BUILD_PATH);
    const exists = fileExists(`classes.css`);

    expect(exists).toBeTruthy();
  });

  it(`should exist a scoped block with css variables inside the file "${THEME_NAME}-variables.css"`, () => {
    run(
      'build',
      '--theme',
      THEME_PATH,
      '--name',
      THEME_NAME,
      '--build',
      BUILD_PATH,
    );

    const css = fs.readFileSync(
      path.join(BUILD_PATH, `${THEME_NAME}-variables.css`),
      {
        encoding: 'utf8',
      },
    );

    expect(css).toContain(`data-morfeo-theme="${THEME_NAME}"`);
  });

  describe('when no argument is passed', () => {
    beforeEach(() => {
      rmdir(BUILD_PATH);
    });

    it(`should fail if no theme is passed or there are no themes inside the configuration`, () => {
      const { stderr } = run('build');
      expect(stderr).toContain('You need to specify the path to the theme');
    });

    it(`should work if some theme is specified inside the configuration`, () => {
      run('build', '--config', CONFIG_WITH_THEMES_PATH);
      const exists = fileExists('index.css');

      expect(exists).toBeTruthy();
    });
  });
});
