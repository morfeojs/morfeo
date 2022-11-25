import { Theme, morfeo } from '@morfeo/web';
import { morfeoStyle } from '../src';

const THEME: Theme = {
  colors: {
    primary: 'rgb(227, 227, 227)',
    secondary: 'rgb(0, 0, 0)',
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
          states: {}
        },
      },
    },
  },
} as any;

describe('morfeo', () => {
  beforeAll(() => {
    morfeo.setTheme('default', THEME);
  });

  test('should generate the style for the element', () => {
    const element = document.createElement('div');
    morfeoStyle(element, { bg: 'primary' });
    const style = getComputedStyle(element);
    expect(style.backgroundColor).toBe(THEME.colors.primary);
  });

  test('should not crash if style is not specified', () => {
    const element = document.createElement('div');
    morfeoStyle(element);

    expect(element).toBeDefined();
  });

  test('should return a function that will remove the listener from the theme', () => {
    const element = document.createElement('div');
    const { destroy } = morfeoStyle(element);
    destroy();
    expect(typeof destroy).toBe('function');
  });

  test('should return a function that will update the style', () => {
    const element = document.createElement('div');
    const { update } = morfeoStyle(element);

    expect(typeof update).toBe('function');
  });

  test('should update the style by using the update function', () => {
    const element = document.createElement('div');
    const { update } = morfeoStyle(element, { bg: 'secondary' });

    update({ bg: 'primary' });

    const style = getComputedStyle(element);

    expect(style.backgroundColor).toBe(THEME.colors.primary);
  });

  test('should set the default properties to the element', () => {
    const element = document.createElement('div');
    morfeoStyle(element, {
      componentName: 'Box',
      variant: 'span',
      state: 'danger'
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
