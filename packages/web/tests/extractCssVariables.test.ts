import { morfeo } from '../src';
import { extractCssVariables } from '../src/utils/extractCssVariables';

describe('createTheme', () => {
  test('should not convert derived theme values into css variables', () => {
    const { theme } = extractCssVariables({
      shadows: { light: { color: 'primary' } },
    });

    expect(theme.shadows.light).toHaveProperty('color', 'primary');
  });

  test('should resolve a color by giving the css variable', () => {
    const { theme } = extractCssVariables({ colors: { primary: 'blue' } });

    expect(morfeo.parsers.resolve({ color: 'primary' })).toEqual({
      color: 'var(--colors-primary)',
    });
  });

  test('should resolve a shadow by giving css variable as colors', () => {
    extractCssVariables({ shadows: { light: { color: 'primary' } } });

    expect(morfeo.parsers.resolve({ shadow: 'light' })).toEqual({
      boxShadow: expect.stringContaining('var(--colors-primary)'),
    });
  });

  test('should not transform a value that is already a css variable', () => {
    extractCssVariables({ colors: { primary: 'var(--css-variable)' } });

    expect(morfeo.parsers.resolve({ color: 'primary' })).toEqual({
      color: 'var(--css-variable)',
    });
  });
});
