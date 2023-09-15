import React, { useCallback, useMemo } from 'react';
import { Color, Component, morfeo } from '@morfeo/react';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Card } from '../../Card';
import { MorfeoComponent } from './MorfeoComponent';
import clsx from 'clsx';

import styles from './style.module.css';
import { Tags } from './Tags';

type Props = {
  name: Component;
  variant?: string;
};

const Info: React.FC<Props> = ({ name, variant }) => {
  const variants = morfeo.theme.component(name, variant).getVariants();
  const numberOfVariants = Object.keys(variants || {}).length;

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <h3
          className={clsx('morfeo-typography-h3', styles.componentName)}
          title={variant || name}
        >
          {variant || name}
        </h3>
        {numberOfVariants > 0 && !variant && (
          <p className={clsx('morfeo-typography-p2', styles.componentName)}>
            {numberOfVariants} variants
          </p>
        )}
      </div>
      <Tags name={name} />
    </div>
  );
};

export const Preview: React.FC<Props> = ({ name, variant }) => {
  const { navigate } = useRouter();
  const { meta } = morfeo.theme.component(name, variant).get() || {};
  const { devtoolConfig } = meta || {};
  const onClick = useCallback(() => {
    navigate(RouteName.COMPONENT, {
      slice: SliceName.COMPONENTS,
      detailKey: name,
      componentVariant: variant,
    });
  }, [name, variant, navigate]);

  const computedBackground = useMemo(() => {
    if (typeof devtoolConfig?.background === 'object') {
      return devtoolConfig?.background['light'];
    }
    return (devtoolConfig?.background as Color) || ('#fff' as Color);
  }, [devtoolConfig?.background]);

  return (
    <Card
      className={clsx(
        'morfeo-card-primary-clickable',
        styles.componentContainer,
      )}
      onClick={onClick}
    >
      <Card
        kind="squared"
        className={styles.previewContainer}
        copyText={variant || name}
        style={{
          bg: computedBackground,
        }}
      >
        <MorfeoComponent applyDefaultStyle name={name} variant={variant}>
          {name}
        </MorfeoComponent>
      </Card>
      <Info name={name} variant={variant} />
    </Card>
  );
};
