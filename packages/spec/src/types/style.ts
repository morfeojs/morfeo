import { ComponentProps } from './components';
import { AllProperties, Property } from './properties';
import { Theme } from './theme';

export type PropertyValue<P extends Property> =
  | keyof Theme[AllProperties[P]]
  | `raw:${string}`;

export interface CustomStyle {}

type ThemeStyle = {
  [K in Property]?: PropertyValue<K>;
} & ComponentProps;

type BaseStyle = Omit<ThemeStyle, keyof CustomStyle> & CustomStyle;

export interface Style extends BaseStyle {}
