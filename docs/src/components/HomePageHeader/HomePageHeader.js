import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HeroCard } from '../HeroCard';
import styles from './HomePageHeader.module.css';
import { Icon } from '../Icon';

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoContainer}>
          <Icon name="logo" />
        </div>
        <div className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline.split('\n').map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>
        <div className={styles.cardContainer}>
          <HeroCard
            ctas={[
              {
                label: 'Get started',
                link: '/docs/Introduction/getting-started',
              },
            ]}
          >
            Morfeo is a tool to build design systems based on a theme. It helps
            you to <i>follow a design language</i> and write{' '}
            <i>consistent UIs</i>, whatever it is the framework of your choice.
            It's easy to use and, with the
            <a href="/docs/Features/web-extension">
              <strong> browser extension</strong>
            </a>
            , your theme and your components are automatically documented.
          </HeroCard>
        </div>
      </div>
    </header>
  );
}
