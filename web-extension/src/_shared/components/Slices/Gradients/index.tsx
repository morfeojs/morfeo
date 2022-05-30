import React, { useMemo, useCallback } from 'react';
import { Gradient, useThemeSlice } from '@morfeo/react';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import { ListItemCard } from '../_shared/ListItemCard';
export { Detail } from './Detail';

type Props = {
  gradient: Gradient;
};

const GradientCard: React.FC<Props> = ({ gradient }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.GRADIENTS,
      detailKey: gradient,
    });
  }, [gradient, navigate]);

  return (
    <ListItemCard
      onClick={onClick}
      copyText={gradient}
      style={{ gradient }}
      title={gradient}
    />
  );
};

export const Gradients: React.FC = () => {
  const gradients = useThemeSlice('gradients');

  const gradientKeys = useMemo(
    () =>
      Object.keys(gradients).sort((first, second) =>
        first.localeCompare(second),
      ) as Gradient[],
    [gradients],
  );

  const section = useMemo(() => {
    return gradientKeys.map(key => {
      return (
        <Item key={`gradients-${key}`}>
          <GradientCard gradient={key} />
        </Item>
      );
    });
  }, [gradientKeys]);

  return <Grid>{section}</Grid>;
};
