import React, { useMemo, useCallback } from 'react';
import { Size, useThemeSlice } from '@morfeo/react';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import { getSortedSliceValues } from '../../../utils';
import { ListItemCard } from '../_shared/ListItemCard';
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
    <ListItemCard title={size} copyText={size} clickable onClick={onClick}>
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
    </ListItemCard>
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
