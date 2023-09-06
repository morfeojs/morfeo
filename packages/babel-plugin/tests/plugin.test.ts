import morfeoBabelPlugin from '../src';
import * as babel from '@babel/core';
import { morfeo } from '@morfeo/web';
import { theme } from './theme';
import { CSSCollector } from '../src/utils';

function transform(code: string, tsx = false) {
  return babel.transform(code, {
    presets: tsx
      ? ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
      : [],
    plugins: [morfeoBabelPlugin],
    filename: 'fileName.tsx',
  });
}

describe('morfeoBabelPlugin', () => {
  beforeEach(() => {
    morfeo.setTheme('default', theme);
    CSSCollector.reset();
  });

  it('should inject the css into the metadata', () => {
    const result = transform(`import { morfeo } from "@morfeo/css";
      const Box = morfeo.component('Box', {
        bg: 'primary',
      });
    `);

    expect(result?.metadata?.morfeo?.styles).toHaveProperty(
      'bg-primary',
      expect.stringContaining('.bg-primary'),
    );
  });

  it('should use css variables to resolve functions of non-themeable properties', () => {
    const result = transform(`import { morfeo } from "@morfeo/css";
      const Container = morfeo.component('div', {
        display: props => props.display
      })
    `);

    const styles = result?.metadata?.morfeo?.styles;

    expect(styles?.['display-varopn--displayclsd']).toEqual(
      expect.stringContaining(`display: var(--display)`),
    );
  });

  it("should use create all the possible slice's classes to resolve functions of themeable properties", () => {
    const result = transform(`import { morfeo } from "@morfeo/css";
      const Container = morfeo.component('div', {
        bg: props => props.bg
      })
    `);

    const styles = result?.metadata?.morfeo?.styles;

    expect(styles).toHaveProperty(
      'bg-primary',
      expect.stringContaining('.bg-primary'),
    );
    expect(styles).toHaveProperty(
      'bg-secondary',
      expect.stringContaining('.bg-secondary'),
    );
  });

  it('should be able to resolve responsive values that comes from the theme', () => {
    const result = transform(`import { morfeo } from "@morfeo/css";
      const Container = morfeo.component('Box', {
        bg: {
          xs: props => props.bg,
        }
      })
    `);

    const styles = result?.metadata?.morfeo?.styles;

    expect(styles).toHaveProperty(
      'bg-xs-primary',
      expect.stringContaining(`.bg-xs-primary`),
    );
  });

  it('should handle functions used for component variants', () => {
    const result = transform(`import { morfeo } from "@morfeo/css";
      const Box = morfeo.component('Box', {
        variant: props => props.variant,
      });
    `);

    // style that comes from the base Box style
    expect(result?.metadata?.morfeo?.styles).toHaveProperty(
      'bg-primary',
      expect.stringContaining('bg-primary'),
    );

    // style that comes from the border Box variant style
    expect(result?.metadata?.morfeo?.styles).toHaveProperty(
      'border-strong',
      expect.stringContaining('border-strong'),
    );
  });

  it('should be able to resolve values that comes from multiple calls of morfeo.component', () => {
    const result = transform(`import { morfeo } from "@morfeo/css";
      const Component1 = morfeo.component('div', {
        bg: props => props.bg,
        m: "s"
      })

      const Component2 = morfeo.component('div', {
        bg: props.bg,
        color: "primary"
      })
    `);

    expect(result?.metadata?.morfeo?.styles).toHaveProperty('bg-primary');
    expect(result?.metadata?.morfeo?.styles).toHaveProperty('m-s');
    expect(result?.metadata?.morfeo?.styles).toHaveProperty('color-primary');
  });
});
