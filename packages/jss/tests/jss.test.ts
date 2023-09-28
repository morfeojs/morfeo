import { createMorfeo } from '@morfeo/web';
import { createMorfeoJSS } from '../src';
import { THEME } from './theme';

const morfeo = createMorfeo({ theme: THEME });
const morfeoJSS = createMorfeoJSS(morfeo);

describe('jss', () => {
  test('should generate the sheet', () => {
    const { sheet } = morfeoJSS.getStyles({
      button: {
        bg: 'primary',
      },
    });

    expect(sheet.getRule('button').toString()).toContain(
      'background-color: var(--colors-primary);',
    );
  });

  test('should generate the css also for responsive values', () => {
    const { sheet } = morfeoJSS.getStyles({
      button: {
        color: 'secondary',
        bg: {
          sm: 'primary',
        },
      },
    });

    expect(sheet.toString()).toContain(
      'background-color: var(--colors-primary);',
    );
  });

  test('should generate the classnames', () => {
    const { classes } = morfeoJSS.getStyles({
      button: {
        bg: 'primary',
      },
    });

    expect(classes).toHaveProperty('button');
  });

  test('should return a function to update the stylesheet', () => {
    const { sheet, update } = morfeoJSS.getStyles({
      button: {
        bg: 'primary',
      },
    });

    update({ button: { bg: 'secondary' } });

    expect(sheet.toString()).toContain(
      'background-color: var(--colors-secondary);',
    );
  });
});
