import { Style, Property, AllProperties, allProperties } from '@morfeo/spec';
import { deepMerge } from '@morfeo/utils';
import {
  Parser,
  AllParsers,
  ResolvedStyle,
  PropertyResolver,
  PropertyResolverParams,
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

export function createParsers(themeInstance: ThemeHandler) {
  const context = new Map(Object.entries(INITIAL_PARSERS));
  let cache: any = {};
  let instance: any;
  let theme = themeInstance;
  const propertiesResolvers = new Set<PropertyResolver>();

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

  function onResolveProperty(callback: PropertyResolver) {
    propertiesResolvers.add(callback);

    return () => {
      propertiesResolvers.delete(callback);
    };
  }

  function callResolvers({
    property,
    value,
    style,
  }: Pick<
    PropertyResolverParams<typeof property>,
    'property' | 'value' | 'style'
  >) {
    const resolvers = Array.from(propertiesResolvers);

    return resolvers.reduce<undefined | Style>((acc, resolver) => {
      const next: PropertyResolverParams<typeof property>['next'] = params => {
        return resolveProperty({
          property: params?.property || property,
          value: params?.value || value,
          style: params?.style || acc || style,
        });
      };

      const params: PropertyResolverParams<typeof property> = {
        property,
        value,
        style: acc || style,
        next,
        parsers: instance,
        theme,
      };

      const result = resolver(params);

      if (!result) {
        return acc;
      }

      return { ...acc, ...result };
    }, undefined);
  }

  function resolveProperty({
    property,
    value,
    style,
  }: Pick<
    PropertyResolverParams<typeof property>,
    'property' | 'value' | 'style'
  >) {
    const result = callResolvers({ property, value, style });

    if (result) {
      return result;
    }

    const parser = context.get(property) as Parser<typeof property>;

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
    onResolveProperty,
    isThemeableProperty,
  };

  instance = parsers;

  return parsers;
}
