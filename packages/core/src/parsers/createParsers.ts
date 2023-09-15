import {
  Style,
  Property,
  BreakPoint,
  AllProperties,
  allProperties,
} from '@morfeo/spec';
import { deepMerge } from '@morfeo/utils';
import {
  Parser,
  AllParsers,
  ParserParams,
  ResolvedStyle,
  ThemeMode,
} from '../types';
import { baseParser } from './baseParser';
import { sizeParsers } from './sizes';
import { radiiParsers } from './radii';
import { colorsParsers } from './colors';
import { shadowsParsers } from './shadows';
import { bordersParsers } from './borders';
import { spacingsParsers } from './spacings';
import { componentsParses } from './components';
import { ThemeHandler } from '../theme/createTheme';

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

type PropertyResolverParams<P extends Property> = Omit<
  ParserParams<P>,
  'parsers' | 'theme'
>;

export function createParsers(themeInstance: ThemeHandler) {
  const context = new Map(Object.entries(INITIAL_PARSERS));
  let cache: any = {};
  let instance: any;
  let theme = themeInstance;

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
    context.clear();

    Object.entries(INITIAL_PARSERS).forEach(([property, resolver]) =>
      context.set(property, resolver),
    );

    resetCache();
  }

  function isThemeableProperty(property: string): property is Property {
    return !!context.has(property);
  }

  function resolveResponsiveProperty({
    property,
    value,
    style,
  }: PropertyResolverParams<typeof property>) {
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

  function resolveMultiThemeProperty({
    property,
    value,
    style,
  }: PropertyResolverParams<typeof property>) {
    const keys = Object.keys(value);
    return keys.reduce((acc, mode) => {
      const currentValue = resolveProperty({
        property,
        value: value[mode],
        style: {
          ...style,
          [property]: value[mode],
        },
      });

      const mediaQuery = theme.resolveMultiThemeValue(mode as ThemeMode);

      return {
        ...acc,
        [mediaQuery]: currentValue,
      };
    }, {});
  }

  function resolveProperty({
    property,
    value,
    style,
  }: PropertyResolverParams<typeof property>) {
    const parser = context.get(property) as Parser<typeof property>;

    if (theme.isMultiThemeValue(value)) {
      return resolveMultiThemeProperty({
        property,
        value,
        style,
      });
    }

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
        parsers: instance,
        theme,
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

      if (typeof value === 'string' || typeof value === 'number') {
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
    isThemeableProperty,
  };

  instance = parsers;

  return parsers;
}
