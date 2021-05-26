import { Style, ResolvedStyle, parsers } from '@morfeo/core';
import { useForceReRender } from './useSubscribe';

function parseStyles<K extends string>(styles: Record<K, Style>) {
  const styleKeys = Object.keys(styles);
  return styleKeys.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: parsers.resolve(styles[curr]),
    }),
    {},
  ) as Record<K, ResolvedStyle>;
}

/**
 * useStyles
 * it returns the a record of styles that can be used as inline-style in your components.
 * ---
 * **warning** the generated style has no impact for pseudo elements or media queries,
 * use [createUseStyles](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react) in this case.
 *
 * ```tsx
 * function Button({children}) {
 *  const styles = useStyles({
 *    button: {
 *      px: 'm',
 *      bg: 'primary',
 *    }
 *  });
 *
 *  return <button style={styles.button}>{children}</button>;
 * }
 * ```
 */
export function useStyles<K extends string>(styles: Record<K, Style>) {
  useForceReRender();
  return parseStyles(styles);
}

/**
 * useStyles
 * it returns the a style that can be used as inline-style in your components.
 * ---
 * **warning** the generated style has no impact for pseudo elements or media queries,
 * use [createUseStyle](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react) in this case.
 *
 * ```tsx
 * function Button({children}) {
 *  const style = useStyle({
 *    px: 'm',
 *    bg: 'primary',
 *  });
 *
 *  return <button style={style}>{children}</button>;
 * }
 * ```
 */
export function useStyle(style: Style) {
  const { style: parsedStyle } = useStyles({ style });

  return parsedStyle;
}
