import React, { useMemo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Color, morfeo, ThemeName, useTheme } from '@morfeo/react';
import { DropDown, Icon } from '../../components';
import { useRouter } from '../../hooks';
import styles from './style.module.css';
import { t } from '../../utils';
import { RouteName } from '../../contexts';

export const Header: React.FC = () => {
  const { history, navigate, navigateBack } = useRouter();
  const theme = useTheme();
  const [currentTheme, setCurrentTheme] = useState(morfeo.getCurrent());
  const canGoBack = history.length > 0;
  const themes = useMemo(() => (theme ? morfeo.getThemes() : {}), [theme]);
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
    if (theme) {
      return (
        <DropDown
          title={t('headerMyThemesTitle')}
          value={currentTheme}
          placeholder={t('headerMyThemesPlaceholder')}
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
  }, [currentTheme, theme, themes]);

  useEffect(() => {
    if (theme) {
      setCurrentTheme(morfeo.getCurrent());
    }
  }, [theme]);

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
