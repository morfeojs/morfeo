import { Style, getStyles } from '@morfeo/web';
import { readEnv, generateClassName } from '@morfeo/utils';
import { MorfeoBabelPluginOptions } from '../types';
import { orderStyles } from './orderStyles';
import { expandStyles } from './expandStyles';

function createCSS() {
  const cache = new Map<string, Style>();
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

  function updateCache(className: string, style: Style) {
    if (cache.has(className)) {
      return;
    }

    cache.set(className, style);
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
    const styles = orderStyles(Array.from(cache.entries()));

    return styles.reduce((acc, [className, style]) => {
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
  }

  function reset() {
    cache.clear();
  }

  return { get, expand, reset, setOptions };
}

export const css = createCSS();
