import { AllProperties, Components, Theme, ThemeKey } from '@morfeo/spec';

export type ParserProperty = keyof AllProperties;

type ComponentStyle = {
  componentName?: keyof Components;
  variant?: string;
};

type Style = {
  [K in ParserProperty]?: keyof Theme[AllProperties[K]];
} &
  ComponentStyle;

export type ResolverParams = {
  style?: Style;
};

export type ParserParams<T extends ThemeKey, P extends string> = {
  value: keyof Theme[T];
  property: P;
  style?: Style;
};

// @TODO: type the return value based on the property
export type Parser<T extends ThemeKey, P extends string = ParserProperty> = (
  params: ParserParams<T, P>,
) => Record<string, any>;

export type SliceParsers<
  M extends Record<string, string>,
  T extends ThemeKey,
  P extends string = ParserProperty
> = {
  [K in keyof M]: Parser<T, P>;
};

export type AllParsers = {
  [K in keyof AllProperties]: Parser<AllProperties[K], K>;
};
