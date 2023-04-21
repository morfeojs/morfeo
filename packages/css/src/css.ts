import { Style } from '@morfeo/web';

/**
 *
 * > **IMPORTANT**
 * >
 * > This function is meant to be replaced at build-time, be sure the `@morfeo/compiler` plugin is used.
 *
 * @example
 *
 * ```tsx
 * import { css } from '@morfeo/css';
 *
 * const classes = css({
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
export function css<K extends string>(
  _style: Record<K, Style>,
): Record<K, string> {
  throw new Error(
    // TODO: Add link to documentation whenever it will be created
    "Error: parse should never be executed at run-time, please be sure you're using morfeo's transpiler",
  );
}
