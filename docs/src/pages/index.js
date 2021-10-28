import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HomepageFeatures } from '../components';
import styles from './index.module.css';
import Logo from './Logo';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline.split('\n').map(part => (
            <p>{part}</p>
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
