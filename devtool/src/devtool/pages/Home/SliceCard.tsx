import React from 'react';
import { capitalCase, noCase } from 'change-case';
import { ThemeKey, useThemeSlice } from '@morfeo/react';
import { Card, Icon } from '../../../_shared/components';
import { RouteName } from '../../../_shared/contexts';
import { useRouter } from '../../../_shared/hooks';
import { SliceName } from '../../../_shared/contexts/Routing/types';
import { IconName } from '../../../_shared/components/Icon/icons';
import clsx from 'clsx';
import styles from './style.module.css';

type Props = {
  slice: ThemeKey;
};

export const SliceCard: React.FC<Props> = ({ slice }) => {
  const { navigate } = useRouter();
  const sliceConfig = useThemeSlice(slice);
  const values = Object.keys(sliceConfig || {}).length;
  const isEmpty = values === 0;

  return (
    <div className={clsx(styles.sliceContainer, isEmpty && styles.empty)}>
      <Card
        className={clsx('morfeo-card-primary-clickable', styles.sliceCard)}
        onClick={() => navigate(RouteName.SLICE, { slice: slice as SliceName })}
      >
        <div className={styles.valuesContainer}>
          {isEmpty && <Icon name="warning" size="xs" />}
          <p className={clsx('morfeo-typography-p1', styles.value)}>{values}</p>
          {!isEmpty && (
            <p
              className={clsx(
                'morfeo-typography-p1',
                styles.value,
                styles.valueLabel,
              )}
            >
              values
            </p>
          )}
        </div>
        <Icon name={`slice.${slice}` as IconName} />
      </Card>
      <h2 className="morfeo-typography-h2 mt-xxs">
        {capitalCase(noCase(slice))}
      </h2>
    </div>
  );
};
