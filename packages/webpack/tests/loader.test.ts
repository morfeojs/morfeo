import { LoaderContext } from 'webpack';
import morfeoLoader from '../src/loader';
import virtualModules from '../src/virtualModules';
import { MorfeoWebpackPluginOptions } from '../src/types';

let context: LoaderContext<MorfeoWebpackPluginOptions>;

jest.mock('@babel/core', () => ({
  transform: jest.fn().mockImplementation(() => ({
    code: '',
    metadata: {
      morfeo: 'some css',
    },
  })),
}));

const virtualModulesSpy = jest.spyOn(virtualModules, 'write');

describe('morfeoLoader', () => {
  beforeEach(() => {
    context = {
      getOptions: jest.fn().mockReturnValue({
        babel: {},
      }),
      callback: jest.fn(),
      cacheable: jest.fn(),
      resourcePath: '/some/path/to/the/fileName.js',
      _compiler: {
        // @ts-expect-error
        plugin: jest.fn(),
      },
    };
  });

  describe('when the code is not using morfeo', () => {
    it('should not do any changes in case @morfeo/core is not imported', () => {
      const testCode = `const someVar = 'some string'`;
      morfeoLoader.bind(context)(testCode, null);

      expect(context.callback).toHaveBeenCalledWith(null, testCode, null);
    });

    it('should not do any changes in case morfeo.parse is not used', () => {
      const testCode = `
        import something from "@morfeo/core";
        const someVar = 'some string'
      `;
      morfeoLoader.bind(context)(testCode, null);

      expect(context.callback).toHaveBeenCalledWith(null, testCode, null);
    });

    it('should not do any changes in case morfeo.parse is used but not imported', () => {
      const testCode = `
        import something from "somewhere";
        const useStyles = morfeo.parse({});
      `;
      morfeoLoader.bind(context)(testCode, null);

      expect(context.callback).toHaveBeenCalledWith(null, testCode, null);
    });
  });

  describe('when morfeo is imported and the build time parser is used', () => {
    it('should write the virtual css module and include it', () => {
      const testCode = `
        import { morfeo } from "@morfeo/core";
        const useStyles = morfeo.parse({
          button: {
            bg: 'primary'
          }
        });
        export { useStyles };
      `;

      morfeoLoader.bind(context)(testCode, null);

      expect(virtualModulesSpy).toHaveBeenCalledWith(
        context._compiler,
        expect.anything(),
        'some css',
      );
    });
  });

  describe('when some of the used modules throws an error', () => {
    it('should not to any change', () => {
      const testCode = `
        import { morfeo } from "@morfeo/core";
        const useStyles = morfeo.parse({
          button: {
            bg: 'primary'
          }
        });
        export { useStyles };
      `;

      const mockError = new Error('some exception');

      virtualModulesSpy.mockImplementation(() => {
        throw mockError;
      });

      morfeoLoader.bind(context)(testCode, null);

      expect(context.callback).toHaveBeenCalledWith(mockError, testCode, null);
    });
  });
});
