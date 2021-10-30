import React, { useMemo, useCallback } from 'react';
import { Shadow, useThemeSlice } from '@morfeo/react';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import { ListItemCard } from '../_shared/ListItemCard';
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
    <ListItemCard title={shadow} copyText={shadow} clickable onClick={onClick}>
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
    </ListItemCard>
  );
};

export const ShadowsSlice: React.FC = () => {
  const shadows = useThemeSlice('shadows');
  const keys = useMemo(() => Object.keys(shadows) as Shadow[], [shadows]);

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
