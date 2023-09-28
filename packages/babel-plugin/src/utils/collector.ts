import { type Style, expandStyles } from '@morfeo/web';
import { createMorfeoJSS } from '@morfeo/jss';
import { generateClassName, deepMerge } from '@morfeo/utils';
import type { MorfeoBabelPluginOptions } from '../types';

function createCollector() {
  const stylesCache = new Map<string, Style>();
  const globalStylesCache = new Map<string, Style>();
  let morfeoJSS: ReturnType<typeof createMorfeoJSS>;

  let options: MorfeoBabelPluginOptions;

  function setOptions(pluginOptions: MorfeoBabelPluginOptions) {
    options = {
      ...pluginOptions,
    };
    morfeoJSS = createMorfeoJSS(options.morfeo);
  }

  function addGlobal(styles: Record<string, Style>) {
    const keys = Object.keys(styles);

    keys.forEach(key => {
      const oldStyle = globalStylesCache.get(key) || {};
      globalStylesCache.set(key, deepMerge(oldStyle, styles[key]));
    });
  }

  function getCSS(styles, jssOptions = {}) {
    const { sheet } = morfeoJSS.getStyles(styles, {
      ...jssOptions,
    });

    return sheet.toString();
  }

  function updateCache(className: string, style: Style) {
    if (stylesCache.has(className)) {
      return;
    }

    stylesCache.set(className, style);
  }

  function add(style: Style) {
    return expandStyles(options.morfeo, style, {
      getClassName(s) {
        const className = generateClassName(s, {
          prefix: options.morfeo.theme.getMetadata().prefix,
        });
        updateCache(className, s);
        return className;
      },
    });
  }

  function get() {
    const globalCss = Array.from(globalStylesCache.entries()).reduce(
      (acc, [selector, style]) => {
        const css = getCSS({
          '@global': { [selector]: style },
        });

        return { ...acc, [selector]: css };
      },
      {},
    );

    const computedStyles = Array.from(stylesCache.entries());

    const computedCss = computedStyles.reduce((acc, [className, style]) => {
      const css = getCSS(
        {
          style,
        },
        {
          generateId: () => className,
        },
      );

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
