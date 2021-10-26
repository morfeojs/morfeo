import React, { useMemo, useCallback } from 'react';
import { Size, useThemeSlice } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
import { getSortedSliceValues } from '../../../utils';
export { Detail } from './Detail';

type Props = {
  size: Size;
  value: string;
};

const ItemCard: React.FC<Props> = ({ size, value }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.SIZES,
      detailKey: size,
    });
  }, [size, navigate]);

  return (
    <div className={styles.container} onClick={onClick}>
      <Card copyText={size} className="morfeo-card-primary-clickable">
        <Card
          style={
            {
              size,
              corner: 'var(--radii-none)',
              bg: 'var(--colors-primary)',
            } as any
          }
        />
        <h4 className="morfeo-typography-h4">{value}</h4>
      </Card>
      <h2 className={clsx('morfeo-typography-h2', styles.name)} title={size}>
        {size}
      </h2>
    </div>
  );
};

export const SizesSlice: React.FC = () => {
  const sizes = useThemeSlice('sizes');

  const sizesKeys = useMemo(() => getSortedSliceValues(sizes || {}), [sizes]);

  const section = useMemo(() => {
    return sizesKeys.map(key => {
      return (
        <Item key={`sizes-${key}`}>
          <ItemCard size={key} value={sizes ? sizes[key] : ''} />
        </Item>
      );
    });
  }, [sizes, sizesKeys]);

  return <Grid>{section}</Grid>;
};
