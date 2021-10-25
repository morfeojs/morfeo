import React, { useMemo, useCallback } from 'react';
import { Border, Borders, useThemeSlice } from '@morfeo/react';
import clsx from 'clsx';
import { getValueAndUnit } from 'polished';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
export { Detail } from './Detail';

type Props = {
  border: Border;
};

const BorderCard: React.FC<Props> = ({ border }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.BORDERS,
      detailKey: border,
    });
  }, [border, navigate]);

  return (
    <div className={styles.container} onClick={onClick}>
      <Card copyText={border} className="morfeo-card-primary-clickable">
        <Card
          style={
            {
              border,
              size: 'var(--sizes-xxl)',
            } as any
          }
        />
      </Card>
      <h3 className={clsx('morfeo-typography-h2', styles.name)} title={border}>
        {border}
      </h3>
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

export const BordersSlice: React.FC = () => {
  const borders = useThemeSlice('borders');

  const keys = useMemo(() => getSortedBorders(borders || {}), [borders]);

  const section = useMemo(() => {
    return keys.map(key => {
      return (
        <Item key={`borders-${key}`}>
          <BorderCard border={key} />
        </Item>
      );
    });
  }, [keys]);

  return <Grid>{section}</Grid>;
};
