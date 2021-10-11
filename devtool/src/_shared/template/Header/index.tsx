import React, { useMemo } from 'react';
import clsx from 'clsx';
import { BackLink, Icon } from '../../components';
import { useRouter } from '../../hooks';
import styles from './style.module.css';

export const Header: React.FC = () => {
  const { history } = useRouter();
  const canGoBack = history.length > 0;

  const backButton = useMemo(() => {
    if (canGoBack) {
      return (
        <BackLink
          className={styles.backButton}
          style={{
            color: 'var(--colors-inverted-text-color)',
            fontSize: 'var(--font-sizes-xxl)',
            cursor: 'pointer',
          }}
        >
          <Icon name="leftChevron" color="background" />
        </BackLink>
      );
    }
    return undefined;
  }, [canGoBack]);

  return (
    <header className={styles.header}>
      {backButton}
      <h1 className={clsx('color-inverted-text-color', styles.title)}>
        morfeo
      </h1>
    </header>
  );
};
