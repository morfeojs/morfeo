import React, { useCallback } from 'react';
import { Component, useThemeValue } from '@morfeo/react';
import clsx from 'clsx';
import { useRouter } from '../../../hooks/useRouter';
import { RouteName } from '../../../contexts';
import { SliceName } from '../../../contexts/Routing/types';
import { Card } from '../../Card';
import { Detail } from './Detail';

import styles from './style.module.css';

type Props = {
  name: Component;
};

const Info: React.FC<Props> = ({ name }) => {
  const { variants, meta } = useThemeValue('components', name);
  const numberOfVariants = Object.keys(variants || {}).length;
  const { tags = [] } = meta || {};

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <h2
          className={clsx('morfeo-typography-h2', styles.componentName)}
          title={name}
        >
          {name}
        </h2>
        {numberOfVariants > 0 && (
          <p className={clsx('morfeo-typography-p1', styles.componentName)}>
            {numberOfVariants} variants
          </p>
        )}
      </div>
      <div className={styles.infoTags}>
        <p className={clsx('morfeo-typography-p1', styles.tag)}>
          {tags.length > 0 ? `#${tags.join(' #')}` : ''}
        </p>
      </div>
    </div>
  );
};

export const Preview: React.FC<Props> = ({ name }) => {
  const { navigate } = useRouter();

  const onClick = useCallback(() => {
    navigate(RouteName.SLICE, {
      slice: SliceName.COMPONENTS,
      detailKey: name,
    });
  }, [name, navigate]);

  return (
    <Card
      className={clsx(
        'morfeo-card-primary-clickable',
        styles.componentContainer,
      )}
      onClick={onClick}
    >
      <Card kind="squared" className={styles.previewContainer} copyText={name}>
        <Detail name={name}>{name}</Detail>
      </Card>
      <Info name={name} />
    </Card>
  );
};
