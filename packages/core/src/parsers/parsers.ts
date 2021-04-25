import { ThemeKey, allProperties, AllProperties } from '@morfeo/spec';
import { Parser, AllParsers, ParserParams, ResolverParams } from '../types';
import { baseParser } from './baseParser';
import { sizeParsers } from './sizes';
import { colorsParsers } from './colors';
import { spacesParsers } from './spaces';
import { shadowsParsers } from './shadows';
import { componentsParses } from './components';

const allPropertiesKeys = Object.keys(allProperties) as (keyof AllProperties)[];

const DEFAULT_PARSERS = allPropertiesKeys.reduce(
  (acc, key) => ({
    ...acc,
    [key]: props =>
      baseParser({
        ...props,
        property: key,
        scale: allProperties[key],
      }),
  }),
  {} as AllParsers,
);

const ADDITIONAL_PARSERS = {
  ...sizeParsers,
  ...colorsParsers,
  ...spacesParsers,
  ...shadowsParsers,
  ...componentsParses,
};

const INITIAL_PARSERS = {
  ...DEFAULT_PARSERS,
  ...ADDITIONAL_PARSERS,
};

function createParsers() {
  let context = { ...INITIAL_PARSERS };

  function get() {
    return context;
  }

  function add<T extends ThemeKey>(property: string, parser: Parser<T>) {
    context[property] = parser;
  }

  function reset() {
    context = { ...INITIAL_PARSERS };
  }

  // @TODO: type value based on property
  function resolveProperty({
    property,
    value,
    style,
  }: ParserParams<any, typeof property>) {
    const parser: Parser<any> = context[property];

    if (value && parser) {
      return parser({
        property,
        value,
        style,
      });
    }

    return { [property]: value };
  }

  function resolve({ style = {} }: ResolverParams): any {
    const { componentName, ...rest } = style;
    const properties = Object.keys(rest);

    const defaultComponentStyle = componentName
      ? resolveProperty({
          property: 'componentName',
          value: componentName,
          style,
        })
      : {};

    const parsedStyle = properties.reduce(
      (acc, property) => ({
        ...acc,
        ...resolveProperty({ property, value: style[property], style }),
      }),
      {},
    );

    return {
      ...defaultComponentStyle,
      ...parsedStyle,
    };
  }

  return {
    get,
    add,
    reset,
    resolve,
    resolveProperty,
  };
}

export const parsers = createParsers();
