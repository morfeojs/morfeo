import React, { useMemo } from 'react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks/useRouter';
import { Color, useTheme } from '@morfeo/react';
import styles from './style.module.css';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state } = route;

  const theme = useTheme();
  const colorSlice = useMemo(() => (theme || {})['colors'] || {}, [theme]);

  const bgColor = useMemo(
    () =>
      (state?.detailKey && (colorSlice || {})[state.detailKey as Color]) ||
      'white',
    [colorSlice, state?.detailKey],
  );

  return (
    <div className={styles.container}>
      <Card className="morfeo-card-primary" style={{ bg: bgColor as Color }} />
    </div>
  );
};
