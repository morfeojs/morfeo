import type { Style } from '@morfeo/web';
import { createClassCombiner, generateClassName } from '@morfeo/utils';
import { expandStyles } from './expandStyles';

type ClassObject<K extends string = string> = {
  [Key in K]: string | ClassObject;
};

type ClassResolverCallback<K extends string> = ClassObject<K> &
  ((
    // eslint-disable-next-line @typescript-eslint/ban-types
    ...args: (ClassObject | K | (string & {}) | undefined | boolean)[]
  ) => string);

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
 *    return <button className={classes('button')}>Click me</button>;
 * }
 * ```
 */
export function css<K extends string>(
  styles: Record<K, Style>,
): ClassResolverCallback<K> {
  let expandedObject;

  function resolver(...classes) {
    if (!expandedObject) {
      expandedObject = Object.keys(styles).reduce((acc, key) => {
        const object = expandStyles(styles[key], {
          getClassName: generateClassName,
        });

        return { ...acc, [key]: object };
      }, {});
    }
    return createClassCombiner(expandedObject)(...classes);
  }

  return new Proxy(resolver, {
    get(target, property) {
      if (!expandedObject) {
        resolver();
      }

      if (!!expandedObject[property]) {
        return expandedObject[property];
      }

      return Reflect.get(target, property);
    },
  }) as ClassResolverCallback<K>;
}
