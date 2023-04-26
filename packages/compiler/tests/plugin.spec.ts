import * as MorfeoPlugins from '../src';
import { getMorfeoUnpluginOptions } from '../src/plugin';
import {
  SUPPORTED_EXTENSIONS,
  VIRTUAL_MODULES_FRAMEWORKS,
  VIRTUAL_MORFEO_CSS,
  writer,
} from '../src/utils';

const writerSpy = jest
  .spyOn(writer, 'get')
  .mockImplementation(() => 'some css');

describe('MorfeoPlugins', () => {
  beforeEach(() => {
    writerSpy.mockClear();
  });

  it('should expose a plugin for each supported framework', () => {
    expect(MorfeoPlugins.MorfeoVitePlugin).toBeDefined();
    expect(MorfeoPlugins.MorfeoRollupPlugin).toBeDefined();
    expect(MorfeoPlugins.MorfeoWebpackPlugin).toBeDefined();
    expect(MorfeoPlugins.MorfeoRspackPlugin).toBeDefined();
    expect(MorfeoPlugins.MorfeoEsbuildPlugin).toBeDefined();
  });

  it.each(SUPPORTED_EXTENSIONS)('should recognize %s extensions', extension => {
    const pluginOptions = getMorfeoUnpluginOptions({}, {
      meta: 'webpack',
    } as any);

    expect(
      pluginOptions.transformInclude(`fileName.${extension}`),
    ).toBeTruthy();
  });

  it.each(['wrong', 'html', 'jpeg', 'css'])(
    'should not recognize unsupported extensions like %s',
    extension => {
      const pluginOptions = getMorfeoUnpluginOptions({}, {
        meta: 'webpack',
      } as any);

      expect(
        pluginOptions.transformInclude(`fileName.${extension}`),
      ).toBeFalsy();
    },
  );

  it('should recognize the morfeo virtual module', () => {
    const pluginOptions = getMorfeoUnpluginOptions({}, {
      meta: { framework: VIRTUAL_MODULES_FRAMEWORKS[0] },
    } as any);
    const moduleId = `${VIRTUAL_MORFEO_CSS}/somethingelse.css`;

    const withMorfeoVirtualModule = pluginOptions.resolveId(moduleId);
    const withoutMorfeoVirtualModule =
      pluginOptions.resolveId('another module');

    expect(withMorfeoVirtualModule).toBe(moduleId);
    expect(withoutMorfeoVirtualModule).toBe(null);
  });

  it('should call writer.get when the code contains reference to the morfeo virtual module', () => {
    const pluginOptions = getMorfeoUnpluginOptions({}, {
      meta: { framework: VIRTUAL_MODULES_FRAMEWORKS[0] },
    } as any);
    const moduleId = `${VIRTUAL_MORFEO_CSS}/somethingelse.css`;

    const result = pluginOptions.load(moduleId);

    expect(writerSpy).toHaveBeenCalled();
    expect(result).toBe('some css');
  });

  it('should not call writer.get when the code does not contain any reference to the morfeo virtual module', () => {
    const pluginOptions = getMorfeoUnpluginOptions({}, {
      meta: { framework: VIRTUAL_MODULES_FRAMEWORKS[0] },
    } as any);
    const moduleId = `a different module`;

    const result = pluginOptions.load(moduleId);

    expect(writerSpy).not.toHaveBeenCalled();
    expect(result).toBe(null);
  });
});
