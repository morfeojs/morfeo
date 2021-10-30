import React, { useMemo, useCallback } from 'react';
import { Spacing, useThemeSlice } from '@morfeo/react';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import { getSortedSliceValues } from '../../../utils';
import { CardInner } from './Detail';
import { ListItemCard } from '../_shared/ListItemCard/index';

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
    <ListItemCard
      title={spacing}
      copyText={spacing}
      clickable
      onClick={onClick}
    >
      <CardInner spacing={spacing} max={60} />
    </ListItemCard>
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
