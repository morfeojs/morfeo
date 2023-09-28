import type { Morfeo, Style, ThemeMetadata } from '@morfeo/web';
import preset from 'jss-preset-default';
import {
  create,
  CreateGenerateIdOptions,
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

export function createMorfeoJSS(morfeo: Morfeo) {
  const jss = create();

  const morfeoJSS: Plugin = {
    onProcessStyle(style) {
      return morfeo.parsers.resolve(style as Style);
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
    styles: Record<K, Style>,
    options?: StyleSheetFactoryOptions,
  ) {
    return get(styles, { jss, morfeo, ...options });
  }

  return { getStyles };
}
