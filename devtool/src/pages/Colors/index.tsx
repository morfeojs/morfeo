import React, { useMemo } from 'react';
import { morfeo, Color, useTheme } from '@morfeo/react';
import clsx from 'clsx';

import styles from './style.module.css';

export const Colors: React.FC = () => {
  const theme = useTheme();
  const slice = useMemo(() => (theme || {})['colors'] || {}, [theme]);

  const sliceKeys = useMemo(
    () =>
      (Object.keys(slice) || []).sort((first, second) =>
        first.localeCompare(second),
      ) as Color[],
    [slice],
  );

  const section = useMemo(() => {
    return sliceKeys.map(key => {
      return (
        <div
          key={`colors-${key}`}
          className={clsx('morfeo-card', styles.colorContainer)}
        >
          <h3>{key}</h3>
          <div
            className={styles.circle}
            style={
              morfeo.resolve({
                bg: key,
              }) as React.CSSProperties
            }
          />
          <h3>{slice[key]}</h3>
        </div>
      );
    });
  }, [slice, sliceKeys]);

  return <div className={styles.colorsSection}>{section}</div>;
};
