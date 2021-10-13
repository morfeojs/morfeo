import React, { useMemo } from 'react';
import { Color, useTheme } from '@morfeo/react';

import styles from './style.module.css';
import { Card } from '../../../_shared/components';
import clsx from 'clsx';

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
        <div key={`colors-${key}`} className={styles.colorContainer}>
          <Card copyText={key} style={{ bg: key }} />
          <h3 className="morfeo-typography-h2">{key}</h3>
        </div>
      );
    });
  }, [sliceKeys]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className="morfeo-typography-h1">Colors</h1>
        <h2 className={clsx('morfeo-typography-h2', styles.breadcrumb)}>
          {'slices > colors'}
        </h2>
      </div>
      <div className={styles.colorsSection}>{section}</div>
    </div>
  );
};
