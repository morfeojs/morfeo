import React, { useMemo } from 'react';
import { Color, useTheme } from '@morfeo/react';
import clsx from 'clsx';
import { getContrast } from 'polished';
import { Card } from '../../Card';
import styles from './style.module.css';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
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
          <div
            key={`colors-${key}`}
            className={styles.colorContainer}
            onClick={() =>
              navigate(RouteName.SLICE, {
                slice: SliceName.COLORS,
                detailKey: key,
              })
            }
          >
            <Card
              copyText={key}
              className="morfeo-card-primary-clickable"
              style={{
                bg: key,
              }}
            >
              <h2
                className="morfeo-typography-h2"
                style={{
                  color:
                    contrastRatio < 1.95
                      ? 'var(--colors-gray-darkest)'
                      : 'var(--colors-gray-lightest)',
                }}
              >
                {slice[key]}
              </h2>
            </Card>
            <h3
              className={clsx('morfeo-typography-h2', styles.colorName)}
              title={key}
            >
              {key}
            </h3>
          </div>
        </Item>
      );
    });
  }, [navigate, slice, sliceKeys]);

  return <Grid>{section}</Grid>;
};
