import { Style, component, getStyles } from '@morfeo/web';
import { splitStyles } from './splitStyles';

function createCSS() {
  const cache = new Map<string, string>();
  const alreadyInjectedClasses = new Set();

  function updateCache(className: string, css: string) {
    if (cache.has(className)) {
      return;
    }

    cache.set(className, css);
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
      const { classes, sheet } = getStyles({
        style: splittedStyle,
      });

      const css = sheet.toString();

      updateCache(classes.style, css);

      return `${acc} ${classes.style}`.trim();
    }, '');

    return className;
  }

  function get() {
    return Array.from(cache.entries()).reduce((acc, [className, css]) => {
      if (alreadyInjectedClasses.has(className)) {
        return acc;
      }

      alreadyInjectedClasses.add(className);

      return `${acc}\n${css}`;
    }, '');
  }

  function reset() {
    cache.clear();
    alreadyInjectedClasses.clear();
  }

  return { add, get, reset };
}

export const css = createCSS();
