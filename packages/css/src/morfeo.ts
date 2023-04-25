import type { FC, ReactHTML } from 'react';
import type { Component, Style, State, Variant } from '@morfeo/web';
import type { ReducedStyle, ValueOrFunction } from './types';

type ComponentStyle<C extends Component, P> = {
  [K in keyof ReducedStyle]: ValueOrFunction<ReducedStyle[K], P>;
} & (C extends Component
  ? {
      state?: ValueOrFunction<State<C>, P>;
      variant?: ValueOrFunction<Variant<C>, P>;
      style?: any;
      className?: string;
    }
  : {
      style?: any;
      className?: string;
    });

type MorfeoComponent<P extends object = object> = FC<
  P & {
    className?: string;
    style?: any;
  }
>;

/**
 *
 * > **IMPORTANT**
 * >
 * > This function is meant to be replaced at build-time, be sure the `@morfeo/compiler` plugin is used.
 *
 * @example
 *
 * ```tsx
 * import { morfeo } from '@morfeo/css';
 *
 * const classes = morfeo.css({
 *    button: {
 *      componentName: 'Button',
 *      variant: 'primary'
 *    }
 * });
 *
 * export function Button() {
 *    return <button className={classes.button}>Click me</button>;
 * }
 * ```
 */
function css<K extends string>(_styles: Record<K, Style>): Record<K, string> {
  throw new Error(
    // TODO: Add link to documentation whenever it will be created
    "Error: morfeo.css should never be executed at run-time, please be sure you're using morfeo's transpiler",
  );
}

/**
 *
 * > **IMPORTANT**
 * >
 * > This function is meant to be replaced at build-time, be sure the `@morfeo/compiler` plugin is used.
 *
 *
 * It creates a React component styled with the style passed as the second argument, the first argument could
 * be a component name or a valid html tag
 *
 * @example
 *
 * ```tsx
 * import { morfeo } from '@morfeo/css';
 *
 * const Button = morfeo.component('Button', {
 *   variant: props => props.variant,
 *   py: 'm',
 *   '&:hover: {
 *      shadow: 'medium'
 *   }
 * });
 * ```
 */
function component<C extends Component, P extends object>(
  _componentName: C | keyof ReactHTML,
  _style: ComponentStyle<C, P>,
): MorfeoComponent<P> {
  throw new Error(
    // TODO: Add link to documentation whenever it will be created
    "Error: morfeo.component should never be executed at run-time, please be sure you're using morfeo's transpiler",
  );
}

export const morfeo = { css, component };
