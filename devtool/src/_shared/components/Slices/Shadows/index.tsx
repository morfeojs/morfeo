import React, { useMemo, useCallback } from 'react';
import { Shadow, useThemeSlice } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
export { Detail } from './Detail';

type Props = {
  shadow: Shadow;
};

const ItemCard: React.FC<Props> = ({ shadow }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.SHADOWS,
      detailKey: shadow,
    });
  }, [shadow, navigate]);

  return (
    <div className={styles.container} onClick={onClick}>
      <Card copyText={shadow} className="morfeo-card-primary-clickable">
        <Card
          style={
            {
              shadow,
              size: 'var(--sizes-xl)',
              corner: 'var(--radii-xxs)',
              bg: 'var(--colors-primary)',
            } as any
          }
        />
      </Card>
      <h2 className={clsx('morfeo-typography-h2', styles.name)} title={shadow}>
        {shadow}
      </h2>
    </div>
  );
};

export const ShadowsSlice: React.FC = () => {
  const shadows = useThemeSlice('shadows');
  const keys = Object.keys(shadows) as Shadow[];

  const section = useMemo(() => {
    return keys.map(key => {
      return (
        <Item key={`shadows-${key}`}>
          <ItemCard shadow={key} />
        </Item>
      );
    });
  }, [keys]);

  return <Grid>{section}</Grid>;
};
