import React, { useMemo, useCallback } from 'react';
import { Opacity, useThemeSlice } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import { getSortedSliceValues } from '../../../utils';
import styles from './style.module.css';
import { OpacityCard } from './OpacityCard';

export { Detail } from './Detail';

type Props = {
  opacity: Opacity;
};

const ItemCard: React.FC<Props> = ({ opacity }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.OPACITIES,
      detailKey: opacity,
    });
  }, [opacity, navigate]);

  return (
    <div className={styles.container} onClick={onClick}>
      <Card copyText={opacity} className="morfeo-card-primary-clickable">
        <OpacityCard opacity={opacity} />
      </Card>
      <h2 className={clsx('morfeo-typography-h2', styles.name)} title={opacity}>
        {opacity}
      </h2>
    </div>
  );
};

export const OpacitiesSlice: React.FC = () => {
  const opacities = useThemeSlice('opacities');
  const keys = getSortedSliceValues(opacities);

  const section = useMemo(() => {
    return keys.map(key => {
      return (
        <Item key={`opacities-${key}`}>
          <ItemCard opacity={key} />
        </Item>
      );
    });
  }, [keys]);

  return <Grid>{section}</Grid>;
};
