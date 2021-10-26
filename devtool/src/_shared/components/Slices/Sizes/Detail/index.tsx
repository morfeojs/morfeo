import React from 'react';
import { Size, useThemeValue } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import styles from './style.module.css';
import { RouteState } from '../../../../contexts';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const value = useThemeValue('sizes', detailKey as Size);

  return (
    <div className={styles.container}>
      <Card
        className="morfeo-card-primary"
        style={
          {
            size: detailKey,
            corner: 'var(--radii-none)',
            bg: 'var(--colors-primary)',
          } as any
        }
      />
      <h2 className="morfeo-typography-h2">{value}</h2>
    </div>
  );
};
