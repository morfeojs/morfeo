import React, { useMemo, useCallback } from 'react';
import { Opacity, useThemeSlice } from '@morfeo/react';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import { getSortedSliceValues } from '../../../utils';
import { OpacityCard } from './OpacityCard';
import { ListItemCard } from '../_shared/ListItemCard';

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
    <ListItemCard
      title={opacity}
      onClick={onClick}
      copyText={opacity}
      clickable
    >
      <OpacityCard opacity={opacity} />
    </ListItemCard>
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
