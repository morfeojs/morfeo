/**
 * @jest-environment jsdom
 */
import { Theme, theme } from '@morfeo/core';
import { getStyleSheet } from '../src';
import { getKeyFramesStyle } from '../src/getKeyframesStyle';

const THEME: Theme = {
  colors: {
    primary: '#e3e3e3',
    secondary: '#000',
  },
  keyframes: {
    default: {
      from: {
        bg: 'primary',
      },
      to: {
        bg: 'secondary',
      },
    },
  },
  animations: {
    default: {
      name: 'default',
    },
  },
} as any;

describe('keyframes', () => {
  beforeEach(() => {
    theme.set(THEME);
  });

  test('should generate the style element', () => {
    getStyleSheet({
      className: {
        // @ts-expect-error
        animation: 'default',
      },
    });

    const styleElement = document.querySelector('style[data-global="morfeo"]');

    expect(styleElement).toBeDefined();
  });

  test('the style element should contain the keyframes', () => {
    getStyleSheet({
      className: {
        // @ts-expect-error
        animation: 'default',
      },
    });
    const styleElement = document.querySelector('style[data-global="morfeo"]');

    expect(styleElement?.innerHTML).toContain(`@keyframes default {
  from {
    background-color: #e3e3e3;
  }
  to {
    background-color: #000;
  }
}`);
  });
});

describe('getKeyframesStyle', () => {
  test('should return undefined in case no keyframes exists', () => {
    theme.reset();
    // @ts-expect-error
    theme.set({ keyframes: {} });

    expect(getKeyFramesStyle(theme.get())).not.toBeDefined();
  });

  test('should return return the cached value', () => {
    theme.set(THEME);
    const firstValue = getKeyFramesStyle(theme.get());
    const secondValue = getKeyFramesStyle(theme.get());
    /**
     * Checking if the references of the objects are the same
     * so we are sure that is the cached value and not
     * an object with the same shape
     */
    expect(firstValue).toBe(secondValue);
    expect(typeof firstValue).toBe('object');
    expect(typeof secondValue).toBe('object');
  });
});
