import { SYMBOLS_MAP } from './constants';

type GeneratorOptions = {
  prefix?: string;
};

function createHandler() {
  const valuesCache = new Map<string, string>();
  const propertiesCache = new Map<string, string>();

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
    { prefix }: GeneratorOptions,
  ) {
    const className = prefix || '';
    return `${className}${escapeString(property)}-${escapeString(value)}`;
  }

  function isObject(arg: unknown): arg is Record<string, unknown> {
    return typeof arg === 'object';
  }

  function generator(style: object = {}, options: GeneratorOptions = {}) {
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
