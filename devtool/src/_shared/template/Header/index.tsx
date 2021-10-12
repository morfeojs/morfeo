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
          <Icon name="chevron.left" color="background" />
        </BackLink>
      );
    }
    return undefined;
  }, [canGoBack]);

  return (
    <header className={styles.header}>
      {backButton}
      <h1 className={clsx('morfeo-typography-hero', styles.title)}>Morfeo</h1>
    </header>
  );
};
