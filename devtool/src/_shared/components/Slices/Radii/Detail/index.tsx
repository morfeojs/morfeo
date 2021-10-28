import React from 'react';
import { Radius, useThemeValue } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import { DetailLabel } from '../../../DetailLabel';
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
            bg: 'var(--colors-primary)',
          } as any
        }
      >
        <h2
          className="morfeo-typography-h2"
          style={{
            color: 'var(--colors-inverted-text-color)',
          }}
        >
          {cornerValue}
        </h2>
      </Card>
      <DetailLabel label="border-radius" value={cornerValue as string} />
    </div>
  );
};
