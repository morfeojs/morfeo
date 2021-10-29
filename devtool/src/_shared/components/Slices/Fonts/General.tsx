import React, { useMemo, useCallback } from 'react';
import { Font, useStyle, ThemeKey, useThemeSlice } from '@morfeo/react';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';

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
  const fontStyle = useStyle({
    [property]: value,
  });

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: route.state?.slice as SliceName,
      detailKey: value,
    });
  }, [navigate, route.state?.slice, value]);

  return (
    <div className={styles.container} onClick={onClick}>
      <Card copyText={value} className="morfeo-card-primary-clickable">
        <h1 className={styles.name} title={value} style={fontStyle as any}>
          Aa
        </h1>
      </Card>
      <h2 className="morfeo-typography-h2">{value}</h2>
    </div>
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
