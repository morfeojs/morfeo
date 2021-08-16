import { useState, useEffect } from 'react';
import stringify from 'fast-safe-stringify';
import { Style, getStyles } from '@morfeo/web';

export function useClassNames<Key extends string>(styles: Record<Key, Style>) {
  const [{ update, classes }] = useState(() => getStyles(styles));

  useEffect(() => {
    update(styles);
  }, [stringify(styles)]);

  return classes as Record<Key, string>;
}

export function useClassName(style: Style = {}) {
  const classes = useClassNames({ component: style });

  return classes.component;
}
