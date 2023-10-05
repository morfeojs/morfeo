import { MorfeoStyle } from './style';
import { Color } from './colors';
import { Theme } from './theme';

export interface ComponentMeta<T extends Partial<Theme>> {
  description?: string;
  tags?: string[];
  devtoolConfig?: {
    style?: MorfeoStyle<T>;
    background?: Color | Record<string, Color>;
    label?: string;
    hide?: boolean;
  };
}

type ComponentStyle<
  T extends Partial<Theme>,
  Props extends MorfeoStyle<T> = MorfeoStyle<T>,
  State extends string = string,
> = {
  tag?: string;
  style: MorfeoStyle<T>;
  props?: Props;
  meta?: ComponentMeta<T>;
  states: Record<State, MorfeoStyle<T>>;
};

export type ComponentConfig<
  T extends Partial<Theme>,
  Props extends MorfeoStyle<T> = MorfeoStyle<T>,
  State extends string = string,
> = ComponentStyle<T, Props, State> & {
  variants: Record<string, ComponentStyle<T, Props>>;
};
export interface Components {
  Box: ComponentConfig<Theme>;
}

export type Component = keyof Components;

export type ComponentName<T extends Partial<Theme>> = keyof T['components'];

export type ComponentVariant<
  T extends Partial<Theme>,
  C extends keyof T['components'],
> = T['components'] extends Object
  ? keyof T['components'][C]['variants']
  : never;

export type ComponentState<
  T extends Partial<Theme>,
  C extends keyof T['components'],
> = T['components'] extends Object ? keyof T['components'][C]['states'] : never;

export type ComponentProps<
  T extends Partial<Theme>,
  C extends keyof T['components'],
> = {
  componentName?: C;
  variant?: ComponentVariant<T, C>;
  state?: ComponentState<T, C>;
};
