import React, { useMemo, useCallback } from 'react';
import { Spacing, useThemeSlice } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
import { getSortedSliceValues } from '../../../utils';
import { CardInner } from './Detail';

export { Detail } from './Detail';

type Props = {
  spacing: Spacing;
  value: string;
};

const ItemCard: React.FC<Props> = ({ spacing, value }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.SPACINGS,
      detailKey: spacing,
    });
  }, [spacing, navigate]);

  return (
    <div className={styles.container} onClick={onClick}>
      <Card copyText={spacing} className="morfeo-card-primary-clickable">
        <CardInner spacing={spacing} max={60} />
      </Card>
      <h2 className={clsx('morfeo-typography-h2', styles.name)} title={spacing}>
        {spacing}
      </h2>
    </div>
  );
};

export const SpacingsSlice: React.FC = () => {
  const spacings = useThemeSlice('spacings');

  const keys = useMemo(() => getSortedSliceValues(spacings || {}), [spacings]);

  const section = useMemo(() => {
    return keys.map(key => {
      return (
        <Item key={`spacings-${key}`}>
          <ItemCard spacing={key} value={spacings ? spacings[key] : ''} />
        </Item>
      );
    });
  }, [spacings, keys]);

  return <Grid>{section}</Grid>;
};
