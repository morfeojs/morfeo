import React, { useMemo } from 'react';
import { Spacing, useThemeValue } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import styles from './style.module.css';

type Props = {
  spacing: Spacing;
  max?: number;
};

function getValueInPixel(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  if (Number.isNaN(value.replace(/\D/g, ''))) {
    return 0;
  }

  const parsedValue = value.replace(/\D/g, '');

  return Number(parsedValue);
}

export const CardInner: React.FC<Props> = ({ spacing, max }) => {
  const value = useThemeValue('spacings', spacing);

  const margin = useMemo(() => {
    const pixel = getValueInPixel(value);
    if (max && pixel > max) {
      return `${max}px`;
    }

    if (pixel < 1) {
      return '1px';
    }

    return value;
  }, [max, value]);

  const spacingStyle = {
    size: 'var(--sizes-l)',
    corner: 'var(--radii-xs)',
    bg: 'var(--colors-primary)',
  } as any;

  return (
    <>
      <div className={styles.spacingContainer}>
        <Card style={{ ...spacingStyle, mr: margin } as any} />
        <Card style={spacingStyle} />
      </div>
      <h4 className={clsx('morfeo-typography-h4', styles.value)}>{value}</h4>
    </>
  );
};

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;

  return (
    <div className={styles.container}>
      <Card className="morfeo-card-primary">
        <CardInner spacing={detailKey as Spacing} />
      </Card>
    </div>
  );
};
