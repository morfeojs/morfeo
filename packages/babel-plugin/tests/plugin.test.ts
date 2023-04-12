import morfeoBabelPlugin from '../src';
import * as babel from '@babel/core';
import { morfeo } from '@morfeo/web';
import { theme } from './theme';
import { css } from '../src/utils';

function transform(code: string, tsx: boolean = false) {
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
    css.reset();
  });

  it('should inject the css into the metadata', () => {
    const result = transform(`import { createUseComponent } from "@morfeo/css";
      const useStyle = createUseComponent({
        bg: 'primary',
      })
    `);

    expect(result?.metadata?.morfeo).toContain(
      `background-color: ${theme.colors.primary}`,
    );
  });

  it('should not inject the css into the metadata if it was previously generated', () => {
    const testCode = `import { createUseComponent } from "@morfeo/css";
    const useStyle = createUseComponent({
      color: 'primary',
    })
  `;

    const firstResult = transform(testCode);
    const secondResult = transform(testCode);

    expect(firstResult?.metadata?.morfeo).toContain(
      `color: ${theme.colors.primary}`,
    );
    expect(secondResult?.metadata?.morfeo).not.toContain(
      `color: ${theme.colors.primary}`,
    );
  });

  it('should use css variable to resolve functions of non-themeable properties', () => {
    const result = transform(`import { createUseComponent } from "@morfeo/css";
      const useStyle = createUseComponent({
        display: props => props.display
      })
    `);

    expect(result?.metadata?.morfeo).toContain(`display: var(--display)`);
  });

  it("should use create all the possible slice's classes to resolve functions of themeable properties", () => {
    const result = transform(`import { createUseComponent } from "@morfeo/css";
      const useStyle = createUseComponent({
        bg: props => props.bg
      })
    `);

    expect(result?.metadata?.morfeo).toContain(`.bg-primary`);
    expect(result?.metadata?.morfeo).toContain(`.bg-secondary`);
  });

  it('should be able to resolve responsive values that comes from the theme', () => {
    const result = transform(`import { createUseComponent } from "@morfeo/css";
      const useStyle = createUseComponent({
        bg: {
          xs: props => props.bg
        }
      })
    `);

    expect(result?.metadata?.morfeo).toContain(`.bg-xs-primary`);
  });

  it('should handle functions used for component variants', () => {
    const result = transform(`import { createUseComponent } from "@morfeo/css";
      const useStyle = createUseComponent({
        componentName: "Box",
        variant: props => props.variant,
      })
    `);

    Object.keys(theme.components.Box.variants).forEach(variant => {
      expect(result?.code).toContain(variant);
    });
  });

  it('should handle functions used for component states', () => {
    const result = transform(`import { createUseComponent } from "@morfeo/css";
      const useStyle = createUseComponent({
        componentName: "Box",
        state: props => props.state,
      })
    `);

    Object.keys(theme.components.Box.states).forEach(state => {
      expect(result?.code).toContain(state);
    });
  });

  it('should be able to resolve values that comes from multiple calls of createUseComponent', () => {
    const result = transform(`import { createUseComponent } from "@morfeo/css";
      const useStyle1 = createUseComponent({
        bg: props => props.bg,
        m: "s"
      })

      const useStyle2 = createUseComponent({
        bg: props.bg,
        color: "primary"
      })
    `);

    expect(result?.metadata?.morfeo).toContain(`.bg-primary`);
    expect(result?.metadata?.morfeo).toContain(`.m-s`);
    expect(result?.metadata?.morfeo).toContain(`.color-primary`);
    expect(result?.code).toContain(`useStyle1`);
    expect(result?.code).toContain(`useStyle2`);
  });
});
