import { Style } from '@morfeo/web';

export type ReducedStyle = Omit<Style, 'componentName' | 'variant' | 'state'>;

export type ValueOrFunction<T, P> =
  | T
  | ((props: P) => T)
  | {
      [K in keyof T]: ValueOrFunction<T[K], P>;
    };
