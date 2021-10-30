import React, { useMemo } from 'react';
import { Spacing, useThemeValue, useStyle } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import { DetailLabel } from '../../_shared/DetailLabel';
import styles from './style.module.css';

type Props = {
  spacing: Spacing;
  max?: number;
};

function getValueInPixel(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  const parsedValue = value.replace(/\D/g, '');
  const number = Number(parsedValue);

  if (Number.isNaN(number)) {
    return 0;
  }

  return number;
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
  const { padding } = useStyle({ p: detailKey as Spacing });

  return (
    <div className={styles.container}>
      <Card className="morfeo-card-primary">
        <CardInner spacing={detailKey as Spacing} />
      </Card>
      <DetailLabel label="padding" value={padding as string} />
    </div>
  );
};
