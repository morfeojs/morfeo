import React from 'react';
import { Gradient, useStyle } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import styles from './style.module.css';
import { RouteState } from '../../../../contexts';
import { DetailLabel } from '../../_shared/DetailLabel';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const gradientStyle = useStyle({
    gradient: detailKey as Gradient,
  });

  return (
    <div className={styles.container}>
      <Card
        className="morfeo-card-primary"
        style={{ gradient: detailKey as Gradient }}
      />
      <DetailLabel
        label="background"
        value={gradientStyle['background'] as string}
      />
    </div>
  );
};
