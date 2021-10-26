import React, { useMemo, useCallback } from 'react';
import { Radius, useThemeSlice } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
import { getSortedSliceValues } from '../../../utils';
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
      <h2 className={clsx('morfeo-typography-h2', styles.name)} title={corner}>
        {corner}
      </h2>
    </div>
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
