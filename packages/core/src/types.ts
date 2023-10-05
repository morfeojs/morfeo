import { AllProperties, Property, Theme, MorfeoStyle } from '@morfeo/spec';
import { ThemeHandler } from './theme/createTheme';

export type ParserProperty = keyof AllProperties;

export interface ResolvedStyle {}

export interface ParserParams<
  T extends Partial<Theme>,
  P extends keyof MorfeoStyle<T>,
> {
  value: MorfeoStyle<Theme>[P];
  property: P;
  style?: MorfeoStyle<T>;
  theme: ThemeHandler<T>;
  parsers: {
    resolve: (style: MorfeoStyle<Theme>) => ResolvedStyle;
  };
}

export type Parser<
  T extends Partial<Theme>,
  P extends ParserProperty = ParserProperty,
> = (params: ParserParams<T, P>) => ResolvedStyle;

export type SliceParsers<
  T extends Partial<Theme>,
  M extends Record<string, string>,
  P extends ParserProperty = ParserProperty,
> = {
  [K in keyof M]: Parser<T, P>;
};

export type AllParsers<T extends Partial<Theme> = Partial<Theme>> = {
  [K in ParserProperty]: Parser<T, K>;
};

export type ParsersContext<T extends Partial<Theme> = Partial<Theme>> = {
  [P in Property]: Parser<T, P>;
};

export type PropertyResolverParams<
  T extends Partial<Theme>,
  P extends Property,
> = ParserParams<T, P> & {
  next: (
    params?: Pick<ParserParams<T, P>, 'property' | 'value' | 'style'>,
  ) => ResolvedStyle;
};

export type PropertyResolver = <T extends Partial<Theme>, P extends Property>(
  props: PropertyResolverParams<T, P>,
) => ResolvedStyle | void;
