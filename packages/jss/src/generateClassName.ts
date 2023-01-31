function getClassNameGenerator() {
  const cache = new Map<string, string>();

  function escapeString(string: string) {
    if (cache.has(string)) {
      return cache.get(string);
    }

    const escaped = string.replace(/[^\w\s-]/gi, '').trim();
    cache.set(string, escaped);

    return escaped;
  }

  function makeRuleName(property: string, value: string) {
    return `${escapeString(property)}-${escapeString(value)}`;
  }

  function generator(style: Record<string, any> = {}) {
    const className = Object.keys(style).reduce((acc, curr) => {
      let value = style[curr];
      if (typeof value !== 'string') {
        value = generator(value);
      }
      const prefix = acc ? '_' : '';
      const ruleName = makeRuleName(curr, value);
      return `${acc}${prefix}${ruleName}`;
    }, '');

    return className;
  }

  return generator;
}

export const generateClassName = getClassNameGenerator();
