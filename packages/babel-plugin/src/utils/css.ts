import { Style, component, getStyles } from '@morfeo/web';
import { splitStyles } from './splitStyles';
import { generateClassName } from '@morfeo/utils';
import { orderStyles } from './orderStyles';

function createCSS() {
  const cache = new Map<string, Style>();

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
        /* istanbul ignore next */
        minify: process.env.NODE_ENV === 'production',
      });

      updateCache(currentClassName, splittedStyle);

      return `${acc} ${currentClassName}`.trim();
    }, '');

    return className;
  }

  function get() {
    const styles = orderStyles(Array.from(cache.values()));

    return styles.reduce((acc, style) => {
      const { sheet } = getStyles({
        style,
      });

      const css = sheet.toString();

      return `${acc}\n${css}`;
    }, '');
  }

  function reset() {
    cache.clear();
  }

  return { add, get, reset };
}

export const css = createCSS();
