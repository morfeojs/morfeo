import { Component, State, Style, Variant } from '@morfeo/web';

export type ReducedStyle = Omit<Style, 'componentName' | 'variant' | 'state'>;

export type ValueOrFunction<T, P> =
  | T
  | ((props: P) => T)
  | {
      [K in keyof T]: ValueOrFunction<T[K], P>;
    };

export type ComponentStyle<C extends Component, P> = {
  [K in keyof ReducedStyle]: ValueOrFunction<ReducedStyle[K], P>;
} & (C extends Component
  ? {
      state?: ValueOrFunction<State<C>, P>;
      variant?: ValueOrFunction<Variant<C>, P>;
    }
  : Record<string, never>);
