import React, { useMemo } from 'react';
import { Card } from '../../../_shared/components';
import { RouteName } from '../../../_shared/contexts';
import { useRouter, useThemeSlices } from '../../../_shared/hooks';

import styles from './style.module.css';

export const Home: React.FC = () => {
  const slices = useThemeSlices();
  const { navigate } = useRouter();

  const renderedSlices = useMemo(
    () =>
      slices.map(slice => (
        <Card
          key={slice}
          copyText={slice}
          style={{ bg: 'primary', m: 'xs' }}
          onClick={() => navigate(slice as RouteName)}
        >
          <h3
            className="morfeo-typography-h2"
            style={{ color: 'var(--colors-inverted-text-color)' }}
          >
            {slice}
          </h3>
        </Card>
      )),
    [navigate, slices],
  );

  return (
    <div className={styles.homePage}>
      <div className={styles.slicesContainer}>{renderedSlices}</div>
    </div>
  );
};
