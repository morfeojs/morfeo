import React from 'react';
import { Component, useMorfeo } from '@morfeo/react';
import clsx from 'clsx';
import styles from './style.module.css';

type Props = {
  name: Component;
  variant?: string;
};

export const Tags: React.FC<Props> = ({ name, variant }) => {
  const morfeo = useMorfeo();
  const { meta } = morfeo.theme.component(name, variant).get();
  const { tags = [] } = meta || {};

  return (
    <div className={styles.infoTags}>
      <p className={clsx('morfeo-typography-p2', styles.tag)}>
        {tags.length > 0 ? `#${tags.join(' #')}` : ''}
      </p>
    </div>
  );
};
