import React from 'react';
import { Opacity, useStyle } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import { OpacityCard } from '../OpacityCard';
import { DetailLabel } from '../../_shared/DetailLabel';
import styles from './style.module.css';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const { opacity } = useStyle({ opacity: detailKey as Opacity });

  return (
    <div className={styles.container}>
      <Card className="morfeo-card-primary">
        <OpacityCard opacity={detailKey as Opacity} />
      </Card>
      <DetailLabel label="opacity" value={opacity as string} />
    </div>
  );
};
