import { theme } from '@morfeo/core';
import { getStyles, getStyleSheet } from '../src';
import { THEME } from './theme';

describe('jss', () => {
  beforeAll(() => {
    theme.set(THEME);
  });

  afterAll(() => {
    theme.reset();
  });

  test('should generate the sheet', () => {
    const sheet = getStyleSheet({
      button: {
        bg: 'primary',
      },
    });

    expect(sheet.getRule('button').toString()).toContain(
      'background-color: #e3e3e3;',
    );
  });

  test('should generate the css also for responsive values', () => {
    const sheet = getStyleSheet({
      button: {
        color: 'secondary',
        bg: {
          sm: 'primary',
        },
      },
    });

    expect(sheet.toString()).toContain('background-color: #e3e3e3;');
  });

  test('should generate the classnames', () => {
    const { classes } = getStyles({
      button: {
        bg: 'primary',
      },
    });

    expect(classes).toHaveProperty('button');
  });

  test('should detach the sheet', () => {
    const { destroy, sheet } = getStyles({});
    destroy();
    expect(sheet.attached).toBeFalsy();
  });

  test('should return a function to update the stylesheet', () => {
    const { sheet, update } = getStyles({
      button: {
        bg: 'primary',
      },
    });

    update({ button: { bg: 'secondary' } });

    expect(sheet.toString()).toContain('background-color: #000;');
  });
});
