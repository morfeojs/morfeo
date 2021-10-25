import React from 'react';
import { Border, morfeo } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import styles from './style.module.css';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const value = morfeo.resolve({ border: detailKey as Border })['border'];

  return (
    <div className={styles.container}>
      <Card
        className="morfeo-card-primary"
        copyText={detailKey}
        style={
          {
            border: detailKey as Border,
            size: '200px',
          } as any
        }
      >
        <h2 className="morfeo-typography-h2">{value}</h2>
      </Card>
    </div>
  );
};
