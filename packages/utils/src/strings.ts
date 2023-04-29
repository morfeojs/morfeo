import { EMOJI_CHARSET, REGULAR_CHARSET, SYMBOLS_MAP } from './constants';

type GeneratorOptions = {
  minify?: boolean;
  emojis?: boolean;
  classNamePrefix?: string;
};

type GenerateIdOptions = {
  emojis?: boolean;
  prefix?: string;
  length?: number;
};

function createHandler() {
  const valuesCache = new Map<string, string>();
  const propertiesCache = new Map<string, string>();

  function getCombinations(
    length: number,
    { emojis, prefix = '' }: Omit<GenerateIdOptions, 'length'>,
  ) {
    const chars = emojis ? EMOJI_CHARSET : REGULAR_CHARSET;
    let combinations = chars.map(char => prefix + char);

    for (let i = 1; i < length; i++) {
      combinations = combinations.flatMap(comb =>
        getCombinations(length - 1, { emojis, prefix: comb }),
      );
    }

    return combinations;
  }

  function generateId(
    string: string,
    { emojis, length = 1 }: GenerateIdOptions,
  ) {
    if (propertiesCache.has(string)) {
      return propertiesCache.get(string) as string;
    }
    const usedIds = Array.from(propertiesCache.values());
    const combinations = getCombinations(length, { emojis });

    for (const combination of combinations) {
      if (!usedIds.includes(combination)) {
        propertiesCache.set(string, combination);
        return combination;
      }
    }

    return generateId(string, { emojis, length: length + 1 });
  }

  function escapeString(string: string) {
    if (valuesCache.has(string)) {
      return valuesCache.get(string) as string;
    }

    const replaced = Object.keys(SYMBOLS_MAP).reduce(
      (acc, symbol) =>
        acc.replace(new RegExp('\\' + symbol, 'gi'), SYMBOLS_MAP[symbol]),
      string,
    );

    const escaped = replaced.replace(/[^\w-]/gi, '');
    valuesCache.set(string, escaped);

    return escaped;
  }

  function makeRuleName(
    property: string,
    value: string,
    { minify, emojis, classNamePrefix }: GeneratorOptions,
  ) {
    const className = classNamePrefix || '';
    if (minify) {
      return `${className}${generateId(`${property}-${value}`, { emojis })}`;
    }
    return `${className}${escapeString(property)}-${escapeString(value)}`;
  }

  function isObject(arg: unknown): arg is Record<string, unknown> {
    return typeof arg === 'object';
  }

  function generator(
    style: Record<string, unknown> = {},
    options: GeneratorOptions = {},
  ) {
    const className = Object.keys(style).reduce((acc, curr) => {
      let value = style[curr];
      if (isObject(value)) {
        value = generator(value, options);
      }
      const prefix = acc ? '_' : '';
      const ruleName = makeRuleName(curr, value as string, options);
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
