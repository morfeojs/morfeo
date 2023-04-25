type Options = {
  minify?: boolean;
};

function createHandler() {
  const valuesCache = new Map<string, string>();
  const propertiesCache = new Map<string, string>();
  const chars = 'abcdefghijklmnopqrstuvwxyz';
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

  function getCombinations(length: number) {
    const combinations: string[] = [];

    function backtrack(combination: string, start: number) {
      if (combination.length === length) {
        combinations.push(combination);
        return;
      }

      for (let i = start; i < chars.length; i++) {
        backtrack(combination + chars[i], i);
      }
    }

    backtrack('', 0);

    return combinations;
  }

  function generateId(string: string, length = 1) {
    if (propertiesCache.has(string)) {
      return propertiesCache.get(string) as string;
    }
    const usedIds = Array.from(propertiesCache.values());
    const combinations = getCombinations(length);

    for (const combination of combinations) {
      if (!usedIds.includes(combination)) {
        propertiesCache.set(string, combination);
        return combination;
      }
    }

    return generateId(string, length + 1);
  }

  function escapeString(string: string) {
    if (valuesCache.has(string)) {
      return valuesCache.get(string) as string;
    }

    const replaced = Object.keys(symbolsMap).reduce(
      (acc, symbol) =>
        acc.replace(new RegExp('\\' + symbol, 'gi'), symbolsMap[symbol]),
      string,
    );

    const escaped = replaced.replace(/[^\w-]/gi, '');
    valuesCache.set(string, escaped);

    return escaped;
  }

  function makeRuleName(property: string, value: string, { minify }: Options) {
    const ruleName = `${escapeString(property)}-${escapeString(value)}`;
    if (minify) {
      return generateId(ruleName);
    }
    return ruleName;
  }

  function isObject(arg: unknown): arg is Record<string, unknown> {
    return typeof arg === 'object';
  }

  function generator(
    style: Record<string, unknown> = {},
    { minify }: Options = {},
  ) {
    const className = Object.keys(style).reduce((acc, curr) => {
      let value = style[curr];
      if (isObject(value)) {
        value = generator(value, { minify });
      }
      const prefix = acc ? '_' : '';
      const ruleName = makeRuleName(curr, value as string, { minify });
      return `${acc}${prefix}${ruleName}`;
    }, '');

    return className;
  }

  function reset() {
    valuesCache.clear();
    propertiesCache.clear();
  }

  return { generator, escapeString, reset };
}

export const stringsHandler = createHandler();

export const escapeString = stringsHandler.escapeString;

export const generateClassName = stringsHandler.generator;
