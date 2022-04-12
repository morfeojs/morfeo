import React, { useState, useMemo, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { RoutingProvider } from '../contexts';
import { t } from '../utils';
import { Icon } from '../components';
import { useIsUsingMorfeo } from '../hooks';
import { Header } from './Header';
import { SideBar } from './SideBar';
import styles from './style.module.css';

type Props = PropsWithChildren<{}>;

export const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const shouldRender = useIsUsingMorfeo();

  const content = useMemo(() => {
    if (shouldRender === false) {
      return (
        <div className={styles.loadingContainer}>
          <Icon name="loading" size="2xl" />
        </div>
      );
    }

    if (!shouldRender) {
      return (
        <div className={styles.loadingContainer}>
          <h1 className="morfeo-typography-h1">{t('morfeoNotUsed')}</h1>
        </div>
      );
    }

    return (
      <>
        <SideBar open={open} setOpen={setOpen} />
        <div
          className={clsx(styles.overlay, open && styles.open)}
          onClick={() => setOpen(false)}
        />
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
