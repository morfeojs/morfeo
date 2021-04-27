import { BreakPoint } from './breakpoints';
import { ComponentProps } from './components';
import { AllProperties, Property } from './properties';
import { Theme } from './theme';

export type ResponsiveValue<V extends any> = {
  [K in BreakPoint]?: V;
};

export type PropertyValue<P extends Property> = keyof Theme[AllProperties[P]];

type BaseStyle = {
  [K in Property]?: PropertyValue<K> | ResponsiveValue<PropertyValue<K>>;
} &
  ComponentProps;

export interface Style extends BaseStyle {}
