import { expect, test } from '@oclif/test';
import { makeMorfeoStyleFiles, rmdir } from '../utils';

const BUILD_PATH = 'packages/cli/tests/builds';
const MORFEO_STYLES_PATH = 'packages/cli/tests/tokens';
const CONFIG_PATH = 'packages/cli/tests/config/.morfeorcForCompose';

const chokidarOnCallback = jest.fn;

const chokidar = {
  watch: () => ({
    on: chokidarOnCallback,
  }),
};

jest.mock('chokidar', () => chokidar);

describe('compose command', () => {
  afterEach(() => {
    rmdir(BUILD_PATH);
  });

  beforeAll(() => {
    rmdir(MORFEO_STYLES_PATH);
  });

  beforeEach(() => {
    jest.setTimeout(150000);
  });

  describe('when no morfeo style files are found', () => {
    test
      .stderr()
      .command(['compose', '--config', CONFIG_PATH])
      .catch(err => {
        expect(err.message).to.contain('No *.morfeo.{ts|js} files found');
      })
      .it('should show an error');
  });

  describe('when morfeo style files exists', () => {
    beforeAll(() => {
      makeMorfeoStyleFiles();
    });

    afterAll(() => {
      rmdir(MORFEO_STYLES_PATH);
    });

    test
      .command(['compose', '--config', CONFIG_PATH])
      .it('should update the theme with the new styles', () => {
        const theme = require('../tokens/theme.ts').default;

        expect(theme.colors).to.deep.equal({ primary: 'black' });
        expect(theme.spacings).to.deep.equal({ xxs: '8px' });
        expect(theme.components.Button).to.deep.equal({
          style: {
            bg: 'primary',
          },
        });
      });

    test
      .command(['compose', '--config', CONFIG_PATH])
      .it('should set the custom components only in the light theme', () => {
        const theme = require('../tokens/theme.ts').default;
        const lightTheme = require('../tokens/lightTheme.json');

        expect(theme.components.Custom).to.be.undefined;

        expect(lightTheme.components.Custom).to.deep.equal({
          style: {
            bg: 'primary',
          },
        });
      });

    test
      .stdout()
      .command(['compose', '--config', CONFIG_PATH, '--watch'])
      .it(
        'Should show the command to exit if is watching for file changes',
        ({ stdout }) => {
          expect(stdout).to.contain('^ + C to exit');
        },
      );
  });
});
