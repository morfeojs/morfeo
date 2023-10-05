import type { Morfeo, MorfeoStyle, Theme, ThemeMetadata } from '@morfeo/web';
import preset from 'jss-preset-default';
import {
  create,
  JssOptions,
  Plugin,
  Rule,
  StyleSheetFactoryOptions,
} from 'jss';
import { generateClassName } from '@morfeo/utils';
import { getStyles as get } from './getStyles';

const defaultPreset = preset();

function createGenerateId(options?: ThemeMetadata) {
  return (rule: Rule) => {
    // @ts-expect-error
    const style = rule.style;
    return generateClassName(style, options);
  };
}

export function createMorfeoJSS<T extends Partial<Theme>>(morfeo: Morfeo<T>) {
  const jss = create();

  const morfeoJSS: Plugin = {
    onProcessStyle(style) {
      return morfeo.parsers.resolve(style as MorfeoStyle<T>);
    },
  };

  const morfeoJSSPreset: Partial<JssOptions> = {
    ...defaultPreset,
    createGenerateId: options =>
      createGenerateId({ ...morfeo.theme.getMetadata(), ...options }),
    plugins: [morfeoJSS, ...defaultPreset.plugins],
  };

  jss.setup(morfeoJSSPreset);

  function getStyles<K extends string>(
    styles: Record<K, MorfeoStyle<T>>,
    options?: StyleSheetFactoryOptions,
  ) {
    return get<K, T>(styles, { jss, morfeo, ...options });
  }

  return { getStyles };
}
