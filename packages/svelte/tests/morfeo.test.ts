import { Theme, morfeo } from '@morfeo/web';
import { morfeoStyle } from '../src';

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
      variants: {
        span: {
          style: {},
          props: {
            'data-test': 'additional prop',
          },
        },
      },
    },
  },
} as any;

describe('morfeo', () => {
  beforeAll(() => {
    morfeo.setTheme('default', THEME);
  });

  test('should add default className to the element', () => {
    const element = document.createElement('div');
    morfeoStyle(element, { bg: 'primary' });

    expect(element.className).toContain('morfeo-element');
  });

  test('should add custom className if componentName is specified', () => {
    const element = document.createElement('div');
    morfeoStyle(element, { componentName: 'Box' });

    expect(element.className).toContain('Box');
  });

  test('should add custom className if componentName and variant is specified', () => {
    const element = document.createElement('div');
    morfeoStyle(element, { componentName: 'Box', variant: 'primary' });

    expect(element.className).toContain('Box-primary');
  });

  test('should not crash if style is not specified', () => {
    const element = document.createElement('div');
    morfeoStyle(element);

    expect(element.className).toContain('morfeo-element');
  });

  test('should return a function that will remove the listener from the theme', () => {
    const element = document.createElement('div');
    const { destroy } = morfeoStyle(element);
    destroy();
    expect(typeof destroy).toBe('function');
  });

  test('should return a function that will update the style on changes', () => {
    const element = document.createElement('div');
    const { update } = morfeoStyle(element);
    update({} as any);
    expect(typeof update).toBe('function');
  });

  test('should set the default properties to the element', () => {
    const element = document.createElement('div');
    morfeoStyle(element, {
      componentName: 'Box',
      variant: 'span',
    });

    expect(element.getAttribute('data-test')).toBe('additional prop');
  });

  test('should update the default properties of to the element', () => {
    const element = document.createElement('div');
    const { update } = morfeoStyle(element, {
      componentName: 'Box',
    });

    expect(element.getAttribute('data-test')).toBeFalsy();

    update({ variant: 'span' });

    expect(element.getAttribute('data-test')).toBe('additional prop');
  });
});
