import React from 'react';
import { Radius, useThemeValue } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import { DetailLabel } from '../../_shared/DetailLabel';
import styles from './style.module.css';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const cornerValue = useThemeValue('radii', detailKey as Radius);

  return (
    <div className={styles.container}>
      <Card
        className="morfeo-card-primary"
        style={
          {
            corner: detailKey as Radius,
            size: '200px',
            bg: 'var(--colors-primary)',
          } as any
        }
      />
      <DetailLabel label="border-radius" value={cornerValue as string} />
    </div>
  );
};
