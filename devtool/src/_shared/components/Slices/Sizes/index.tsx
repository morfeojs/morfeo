import React, { useMemo, useCallback } from 'react';
import { Size, Sizes, useThemeSlice } from '@morfeo/react';
import clsx from 'clsx';
import { getValueAndUnit } from 'polished';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
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

function getSortedSize(sizes: Sizes) {
  const keys = Object.keys(sizes) as Size[];

  return keys.sort((first, second) => {
    const [firstValue] = getValueAndUnit(sizes[first]);
    const [secondValue] = getValueAndUnit(sizes[second]);
    if (typeof firstValue !== 'number') {
      return Infinity;
    }

    if (typeof secondValue !== 'number') {
      return -Infinity;
    }

    return firstValue - secondValue;
  });
}

export const SizesSlice: React.FC = () => {
  const sizes = useThemeSlice('sizes');

  const sizesKeys = useMemo(() => getSortedSize(sizes || {}), [sizes]);

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
