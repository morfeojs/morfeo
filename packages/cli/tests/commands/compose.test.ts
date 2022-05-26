import { makeMorfeoStyleFiles, rmdir, run } from '../utils';

const BUILD_PATH = 'packages/cli/tests/builds';
const MORFEO_STYLES_PATH = 'packages/cli/tests/tokens';
const CONFIG_PATH = 'packages/cli/tests/config/.morfeorcForCompose';

jest.mock('chokidar', () => ({
  watch: jest.fn().mockReturnValue({
    on: jest.fn(),
  }),
}));

describe('compose command', () => {
  afterEach(() => {
    rmdir(BUILD_PATH);
  });

  beforeAll(() => {
    rmdir(MORFEO_STYLES_PATH);
  });

  describe('when no morfeo style files are found', () => {
    it('should show an error', async () => {
      const { stderr } = run('compose', '--config', CONFIG_PATH);

      expect(stderr).toContain('No *.morfeo.{ts|js} files found');
    });
  });

  describe('when morfeo style files exists', () => {
    beforeAll(() => {
      makeMorfeoStyleFiles();
    });

    afterAll(() => {
      rmdir(MORFEO_STYLES_PATH);
    });

    it('should update the theme with the new styles', async () => {
      run('compose', '--config', CONFIG_PATH);
      const theme = require('../tokens/theme.ts').default;
      expect(theme.colors).toEqual({ primary: 'black' });
      expect(theme.spacings).toEqual({ xxs: '8px' });
      expect(theme.components.Button).toEqual({
        style: {
          bg: 'primary',
        },
      });
    });

    it('should set the custom components only in the light theme', async () => {
      run('compose', '--config', CONFIG_PATH);

      const theme = require('../tokens/theme.ts').default;
      const lightTheme = require('../tokens/lightTheme.json');

      expect(theme.components.Custom).not.toBeDefined();

      expect(lightTheme.components.Custom).toEqual({
        style: {
          bg: 'primary',
        },
      });
    });

    describe('when the command is launched with the flag --watch', () => {
      it('Should show the command to exit', async () => {
        const { stdout } = run('compose', '--config', CONFIG_PATH, '--watch');

        expect(stdout).toContain('^ + C to exit');
      });
    });
  });
});
