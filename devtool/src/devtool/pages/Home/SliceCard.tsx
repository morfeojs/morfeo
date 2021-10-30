import React, { useCallback, useMemo } from 'react';
import { capitalCase, noCase } from 'change-case';
import { Icon } from '../../../_shared/components';
import { RouteName } from '../../../_shared/contexts';
import { useRouter } from '../../../_shared/hooks';
import { SliceName } from '../../../_shared/contexts/Routing/types';
import { IconName } from '../../../_shared/components/Icon/icons';
import clsx from 'clsx';
import { t } from '../../../_shared/utils';
import { SliceStatus, SliceWithStatus } from '../../../_shared/types';
import styles from './style.module.css';
import { ListItemCard } from '../../../_shared/components/Slices/_shared/ListItemCard';

type Props = SliceWithStatus;

export const SliceCard: React.FC<Props> = ({ name, values, status }) => {
  const { navigate } = useRouter();
  const isEmpty = values === 0;
  const isComingSoon = status === SliceStatus.COMING_SOON;

  const onClick = useCallback(() => {
    if (isEmpty || isComingSoon) {
      return;
    }
    navigate(RouteName.SLICE, { slice: name as SliceName });
  }, [isEmpty, isComingSoon, navigate, name]);

  const labelText = useMemo(() => {
    if (isComingSoon) {
      return 'COMING SOON';
    }
    return t('sliceCardValues');
  }, [isComingSoon]);

  const value = useMemo(() => {
    if (isComingSoon) {
      return undefined;
    }
    return (
      <p className={clsx('morfeo-typography-p1', styles.value)}>{values}</p>
    );
  }, [isComingSoon, values]);

  const labelPrefix = useMemo(() => {
    if (isEmpty) {
      return <Icon name="warning" className={styles.warningIcon} size="xs" />;
    }
    return undefined;
  }, [isEmpty]);

  const label = useMemo(() => {
    if (isEmpty) {
      return undefined;
    }

    return (
      <p
        className={clsx(
          'morfeo-typography-p1',
          styles.value,
          styles.valueLabel,
        )}
      >
        {labelText}
      </p>
    );
  }, [isEmpty, labelText]);

  return (
    <ListItemCard
      mode="light"
      title={capitalCase(noCase(name))}
      clickable={!isEmpty}
      onClick={onClick}
    >
      <div className={(isEmpty && styles.empty) || ''}>
        <div
          className={clsx(
            styles.valuesContainer,
            isComingSoon && styles.comingSoon,
          )}
        >
          {labelPrefix}
          {value}
          {label}
        </div>
        <Icon name={`slice.${name}` as IconName} />
      </div>
      
    </ListItemCard>
  );
};
