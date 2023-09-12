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

    expect(theme.colors.primary).toBe('var(--colors-primary)');
  });

  test('should resolve a shadow by giving css variable as colors', () => {
    const { theme } = extractCssVariables({
      shadows: { light: { color: 'primary' } },
    });

    expect(theme.shadows.light).toEqual({
      color: 'primary',
    });
  });

  test('should not transform a value that is already a css variable', () => {
    const { theme } = extractCssVariables({
      colors: { primary: 'var(--css-variable)' },
    });

    expect(theme.colors.primary).toBe('var(--css-variable)');
  });
});
