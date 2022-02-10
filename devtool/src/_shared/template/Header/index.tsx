import React, { useMemo, useState } from 'react';
import { Color, morfeo, ThemeName, useTheme } from '@morfeo/react';
import { DropDown, Icon } from '../../components';
import { useRouter } from '../../hooks';
import styles from './style.module.css';
import { t } from '../../utils';
import { RouteName } from '../../contexts';

export const Header: React.FC = () => {
  const { history, navigate, navigateBack } = useRouter();
  const theme = useTheme();
  const [currentTheme, setCurrentTheme] = useState(morfeo.getCurrentTheme());
  const canGoBack = history.length > 0;
  const themes = useMemo(() => (theme ? morfeo.getThemes() : {}), [theme]);
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

  const themeSelect = useMemo(() => {
    if (theme) {
      return (
        <DropDown
          title={t('headerMyThemesTitle')}
          value={currentTheme}
          placeholder={t('headerMyThemesPlaceholder')}
          onChange={value => {
            morfeo.setCurrentTheme(value as ThemeName);
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
      <div className={styles.rightSide}>{themeSelect}</div>
    </header>
  );
};
