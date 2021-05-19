import { AllProperties, Style } from '@morfeo/spec';

export type ParserProperty = keyof AllProperties;

export interface ResolvedStyle {}

export interface ParserParams<P extends keyof Style> {
  value: Style[P];
  property: P;
  style?: Style;
}

// @TODO: type the return value based on the property
export type Parser<P extends ParserProperty = ParserProperty> = (
  params: ParserParams<P>,
) => Record<string, any>;

export type SliceParsers<
  M extends Record<string, string>,
  P extends ParserProperty = ParserProperty,
> = {
  [K in keyof M]: Parser<P>;
};

export type AllParsers = {
  [K in ParserProperty]: Parser<K>;
};
