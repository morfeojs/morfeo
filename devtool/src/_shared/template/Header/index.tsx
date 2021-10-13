import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Color, morfeo, ThemeName } from '@morfeo/react';
import { Icon } from '../../components';
import { useIsUsingMorfeo, useRouter } from '../../hooks';
import styles from './style.module.css';
import { t } from '../../utils';
import { RouteName } from '../../contexts';

export const Header: React.FC = () => {
  const { history, navigate, navigateBack } = useRouter();
  const isUsingMorfeo = useIsUsingMorfeo();
  const canGoBack = history.length > 0;
  const themes = useMemo(
    () => (isUsingMorfeo ? morfeo.getThemes() : {}),
    [isUsingMorfeo],
  );

  const backButton = useMemo(() => {
    if (canGoBack) {
      return (
        <Icon
          name="chevron.left"
          color={'invertedTextColor' as Color}
          className={styles.backButton}
          onClick={navigateBack}
        />
      );
    }
    return undefined;
  }, [canGoBack, navigateBack]);

  const themeSelect = useMemo(() => {
    if (isUsingMorfeo) {
      return (
        <select
          className={styles.themeSelect}
          onChange={e => {
            morfeo.useTheme(e.target.value as ThemeName);
          }}
        >
          {Object.keys(themes).map(themeName => (
            <option key={themeName} value={themeName}>
              {themeName}
            </option>
          ))}
        </select>
      );
    }
    return undefined;
  }, [isUsingMorfeo, themes]);

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        {backButton}
        <Icon
          name="logo"
          color={'invertedTextColor' as Color}
          size="xxl"
          onClick={() => navigate(RouteName.HOME)}
        />
        <h1 className={clsx('morfeo-typography-hero', styles.title)}>
          {t('name')}
        </h1>
      </div>
      <div className={styles.rightSide}>{themeSelect}</div>
    </header>
  );
};
