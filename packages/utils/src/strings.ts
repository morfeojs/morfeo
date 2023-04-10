function createHandler() {
  const cache = new Map<string, string>();

  const symbolsMap = {
    '*': 'all',
    '.': 'dot',
    ',': 'comma',
    '>': 'grtr',
    '+': 'plus',
    '~': 'tld',
    '[': 'sqropn',
    ']': 'sqrclsd',
    '^': 'crt',
    $: 'dlr',
    '|': 'or',
    '(': 'opn',
    ')': 'clsd',
    '=': 'eql',
  };

  function escapeString(string: string) {
    if (cache.has(string)) {
      return cache.get(string) as string;
    }

    const replaced = Object.keys(symbolsMap).reduce(
      (acc, symbol) =>
        acc.replace(new RegExp('\\' + symbol, 'gi'), symbolsMap[symbol]),
      string,
    );

    const escaped = replaced.replace(/[^\w-]/gi, '');
    cache.set(string, escaped);

    return escaped;
  }

  function makeRuleName(property: string, value: string) {
    return `${escapeString(property)}-${escapeString(value)}`;
  }

  function isObject(arg: unknown): arg is Record<string, unknown> {
    return typeof arg === 'object';
  }

  function generator(style: Record<string, unknown> = {}) {
    const className = Object.keys(style).reduce((acc, curr) => {
      let value = style[curr];
      if (isObject(value)) {
        value = generator(value);
      }
      const prefix = acc ? '_' : '';
      const ruleName = makeRuleName(curr, value as string);
      return `${acc}${prefix}${ruleName}`;
    }, '');

    return className;
  }

  return { generator, escapeString };
}

const handler = createHandler();

export const escapeString = handler.escapeString;

export const generateClassName = handler.generator;
