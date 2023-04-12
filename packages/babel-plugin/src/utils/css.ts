import { Style, getStyles } from '@morfeo/web';

function createCSS() {
  const cache = new Map<string, string>();
  const alreadyInjectedClasses = new Set();

  function updateCache(className: string, css: string) {
    if (cache.has(className)) {
      return;
    }

    cache.set(className, css);
  }

  function add(style: Style) {
    const { classes, sheet } = getStyles({
      style,
    });
    const css = sheet.toString();
    const className = classes.style;

    updateCache(className, css);

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
