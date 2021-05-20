import { Theme, theme } from '@morfeo/web';
import { morfeo } from '../src';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
  components: {
    Box: {
      style: {
        bg: 'secondary',
      },
    },
  },
} as any;

describe('morfeo', () => {
  beforeAll(() => {
    theme.set(THEME);
  });

  test('should add default className to the element', () => {
    const element = document.createElement('div');
    morfeo(element, { bg: 'primary' });

    expect(element.className).toContain('morfeo-element');
  });

  test('should add custom className if componentName is specified', () => {
    const element = document.createElement('div');
    morfeo(element, { componentName: 'Box' });

    expect(element.className).toContain('Box');
  });

  test('should add custom className if componentName and variant is specified', () => {
    const element = document.createElement('div');
    morfeo(element, { componentName: 'Box', variant: 'primary' });

    expect(element.className).toContain('Box-primary');
  });

  test('should not crash if style is not specified', () => {
    const element = document.createElement('div');
    morfeo(element);

    expect(element.className).toContain('morfeo-element');
  });

  test('should return a function that will remove the listener from the theme', () => {
    const element = document.createElement('div');
    const { destroy } = morfeo(element);
    destroy();
    expect(typeof destroy).toBe('function');
  });
});
