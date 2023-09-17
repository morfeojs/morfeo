import { AllProperties, Property, Style } from '@morfeo/spec';
import { ThemeHandler } from './theme/createTheme';

export type ParserProperty = keyof AllProperties;

export interface ResolvedStyle {}

export interface ParserParams<P extends keyof Style> {
  value: Style[P];
  property: P;
  style?: Style;
  theme: ThemeHandler;
  parsers: {
    resolve: (style: Style) => ResolvedStyle;
  };
}

export type Parser<P extends ParserProperty = ParserProperty> = (
  params: ParserParams<P>,
) => ResolvedStyle;

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

export type PropertyResolverParams<P extends Property> = ParserParams<P> & {
  next: (
    params?: Pick<ParserParams<P>, 'property' | 'value' | 'style'>,
  ) => ResolvedStyle;
};

export type PropertyResolver = <P extends Property>(
  props: PropertyResolverParams<P>,
) => ResolvedStyle | void;
