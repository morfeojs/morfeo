import { Component, State, Style, Variant } from '@morfeo/web';

type ReducedStyle = Omit<Style, 'componentName' | 'variant' | 'state'>;

type ValueOrFunction<T, P> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: ValueOrFunction<T[K], P>;
    }
  : T | ((props: P) => T);

type CreateUseComponentParams<C extends Component, P extends any> = {
  [K in keyof ReducedStyle]: ValueOrFunction<ReducedStyle[K], P>;
} & {
  // componentName cannot be a function
  state?: ValueOrFunction<State<C>, P>;
  variant?: ValueOrFunction<Variant<C>, P>;
  componentName?: C;
  style?: any;
  className?: string;
};

/**
 *
 * **IMPORTANT**
 *
 * This function is meant to be replaced at build-time, be sure the `@morfeo/webpack` plugin is used.
 *
 * ```tsx
 * import { createUseComponent } from '@morfeo/css';
 *
 * const useButton = createUseComponent({
 *  variant: 'primary',
 *  componentName: 'Button',
 * });
 *
 * export function Button(props) {
 *  const buttonProps = useButton(props);
 *  return <button {...buttonProps} />;
 * }
 * ```
 */
export function createUseComponent<C extends Component, P extends any>(
  _style: CreateUseComponentParams<C, P>,
): (props?: P & { className?: string; style?: any }) => {
  tag?: string;
  style: any;
  className: string;
} {
  throw new Error(
    // TODO: Add link to documentation whenever it will be created
    'Error: parse should never be executed at run-time, please be sure to transpile your code',
  );
}
