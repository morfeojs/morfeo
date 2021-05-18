import { Theme, theme } from '@morfeo/web';
import { getStyle, getStyleSheet } from '../src';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
} as any;

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

  test('should generate the classnames', () => {
    const classes = getStyle({
      button: {
        bg: 'primary',
      },
    });

    expect(classes).toHaveProperty('button');
  });
});
