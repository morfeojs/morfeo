import * as MorfeoPlugins from '../src';
import { getMorfeoUnpluginOptions } from '../src/plugin';
import {
  MORFEO_UNPLUGIN_ID,
  SUPPORTED_EXTENSIONS,
  VIRTUAL_MODULES_FRAMEWORKS,
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
    // @ts-expect-error
    const pluginOptions = getMorfeoUnpluginOptions({}, { meta: 'webpack' });

    expect(
      pluginOptions.transformInclude(`fileName.${extension}`),
    ).toBeTruthy();
  });

  it.each(['wrong', 'html', 'jpeg', 'css'])(
    'should not recognize unsupported extensions like %s',
    extension => {
      // @ts-expect-error
      const pluginOptions = getMorfeoUnpluginOptions({}, { meta: 'webpack' });

      expect(
        pluginOptions.transformInclude(`fileName.${extension}`),
      ).toBeFalsy();
    },
  );

  it('should recognize the morfeo virtual module', () => {
    const pluginOptions = getMorfeoUnpluginOptions(
      {},
      // @ts-expect-error
      { meta: { framework: VIRTUAL_MODULES_FRAMEWORKS[0] } },
    );
    const moduleId = `${MORFEO_UNPLUGIN_ID}/somethingelse.css`;

    const withMorfeoVirtualModule = pluginOptions.resolveId(moduleId);
    const withoutMorfeoVirtualModule =
      pluginOptions.resolveId('another module');

    expect(withMorfeoVirtualModule).toBe(moduleId);
    expect(withoutMorfeoVirtualModule).toBe(null);
  });

  it('should call writer.get when the code contains reference to the morfeo virtual module', () => {
    const pluginOptions = getMorfeoUnpluginOptions(
      {},
      {
        // @ts-expect-error
        meta: { framework: VIRTUAL_MODULES_FRAMEWORKS[0] },
      },
    );
    const moduleId = `${MORFEO_UNPLUGIN_ID}/somethingelse.css`;

    const result = pluginOptions.load(moduleId);

    expect(writerSpy).toHaveBeenCalled();
    expect(result).toBe('some css');
  });

  it('should not call writer.get when the code does not contain any reference to the morfeo virtual module', () => {
    const pluginOptions = getMorfeoUnpluginOptions(
      {},
      {
        // @ts-expect-error
        meta: { framework: VIRTUAL_MODULES_FRAMEWORKS[0] },
      },
    );
    const moduleId = `a different module`;

    const result = pluginOptions.load(moduleId);

    expect(writerSpy).not.toHaveBeenCalled();
    expect(result).toBe(null);
  });
});
