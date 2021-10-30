import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomePageHeader.module.css';
import Logo from './Logo';

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline.split('\n').map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/Introduction/getting-started"
            style={{ color: 'white' }}
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
