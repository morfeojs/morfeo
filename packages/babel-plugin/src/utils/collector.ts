import { type Style, expandStyles } from '@morfeo/web';
import { getStyles } from '@morfeo/jss';
import { generateClassName, deepMerge } from '@morfeo/utils';
import type { MorfeoBabelPluginOptions } from '../types';

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

  function add(style: Style) {
    return expandStyles(style, {
      getClassName(s) {
        const className = generateClassName(s);
        updateCache(className, s);
        return className;
      },
    });
  }

  function get() {
    const globalCss = Array.from(globalStylesCache.entries()).reduce(
      (acc, [selector, style]) => {
        const { sheet } = getStyles({
          '@global': { [selector]: style },
        });

        const css = sheet.toString();

        return { ...acc, [selector]: css };
      },
      {},
    );

    const computedStyles = Array.from(stylesCache.entries());

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

      return { ...acc, [className]: css };
    }, {});

    return { globalStyles: globalCss, styles: computedCss };
  }

  function reset() {
    stylesCache.clear();
  }

  return { get, add, addGlobal, reset, setOptions };
}

export const CSSCollector = createCollector();
