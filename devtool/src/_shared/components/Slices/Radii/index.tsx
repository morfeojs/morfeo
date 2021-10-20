import React, { useMemo, useCallback } from 'react';
import { Radii, Radius, useThemeSlice } from '@morfeo/react';
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
    <div className={styles.container} onClick={onClick}>
      <Card copyText={corner} className="morfeo-card-primary-clickable">
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
      </Card>
      <h3 className={clsx('morfeo-typography-h2', styles.name)} title={corner}>
        {corner}
      </h3>
    </div>
  );
};

function getSortedRadii(radii: Radii) {
  const keys = Object.keys(radii) as Radius[];

  return keys.sort((first, second) => {
    const [firstValue] = getValueAndUnit(radii[first]);
    const [secondValue] = getValueAndUnit(radii[second]);
    if (typeof firstValue !== 'number') {
      return Infinity;
    }

    if (typeof secondValue !== 'number') {
      return -Infinity;
    }

    return firstValue - secondValue;
  });
}

export const RadiiSlice: React.FC = () => {
  const radii = useThemeSlice('radii');

  const radiiKeys = useMemo(() => getSortedRadii(radii || {}), [radii]);

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
