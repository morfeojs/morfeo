import morfeoBabelPlugin from '../src';
import * as babel from '@babel/core';
import { morfeo } from '@morfeo/web';
import { theme } from './theme';

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
  });

  it('should inject the css into the metadata', () => {
    const result = transform(`import { morfeo } from "@morfeo/core";
      export const useStyles = morfeo.parse({
        button: {
          bg: 'primary',
        },
      })
    `);

    expect(result?.metadata?.morfeo).toContain(
      `background-color: ${theme.colors.primary}`,
    );
  });

  it('should not inject the css into the metadata if it was previously generated', () => {
    const testCode = `import { morfeo } from "@morfeo/core";
    export const useStyles = morfeo.parse({
      button: {
        color: 'primary',
      },
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
});
