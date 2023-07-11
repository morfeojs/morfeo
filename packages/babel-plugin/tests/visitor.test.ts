import getVisitor from '../src/visitor';
import * as babel from '@babel/core';
import { morfeo } from '@morfeo/web';
import { theme } from './theme';

function transform(code: string, tsx = false) {
  return babel.transform(code, {
    presets: tsx
      ? ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
      : [],
    plugins: [
      {
        name: '@morfeo/babel-plugin',
        visitor: getVisitor(),
      },
    ],
    filename: 'fileName.tsx',
  });
}

beforeEach(() => {
  morfeo.setTheme('default', theme);
});

describe('general', () => {
  it('should not do anything in case "@morfeo/css" is not imported', () => {
    const testCode = `import { something } from "somewhere";
      const testVar = something();
    `;
    const result = transform(testCode);
    expect(result?.code).toContain('import { something } from "somewhere"');
    expect(result?.code).toContain('const testVar = something();');
  });

  it('should not to anything in case any api is used', () => {
    const testCode = `import "@morfeo/css";
      const useStyles = () => {};
    `;
    const result = transform(testCode);
    expect(result?.code).toContain('const useStyles = () => {};');
  });

  it('should remove the import of @morfeo/css', () => {
    const testCode = `import "@morfeo/css";`;

    const result = transform(testCode, true);

    expect(result?.code).not.toContain('@morfeo/css');
  });
});

describe('morfeo.css', () => {
  it('should replace the "css" function in tsx files if morfeo from "@morfeo/css" is imported', () => {
    const testCode = `
      import { morfeo } from "@morfeo/css";

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

    expect(result?.code).not.toContain('morfeo.css');
  });
});

describe('morfeo.component', () => {
  it('should replace the "morfeo.component" function', () => {
    const testCode = `import { morfeo } from "@morfeo/css";
        const Button = morfeo.component('button', {});
      `;
    const result = transform(testCode);
    expect(result?.code).not.toContain('morfeo.component');
  });
});
