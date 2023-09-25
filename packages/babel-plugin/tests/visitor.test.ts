import * as babel from '@babel/core';
import { createMorfeo } from '@morfeo/web';
import { theme } from './theme';
import { CSSCollector } from '../src/utils';
import morfeoBabelPlugin from '../src';

const morfeo = createMorfeo();

function transform(code: string, tsx = false) {
  return babel.transform(code, {
    presets: tsx ? ['@babel/preset-env', '@babel/preset-typescript'] : [],
    plugins: ['@babel/plugin-syntax-jsx', [morfeoBabelPlugin, { morfeo }]],
    filename: 'fileName.tsx',
  });
}

beforeEach(() => {
  morfeo.theme.set(theme);
  CSSCollector.reset();
});

describe('general', () => {
  it('should not inject any css into the metadata in case "@morfeo/web" is not imported', () => {
    const testCode = `import { something } from "somewhere";
      const testVar = something();
    `;
    const result = transform(testCode);

    expect(result?.metadata?.morfeo).not.toBeDefined();
  });

  it('should not inject any css into the metadata in case any api is used', () => {
    const testCode = `import "path/to/morfeo";
      const useStyles = () => {};
    `;
    const result = transform(testCode);

    expect(result?.metadata?.morfeo).not.toBeDefined();
  });
});

describe('morfeo.css', () => {
  it('should inject css into the metadata', () => {
    const testCode = `
      import { morfeo } from "path/to/morfeo";

      const classes = morfeo.css({
        button: {
          bg: 'primary'
        }
      });

      const Button = () => {
        return <button className={classes('button')} />
      };
    `;

    const result = transform(testCode, true);

    expect(result?.metadata?.morfeo).toEqual({
      globalStyles: {},
      styles: {
        'bg-primary': expect.stringContaining('.bg-primary'),
      },
    });
  });
});

describe('morfeo.component', () => {
  it('should inject css into the metadata', () => {
    const testCode = `import { morfeo } from "path/to/morfeo";
        const Button = morfeo.component('button', {
          bg: 'primary'
        });
      `;
    const result = transform(testCode);

    expect(result?.metadata?.morfeo).toEqual({
      globalStyles: {},
      styles: {
        'bg-primary': expect.stringContaining('.bg-primary'),
      },
    });
  });
});

describe('morfeo.global', () => {
  it('should inject css into the metadata', () => {
    const testCode = `import { morfeo } from "path/to/morfeo";
        morfeo.global('button', {
          body: {
            padding: 'raw:10px'
          }
        });
      `;
    const result = transform(testCode);

    expect(result?.metadata?.morfeo).toEqual({
      globalStyles: {
        body: expect.stringContaining('padding: 10px'),
      },
      styles: {},
    });
  });
});
