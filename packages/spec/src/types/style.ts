import { ComponentProps } from './components';
import { AllProperties, Property } from './properties';
import { Theme } from './theme';

export type PropertyValue<P extends Property, T extends Partial<Theme>> =
  | keyof T[AllProperties[P]]
  | `raw:${string}`;

export interface CustomStyle<
  T extends Partial<Theme>,
  C extends keyof T['components'] = keyof T['components'],
> {}

type ThemedStyle<
  T extends Partial<Theme>,
  C extends keyof T['components'] = keyof T['components'],
> = {
  [K in Property]?: PropertyValue<K, T>;
} & ComponentProps<T, C>;

export type BaseStyle<
  T extends Partial<Theme>,
  C extends keyof T['components'] = keyof T['components'],
> = Omit<ThemedStyle<T, C>, keyof CustomStyle<T, C>> & CustomStyle<T, C>;

export interface MorfeoStyle<
  T extends Partial<Theme>,
  C extends keyof T['components'] = keyof T['components'],
> extends BaseStyle<T, C> {}
