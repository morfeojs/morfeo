import {
  Style,
  Property,
  BreakPoint,
  AllProperties,
  allProperties,
} from '@morfeo/spec';
import { deepMerge } from '@morfeo/utils';
import { Parser, AllParsers, ParserParams, ResolvedStyle } from '../types';
import { theme } from '../theme';
import { baseParser } from './baseParser';
import { sizeParsers } from './sizes';
import { radiiParsers } from './radii';
import { colorsParsers } from './colors';
import { shadowsParsers } from './shadows';
import { bordersParsers } from './borders';
import { spacingsParsers } from './spacings';
import { componentsParses } from './components';
import { colorSchemasParsers } from './colorSchemasParsers';

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
  ...colorSchemasParsers,
};

const INITIAL_PARSERS = {
  ...DEFAULT_PARSERS,
  ...ADDITIONAL_PARSERS,
};

export function createParsers() {
  let context = new Map(Object.entries(INITIAL_PARSERS));
  let cache: any = {};

  function get() {
    return Object.fromEntries(context.entries());
  }

  function add<P extends Property>(property: P, parser: Parser<P>) {
    context.set(property, parser as any);
  }

  function resetCache() {
    cache = {};
  }

  function reset() {
    context = new Map(Object.entries(INITIAL_PARSERS));
    resetCache();
  }

  function resolveResponsiveProperty({
    property,
    value,
    style,
  }: ParserParams<typeof property>) {
    const keys = Object.keys(value);
    return keys.reduce((acc, breakpoint) => {
      const currentValue = resolveProperty({
        property,
        value: value[breakpoint],
        style: {
          ...style,
          [property]: value[breakpoint],
        },
      });

      if (breakpoint === 'default') {
        return {
          ...acc,
          ...currentValue,
        };
      }

      const mediaQuery = theme.resolveMediaQuery(breakpoint as BreakPoint);

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
    const parser = context.get(property) as Parser<typeof property>;

    if (theme.isResponsive(value)) {
      return resolveResponsiveProperty({
        property,
        value,
        style,
      });
    }

    if (typeof value === 'string' && value.includes('raw:')) {
      return resolveProperty({
        property,
        value: value.replace('raw:', '').trim(),
        style,
      });
    }

    if (value && parser) {
      return parser({
        property,
        value,
        style,
      });
    }

    if (typeof value === 'object') {
      return { [property]: resolve(value) };
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

      const hasStyleUncachebleProps = uncachebleProps.some(prop =>
        properties.includes(prop),
      );

      if (
        (typeof value === 'string' || typeof value === 'number') &&
        !hasStyleUncachebleProps
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
