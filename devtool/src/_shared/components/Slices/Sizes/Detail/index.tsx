import React from 'react';
import { Size, useThemeValue } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import { DetailLabel } from '../../../DetailLabel';
import styles from './style.module.css';

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
      <DetailLabel label="height" value={value} />
    </div>
  );
};
