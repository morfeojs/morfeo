import React, { useMemo } from 'react';
import { Color, useTheme } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../Card';
import styles from './style.module.css';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';

const whites = ['#fff', '#ffffff', 'white', 'rgb(255,255,255)'];

export const Colors: React.FC = () => {
  const theme = useTheme();
  const slice = useMemo(() => (theme || {})['colors'] || {}, [theme]);
  const { navigate } = useRouter();

  const sliceKeys = useMemo(
    () =>
      (Object.keys(slice) || []).sort((first, second) =>
        first.localeCompare(second),
      ) as Color[],
    [slice],
  );

  const section = useMemo(() => {
    return sliceKeys.map(key => {
      return (
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
            style={{
              bg: key,
              outline: 'var(--borders-primary)',
              outlineColor: whites.includes(slice[key])
                ? ('var(--colors-gray-lightest)' as Color)
                : ('transparent' as Color),
            }}
          />
          <h3
            className={clsx('morfeo-typography-h2', styles.colorName)}
            title={key}
          >
            {key}
          </h3>
        </div>
      );
    });
  }, [navigate, slice, sliceKeys]);

  return <>{section}</>;
};
