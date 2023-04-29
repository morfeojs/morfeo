import { Style, component, getStyles } from '@morfeo/web';
import { readEnv, generateClassName } from '@morfeo/utils';
import { MorfeoBabelPluginOptions } from '../types';
import { splitStyles } from './splitStyles';
import { orderStyles } from './orderStyles';

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

  function add({ componentName, variant, state, ...style }: Style) {
    const componentStyle = componentName
      ? component(componentName, variant, state).getStyle()
      : {};
    const splittedStyles = splitStyles({
      ...componentStyle,
      ...style,
    });

    const className = splittedStyles.reduce<string>((acc, splittedStyle) => {
      const currentClassName = generateClassName(splittedStyle, {
        minify: readEnv('NODE_ENV', 'development') === 'production',
        emojis: options.emojis,
        classNamePrefix: options.classNamePrefix,
      });

      updateCache(currentClassName, splittedStyle);

      return `${acc} ${currentClassName}`.trim();
    }, '');

    return className;
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

  return { add, get, reset, setOptions };
}

export const css = createCSS();
