import { type Style, getStyles } from '@morfeo/web';
import { readEnv, generateClassName, deepMerge } from '@morfeo/utils';
import type { MorfeoBabelPluginOptions } from '../types';
import { orderStyles } from './orderStyles';
import { expandStyles } from './expandStyles';

function createCollector() {
  const stylesCache = new Map<string, Style>();
  const globalStylesCache = new Map<string, Style>();
  let options: MorfeoBabelPluginOptions = {
    emojis: false,
    classNamePrefix: '',
  };

  function setOptions(pluginOptions: MorfeoBabelPluginOptions) {
    options = {
      ...options,
      ...pluginOptions,
    };
  }

  function addGlobal(styles: Record<string, Style>) {
    const keys = Object.keys(styles);

    keys.forEach(key => {
      const oldStyle = globalStylesCache.get(key) || {};
      globalStylesCache.set(key, deepMerge(oldStyle, styles[key]));
    });
  }

  function updateCache(className: string, style: Style) {
    if (stylesCache.has(className)) {
      return;
    }

    stylesCache.set(className, style);
  }

  function expand(style: Style) {
    function getClassName(s: Style) {
      const className = generateClassName(s, {
        minify: readEnv('NODE_ENV', 'development') === 'production',
        emojis: options.emojis,
        classNamePrefix: options.classNamePrefix,
      });

      updateCache(className, s);

      return className;
    }

    return expandStyles(style, { getClassName });
  }

  function get() {
    const globalCss = Array.from(globalStylesCache.entries()).reduce(
      (acc, [selector, style]) => {
        const { sheet } = getStyles({
          '@global': { [selector]: style },
        });

        const css = sheet.toString();

        return `${acc}\n${css}`;
      },
      '',
    );

    const computedStyles = orderStyles(Array.from(stylesCache.entries()));

    const computedCss = computedStyles.reduce((acc, [className, style]) => {
      const { sheet } = getStyles(
        {
          style,
        },
        {
          generateId: () => className,
        },
      );

      const css = sheet.toString();

      return `${acc}\n${css}`;
    }, '');

    return [globalCss, computedCss].filter(Boolean).join('\n');
  }

  function reset() {
    stylesCache.clear();
  }

  return { get, addGlobal, expand, reset, setOptions };
}

export const CSSCollector = createCollector();
