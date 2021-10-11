import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import { useTheme } from '@morfeo/react';
import { RoutingProvider } from '../contexts';
import { SideBar } from './SideBar';
import { Header } from './Header';

import styles from './style.module.css';
import { Icon } from '../components';

export const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const shouldRender = useMemo(() => !!theme, [theme]);

  const content = useMemo(() => {
    if (!shouldRender) {
      return (
        <div className={styles.loadingContainer}>
          <Icon name="loading" size="xxl" />
        </div>
      );
    }

    return (
      <>
        <SideBar open={open} setOpen={setOpen} />
        <div className={clsx(styles.overlay, open && styles.open)} />
        <section className={clsx(styles.content, open && styles.open)}>
          {children}
        </section>
      </>
    );
  }, [children, open, shouldRender]);

  return (
    <RoutingProvider>
      <main
        className={clsx(styles.main, open && styles.open)}
        data-morfeo-theme="light"
      >
        <Header />
        {content}
      </main>
    </RoutingProvider>
  );
};
