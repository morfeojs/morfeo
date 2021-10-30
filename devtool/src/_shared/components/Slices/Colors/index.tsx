import React, { useMemo } from 'react';
import { Color, useTheme } from '@morfeo/react';
import { getContrast } from 'polished';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import { ListItemCard } from '../_shared/ListItemCard';
export { Detail } from './Detail';

export const Colors: React.FC = () => {
  const theme = useTheme();
  const slice = useMemo(() => (theme || {})['colors'] || {}, [theme]);
  const { navigate } = useRouter();

  const sliceKeys = useMemo(
    () =>
      Object.keys(slice).sort((first, second) =>
        first.localeCompare(second),
      ) as Color[],
    [slice],
  );

  const section = useMemo(() => {
    return sliceKeys.map(key => {
      const contrastRatio = getContrast(slice[key], '#fff');

      return (
        <Item key={`colors-${key}`}>
          <ListItemCard
            onClick={() =>
              navigate(RouteName.SLICE, {
                slice: SliceName.COLORS,
                detailKey: key,
              })
            }
            title={key}
            clickable
            style={{
              bg: key as Color
            }}
            copyText={key}
          >
            <h3
              className="morfeo-typography-h3"
              style={{
                color:
                  contrastRatio < 1.95
                    ? 'var(--colors-gray-darkest)'
                    : 'var(--colors-gray-lightest)',
              }}
            >
              {slice[key]}
            </h3>
          </ListItemCard>
        </Item>
      );
    });
  }, [navigate, slice, sliceKeys]);

  return <Grid>{section}</Grid>;
};
