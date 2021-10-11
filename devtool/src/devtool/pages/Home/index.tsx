import React, { useMemo } from 'react';
import { SliceCard } from '../../../_shared/components';
import { useThemeSlices } from '../../../_shared/hooks';

import styles from './style.module.css';

export const Home: React.FC = () => {
  const slices = useThemeSlices();

  const renderedSlices = useMemo(
    () => slices.map(slice => <SliceCard key={slice} slice={slice} />),
    [slices],
  );

  return (
    <div className={styles.homePage}>
      <div className={styles.slicesContainer}>{renderedSlices}</div>
    </div>
  );
};
