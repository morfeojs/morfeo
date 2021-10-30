import React, { useMemo, useCallback } from 'react';
import { Radius, useThemeSlice } from '@morfeo/react';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import { getSortedSliceValues } from '../../../utils';
import { ListItemCard } from '../_shared/ListItemCard/index';
export { Detail } from './Detail';

type Props = {
  corner: Radius;
  value: string;
};

const RadiusCard: React.FC<Props> = ({ corner, value }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.RADII,
      detailKey: corner,
    });
  }, [corner, navigate]);

  return (
    <ListItemCard copyText={corner} clickable title={corner} onClick={onClick}>
      <Card
        style={
          {
            corner,
            size: 'var(--sizes-xxl)',
            bg: 'var(--colors-primary)',
          } as any
        }
      >
        <h4
          className="morfeo-typography-h4"
          style={{ color: 'var(--colors-inverted-text-color)' }}
        >
          {value}
        </h4>
      </Card>
    </ListItemCard>
  );
};

export const RadiiSlice: React.FC = () => {
  const radii = useThemeSlice('radii');

  const radiiKeys = useMemo(() => getSortedSliceValues(radii || {}), [radii]);

  const section = useMemo(() => {
    return radiiKeys.map(key => {
      return (
        <Item key={`radii-${key}`}>
          <RadiusCard corner={key} value={radii ? radii[key] : ''} />
        </Item>
      );
    });
  }, [radii, radiiKeys]);

  return <Grid>{section}</Grid>;
};
