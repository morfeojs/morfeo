import getVisitor from '../src/visitor';
import * as babel from '@babel/core';
import { morfeo } from '@morfeo/web';
import { theme } from './theme';

function transform(code: string, tsx: boolean = false) {
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

describe('visitor', () => {
  beforeEach(() => {
    morfeo.setTheme('default', theme);
  });

  it('should not do anything in case "@morfeo/css" is not imported', () => {
    const testCode = `import { something } from "somewhere";
      const testVar = something();
    `;
    const result = transform(testCode);
    expect(result?.code).toContain('import { something } from "somewhere"');
    expect(result?.code).toContain('const testVar = something();');
  });

  describe('when "@morfeo/css" is imported', () => {
    it('should not to anything in case "createUseComponent" is not used', () => {
      const testCode = `import { createUseComponent } from "@morfeo/css";
        const useStyles = () => {};
      `;
      const result = transform(testCode);
      expect(result?.code).toContain('const useStyles = () => {};');
    });

    it('should replace the "createUseComponent" function', () => {
      const testCode = `import { createUseComponent } from "@morfeo/css";
        const useStyles = createUseComponent({});
      `;
      const result = transform(testCode);
      expect(result?.code).not.toContain('createUseComponent');
    });

    it('should replace the "createUseComponent" function in tsx files if morfeo from "@morfeo/css" is imported', () => {
      const testCode = `
        import { createUseComponent } from "@morfeo/css";
        const useStyles: () => Record<string, string> = createUseComponent({});
        const Button = () => {
          const classes = useStyles();
          return <button className={classes.button} />
        };
      `;

      const result = transform(testCode, true);

      expect(result?.code).not.toContain('createUseComponent');
    });

    describe('cleanup of the import', () => {
      it('should remove the import of @morfeo/css', () => {
        const testCode = `
          import { createUseComponent } from "@morfeo/css";
  
          const useStyles = createUseComponent({});
  
          const Button = () => {
            const classes = useStyles();
            return <button className={classes.button} />
          };
        `;

        const result = transform(testCode, true);

        expect(result?.code).not.toContain('@morfeo/css');
      });
    });
  });
});
