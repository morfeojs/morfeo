import { Style } from '@morfeo/web';

/**
 *
 * **IMPORTANT**
 *
 * This function is meant to be replaced at build-time, be sure the `@morfeo/webpack` plugin is used.
 *
 * It returns a function that returns the classes object:
 *
 * ```tsx
 * import { createUseClasses } from '@morfeo/css';
 *
 * const useStyles = createUseClasses({
 *  button: {
 *    variant: 'primary',
 *    componentName: 'Button',
 *  },
 * });
 *
 * export function Button(props) {
 *  const classes = useStyles();
 *  return <button {...props} className={classes.button} />;
 * }
 * ```
 */
export function createUseClasses<Keys extends string>(
  _: Record<Keys, Style>,
): () => Record<Keys, string> {
  throw new Error(
    // TODO: Add link to documentation whenever it will be created
    'Error: parse should never be executed at run-time, please be sure to transpile your code',
  );
}
