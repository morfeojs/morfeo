/**
 * Forcing the environment to production before the imports
 */
const CURRENT_ENV = process.env.NODE_ENV;
process.env.NODE_ENV = 'production';

import { THEME } from './theme';
import { getStyles, morfeoJSSPreset } from '../src';
import { theme } from '@morfeo/core';

describe('when the env is production', () => {
  beforeAll(() => {
    theme.set(THEME);
  });

  afterAll(() => {
    theme.reset();
    process.env.NODE_ENV = CURRENT_ENV;
  });

  test('the preset should have the minify option set to true', () => {
    process.env.NODE_ENV = 'production';

    expect(morfeoJSSPreset.id?.minify).toBe(true);
  });

  test('should generate minified classnames', () => {
    const { classes } = getStyles({
      button: {
        bg: 'primary',
      },
    });

    expect(classes.button).toBe('a');
  });
});
