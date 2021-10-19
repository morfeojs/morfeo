import React, { useCallback } from 'react';
import { capitalCase, noCase } from 'change-case';
import { ThemeKey, useThemeSlice } from '@morfeo/react';
import { Card, Icon } from '../../../_shared/components';
import { RouteName } from '../../../_shared/contexts';
import { useRouter } from '../../../_shared/hooks';
import { SliceName } from '../../../_shared/contexts/Routing/types';
import { IconName } from '../../../_shared/components/Icon/icons';
import clsx from 'clsx';
import { t } from '../../../_shared/utils';

import styles from './style.module.css';

type Props = {
  slice: ThemeKey;
};

export const SliceCard: React.FC<Props> = ({ slice }) => {
  const { navigate } = useRouter();
  const sliceConfig = useThemeSlice(slice);
  const values = Object.keys(sliceConfig || {}).length;
  const isEmpty = values === 0;

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, { slice: slice as SliceName });
  }, [navigate, slice]);

  return (
    <div className={clsx(styles.sliceContainer, isEmpty && styles.empty)}>
      <Card
        className={clsx(
          'morfeo-card-primary',
          !isEmpty && 'morfeo-card-primary-clickable',
          styles.sliceCard,
        )}
        onClick={onClick}
      >
        <div className={styles.valuesContainer}>
          {isEmpty && (
            <Icon name="warning" className={styles.warningIcon} size="xs" />
          )}
          <p className={clsx('morfeo-typography-p1', styles.value)}>{values}</p>
          {!isEmpty && (
            <p
              className={clsx(
                'morfeo-typography-p1',
                styles.value,
                styles.valueLabel,
              )}
            >
              {t('sliceCardValues')}
            </p>
          )}
        </div>
        <Icon name={`slice.${slice}` as IconName} />
      </Card>
      <h2 className={clsx('morfeo-typography-h2 mt-xxs', styles.sliceName)}>
        {capitalCase(noCase(slice))}
      </h2>
    </div>
  );
};
