import morfeoBabelPlugin from '../src';
import * as babel from '@babel/core';

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
  it('should not do anything in case "@morfeo/core" is not imported', () => {
    const testCode = `import { something } from "somewhere";
      const testVar = something();
    `;
    const result = transform(testCode);
    expect(result?.code).toContain('import { something } from "somewhere"');
    expect(result?.code).toContain('const testVar = something();');
  });

  describe('when "@morfeo/core" is imported', () => {
    it('should not to anything in case morfeo.parse is not used', () => {
      const testCode = `import { morfeo } from "@morfeo/core";
        const useStyles = () => {};
      `;
      const result = transform(testCode);
      expect(result?.code).toContain('const useStyles = () => {};');
    });

    it('should replace morfeo.parse', () => {
      const testCode = `import { morfeo } from "@morfeo/core";
        const useStyles = morfeo.parse({});
      `;
      const result = transform(testCode);
      expect(result?.code).not.toContain('morfeo.parse');
    });

    it('should replace morfeo.parse in jsx files if morfeo from "@morfeo/core" is imported', () => {
      const testCode = `
        import { morfeo } from "@morfeo/core";
        const useStyles: Record<string, string> = morfeo.parse({ button: {} });
        const Button = () => {
          const classes = useStyles();
          return <button className={classes.button} />
        };
      `;

      const result = transform(testCode, true);

      expect(result?.code).not.toContain('morfeo.parse');
    });

    describe('cleanup of the import', () => {
      it('should remove the import in case only morfeo.parse is used', () => {
        const testCode = `
          import { morfeo } from "@morfeo/core";
  
          const useStyles = morfeo.parse({ button: {} });
  
          const Button = () => {
            const classes = useStyles();
            return <button className={classes.button} />
          };
        `;

        const result = transform(testCode, true);

        expect(result?.code).not.toContain('@morfeo/core');
      });

      it('should not remove the import in case something else other then morfeo is imported', () => {
        const testCode = `
          import { morfeo, theme } from "@morfeo/core";
  
          const useStyles = morfeo.parse({ button: {} });

          theme.useTheme('dark')
  
          const Button = () => {
            const classes = useStyles();
            return <button className={classes.button} />
          };
        `;

        const result = transform(testCode, true);

        expect(result?.code).toContain('@morfeo/core');
      });

      it('should not remove the import in case something other methods of morfeo are used', () => {
        const testCode = `
          import { morfeo } from "@morfeo/core";
  
          const example = morfeo.useTheme('light');
          
          const useStyles = morfeo.parse({ button: {} });
  
          const Button = () => {
            const classes = useStyles();
            return <button className={classes.button} />
          };
        `;

        const result = transform(testCode, true);

        expect(result?.code).toContain('@morfeo/core');
      });
    });
  });
});
