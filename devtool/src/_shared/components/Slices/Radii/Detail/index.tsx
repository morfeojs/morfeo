import React from 'react';
import {
  Radius,
  useThemeValue,
} from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import styles from './style.module.css';
import { RouteState } from '../../../../contexts';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const cornerValue = useThemeValue('radii', detailKey as Radius);

  return (
    <div className={styles.container}>
      <Card
        className="morfeo-card-primary"
        style={{ corner: detailKey as Radius, bg: 'var(--colors-primary)', size: '200px' } as any}
      >
        <h2
          className="morfeo-typography-h2"
          style={{
            color: 'var(--colors-inverted-text-color)'
          }}
        >
          {cornerValue}
        </h2>
      </Card>
    </div>
  );
};
