import React, { useMemo } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HeroCard.module.css';

export function HeroCard({ children, ctas = [] }) {
  const renderedCta = useMemo(() => {
    return ctas.map(cta => (
      <Link
        key={cta.label}
        className={clsx('button button--primary button--lg', styles.cta)}
        to={cta.link}
        style={{ color: 'var(--colors-inverted-text)' }}
      >
        {cta.label}
      </Link>
    ));
  }, [ctas]);

  return (
    <div className={clsx('morfeo-card', styles.container)}>
      <p className={clsx('morfeo-typography-p1', styles.text)}>{children}</p>
      <div className={styles.buttons}>{renderedCta}</div>
    </div>
  );
}
