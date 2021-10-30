import React, { useMemo, useCallback } from 'react';
import { Border, Borders, useThemeSlice } from '@morfeo/react';
import { getValueAndUnit } from 'polished';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
import { BorderCard } from './BorderCard/BorderCard';
import { getSortedSliceValues } from '../../../utils/getSortedSliceValues';
export { Detail } from './Detail';

export const borderSlices = [
  'borders',
  'borderWidths',
  'borderStyles',
] as const;

export type BorderSlice = typeof borderSlices[number];

type Props = {
  value: Border;
};

const BorderListItem: React.FC<Props> = ({ value }) => {
  const { navigate, route } = useRouter();
  const { state } = route;

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: state?.slice as SliceName,
      detailKey: value,
    });
  }, [navigate, state?.slice, value]);

  return (
    <div className={styles.container} onClick={onClick}>
      <BorderCard
        showTitle
        mainSlice={state?.slice as BorderSlice}
        detailKey={value}
        clickable
      />
    </div>
  );
};

function getSortedBorders(borders: Borders) {
  const keys = Object.keys(borders) as Border[];

  return keys.sort((first, second) => {
    const [firstValue] = getValueAndUnit(
      borders[first].width?.toString() || '0',
    );
    const [secondValue] = getValueAndUnit(
      borders[second].width?.toString() || '0',
    );
    if (typeof firstValue !== 'number') {
      return Infinity;
    }

    if (typeof secondValue !== 'number') {
      return -Infinity;
    }

    return firstValue - secondValue;
  });
}

type BorderSliceProps = {
  mainSlice: BorderSlice;
};

export const BordersSlice: React.FC<BorderSliceProps> = ({ mainSlice }) => {
  const slice = useThemeSlice(mainSlice);

  const keys = useMemo(() => {
    if (mainSlice === 'borders') {
      return getSortedBorders((slice as Borders) || {});
    }
    return getSortedSliceValues(slice);
  }, [mainSlice, slice]);

  const section = useMemo(() => {
    return keys.map(key => {
      return (
        <Item key={`borders-${key}`}>
          <BorderListItem value={key} />
        </Item>
      );
    });
  }, [keys]);

  return <Grid>{section}</Grid>;
};
