function createCSS() {
  const cache = new Map<string, string>();
  const alreadyInjectedClasses = new Set();

  function add(className: string, css: string) {
    if (cache.has(className)) {
      return;
    }

    cache.set(className, css);
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

  return { add, get };
}

export const css = createCSS();
