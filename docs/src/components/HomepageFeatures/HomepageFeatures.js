import React, { useCallback } from 'react';
import { Section } from '../Section';
import { useHistory } from '@docusaurus/router';
import { ClickableCard } from '../ClickableCard';
import { Icon } from '../Icon';
import styles from './HomepageFeatures.module.css';

const features = [
  {
    text: 'Web extension',
    link: '/docs/Features/web-extension',
    icon: <Icon name="webExtension" />,
  },
  {
    text: 'Multi theming',
    link: '/docs/Features/multi-theming',
    icon: '🌞 🌑',
  },
  {
    text: 'Framework agnostic',
    link: '/docs/Features/framework-agnostic',
    icon: '🕍 ⛪ 🕋',
  },
  {
    text: 'Single source of truth',
    link: '/docs/Features/single-source-of-truth',
    icon: '🧘',
  },
  { text: 'Extendible', link: '/docs/Features/extendible', icon: '🧩' },
  {
    text: 'CLI',
    link: '/docs/Features/CLI/',
    icon: <Icon name="cli" />,
    badge: 'beta',
  },
];

export function HomepageFeatures() {
  const history = useHistory();

  const getOnClick = useCallback(
    feature => {
      return () => history.push(feature.link);
    },
    [history.push],
  );

  return (
    <Section title="Features">
      <div className={styles.features}>
        {features.map((feature, index) => (
          <ClickableCard
            key={index}
            icon={feature.icon}
            onClick={getOnClick(feature)}
            badge={feature.badge}
            className={styles.feature}
          >
            <p className={styles.featureText}>{feature.text}</p>
          </ClickableCard>
        ))}
      </div>
    </Section>
  );
}
