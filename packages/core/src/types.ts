import { AllProperties, Property, Style } from '@morfeo/spec';
import { ThemeHandler } from './theme/createTheme';

export type ParserProperty = keyof AllProperties;

export interface ResolvedStyle {}

export interface ParserParams<P extends keyof Style> {
  value: Style[P];
  property: P;
  style?: Style;
  theme: ThemeHandler;
  instance: {
    resolve: (style: Style) => ResolvedStyle;
  };
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

export type ParsersContext = {
  [P in Property]: Parser<P>;
};

export type ThemeMode = 'light' | 'dark';
