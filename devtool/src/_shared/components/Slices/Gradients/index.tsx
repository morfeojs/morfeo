import React, { useMemo, useCallback } from 'react';
import { Gradient, useThemeSlice } from '@morfeo/react';
import clsx from 'clsx';
import { Card } from '../../Card';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Grid, Item } from '../../Grid';
import styles from './style.module.css';
export { Detail } from './Detail';

type Props = {
  gradient: Gradient;
};

const GradientCard: React.FC<Props> = ({ gradient }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.GRADIENTS,
      detailKey: gradient,
    });
  }, [gradient, navigate]);

  return (
    <div className={styles.gradientContainer} onClick={onClick}>
      <Card
        copyText={gradient}
        className="morfeo-card-primary-clickable"
        style={{ gradient }}
      />
      <h3
        className={clsx('morfeo-typography-h2', styles.gradientName)}
        title={gradient}
      >
        {gradient}
      </h3>
    </div>
  );
};

export const Gradients: React.FC = () => {
  const gradients = useThemeSlice('gradients');

  const gradientKeys = useMemo(
    () =>
      (Object.keys(gradients) || []).sort((first, second) =>
        first.localeCompare(second),
      ) as Gradient[],
    [gradients],
  );

  const section = useMemo(() => {
    return gradientKeys.map(key => {
      return (
        <Item key={`colors-${key}`}>
          <GradientCard gradient={key} />
        </Item>
      );
    });
  }, [gradientKeys]);

  return <Grid>{section}</Grid>;
};
