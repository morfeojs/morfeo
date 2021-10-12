import React, { useMemo } from 'react';
import clsx from 'clsx';
import { morfeo, ThemeName } from '@morfeo/react';
import { BackLink, Icon } from '../../components';
import { useIsUsingMorfeo, useRouter } from '../../hooks';
import styles from './style.module.css';

export const Header: React.FC = () => {
  const { history } = useRouter();
  const isUsingMorfeo = useIsUsingMorfeo();
  const canGoBack = history.length > 0;
  const themes = isUsingMorfeo ? morfeo.getThemes() : {};

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
      {isUsingMorfeo && (
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
      )}
    </header>
  );
};
