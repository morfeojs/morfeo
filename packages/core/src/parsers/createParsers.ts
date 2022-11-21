import {
  Style,
  Property,
  BreakPoint,
  AllProperties,
  allProperties,
} from '@morfeo/spec';
import {
  Parser,
  AllParsers,
  ParserParams,
  ResolvedStyle,
  ParsersContext,
} from '../types';
import { theme } from '../theme';
import { deepMerge } from '../utils';
import { baseParser } from './baseParser';
import { sizeParsers } from './sizes';
import { radiiParsers } from './radii';
import { colorsParsers } from './colors';
import { shadowsParsers } from './shadows';
import { bordersParsers } from './borders';
import { spacingsParsers } from './spacings';
import { componentsParses } from './components';

const allPropertiesKeys = Object.keys(allProperties) as (keyof AllProperties)[];

const uncachebleProps = ['colorSchema'];

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
  ...radiiParsers,
  ...colorsParsers,
  ...shadowsParsers,
  ...bordersParsers,
  ...spacingsParsers,
  ...componentsParses,
};

const INITIAL_PARSERS = {
  ...DEFAULT_PARSERS,
  ...ADDITIONAL_PARSERS,
};

export function createParsers() {
  let context = { ...INITIAL_PARSERS } as any as ParsersContext;
  let cache: any = {};

  function get() {
    return context;
  }

  function add<P extends Property>(property: P, parser: Parser<P>) {
    context[property as any] = parser;
  }

  function resetCache() {
    cache = {};
  }

  function reset() {
    context = { ...INITIAL_PARSERS } as any as ParsersContext;
    resetCache();
  }

  function resolveResponsiveProperty({
    property,
    value,
    style,
  }: ParserParams<typeof property>) {
    const keys = Object.keys(value);
    return keys.reduce((acc, breakpoint) => {
      const mediaQuery = theme.resolveMediaQuery(breakpoint as BreakPoint);

      const currentValue = resolveProperty({
        property,
        value: value[breakpoint],
        style: {
          ...style,
          [property]: value[breakpoint],
        },
      });

      return {
        ...acc,
        [mediaQuery]: {
          ...acc[mediaQuery],
          ...currentValue,
        },
      };
    }, {});
  }

  function resolveProperty({
    property,
    value,
    style,
  }: ParserParams<typeof property>) {
    const parser: Parser<typeof property> = context[property];
    if (value && parser) {
      if (theme.isResponsive(value)) {
        return resolveResponsiveProperty({
          property,
          value,
          style,
        });
      }
      return parser({
        property,
        value,
        style,
      });
    }

    return { [property]: value };
  }

  function resolve(style: Style): ResolvedStyle {
    const { componentName, ...rest } = style;
    const properties = Object.keys(rest);

    const defaultComponentStyle = componentName
      ? resolveProperty({
          property: 'componentName',
          value: componentName,
          style,
        })
      : undefined;

    function getPropertyStyle(property: string) {
      const value = style[property];
      const params = {
        property,
        value,
        style,
      };
      const hasStyleUncachebleProps = !uncachebleProps.some(prop =>
        Object.keys(style).includes(prop),
      );
      if (
        (typeof value === 'string' || typeof value === 'number') &&
        hasStyleUncachebleProps
      ) {
        if (cache[property] === undefined) {
          cache[property] = {};
        }
        if (cache[property][value] !== undefined) {
          return cache[property][value];
        }
        cache[property][value] = resolveProperty(params);
        return cache[property][value];
      }

      return resolveProperty(params);
    }

    const parsedStyle = properties.reduce((acc, property) => {
      return deepMerge(acc, getPropertyStyle(property));
    }, {});

    return defaultComponentStyle
      ? deepMerge(defaultComponentStyle, parsedStyle)
      : parsedStyle;
  }

  theme.subscribe(resetCache);

  const parsers = {
    get,
    add,
    reset,
    resolve,
    resolveProperty,
  };

  globalThis.__MORFEO_PARSERS = parsers;

  return parsers;
}
