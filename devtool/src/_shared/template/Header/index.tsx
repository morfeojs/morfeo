import React, { useMemo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Color, morfeo, ThemeName } from '@morfeo/react';
import { DropDown, Icon } from '../../components';
import { useIsUsingMorfeo, useRouter } from '../../hooks';
import styles from './style.module.css';
import { t } from '../../utils';
import { RouteName } from '../../contexts';

export const Header: React.FC = () => {
  const { history, navigate, navigateBack } = useRouter();
  const isUsingMorfeo = useIsUsingMorfeo();
  const [currentTheme, setCurrentTheme] = useState(
    isUsingMorfeo ? morfeo.getCurrent() : undefined,
  );
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
        <DropDown
          title="Theme"
          value={currentTheme}
          placeholder="Select theme"
          onChange={value => {
            morfeo.useTheme(value as ThemeName);
            setCurrentTheme(value as ThemeName);
          }}
          options={Object.keys(themes).map(themeName => ({
            label: themeName,
            value: themeName,
          }))}
        />
      );
    }
    return undefined;
  }, [currentTheme, isUsingMorfeo, themes]);

  useEffect(() => {
    if (isUsingMorfeo) {
      setCurrentTheme(morfeo.getCurrent());
    }
  }, [isUsingMorfeo]);

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
