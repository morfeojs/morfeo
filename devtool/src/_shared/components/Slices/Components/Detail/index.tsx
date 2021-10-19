import { Component } from '@morfeo/react';
import clsx from 'clsx';
import { useRouter } from '../../../../hooks';
import { MorfeoComponent } from '../MorfeoComponent';

import styles from './style.module.css';

export const Detail = () => {
  const { route } = useRouter();
  const { state } = route;
  const { detailKey: componentName = '', componentVariant } = state || {};

  return (
    <div className={styles.container}>
      <div
        className={clsx(
          'morfeo-card-primary-clickable',
          styles.previewContainer,
        )}
      >
        <MorfeoComponent
          name={componentName as Component}
          variant={componentVariant}
        >
          {componentName}
        </MorfeoComponent>
      </div>
    </div>
  );
};
