import React, { useMemo, useCallback } from 'react';
import { Font, useStyle, ThemeKey, useThemeSlice, Fonts, useTheme } from '@morfeo/react';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
import { ListItemCard } from '../_shared/ListItemCard';

export { Detail } from './Detail';

type ItemProps = {
  value: string;
  property: string;
};

type Props = {
  property: string;
};

const ItemCard: React.FC<ItemProps> = ({ property, value }) => {
  const { navigate, route } = useRouter();
  const themeFonts = useTheme().fonts;

  const firstFont = useMemo(() => {
    const fontArray = Object.keys(themeFonts)
    return fontArray[0] as keyof Fonts
  }, [themeFonts])

  const fontStyle = useStyle({
    [property]: value,
    ...firstFont && property !== 'fontFamily' && { fontFamily: firstFont }
  });

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: route.state?.slice as SliceName,
      detailKey: value,
    });
  }, [navigate, route.state?.slice, value]);

  return (
    <ListItemCard title={value} onClick={onClick} mode='light' clickable>
      <h1 className={styles.name} title={value} style={fontStyle as any}>
          Aa
      </h1>
    </ListItemCard>
  );
};

export const GeneralFontsSlice: React.FC<Props> = ({ property }) => {
  const { route } = useRouter();
  const slice = route.state?.slice as ThemeKey;
  const sliceValue = useThemeSlice(slice);
  const keys = useMemo(() => Object.keys(sliceValue) as Font[], [sliceValue]);

  const section = useMemo(() => {
    return keys.map(key => {
      return (
        <Item key={`${slice}-${key}`}>
          <ItemCard property={property} value={key} />
        </Item>
      );
    });
  }, [keys, slice, property]);

  return <Grid>{section}</Grid>;
};
