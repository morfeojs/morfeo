import React, { useMemo } from 'react';
import { Color } from '@morfeo/react';
import { Icon } from '../../components';
import { useRouter } from '../../hooks';
import { RouteName } from '../../contexts';
import styles from './style.module.css';

export const Header: React.FC = () => {
  const { history, navigate, navigateBack } = useRouter();
  const canGoBack = history.length > 0;
  const backButton = useMemo(() => {
    if (canGoBack) {
      return (
        <Icon
          name="chevron.left"
          color={'invertedText' as Color}
          className={styles.backButton}
          onClick={navigateBack}
        />
      );
    }
    return undefined;
  }, [canGoBack, navigateBack]);

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        {backButton}
        <Icon
          name="logo"
          color={'invertedText' as Color}
          size="2xl"
          onClick={() => navigate(RouteName.HOME)}
        />
      </div>
    </header>
  );
};
