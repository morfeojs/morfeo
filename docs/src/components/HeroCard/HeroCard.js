import React, { useMemo } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HeroCard.module.css';

export function HeroCard({ children, badge, icon, ctas = [], onClick }) {
  const renderedCta = useMemo(() => {
    return ctas.map(cta => (
      <Link
        key={cta.label}
        className={clsx('button button--primary button--lg', styles.cta)}
        to={cta.link}
        style={{ color: 'white' }}
      >
        {cta.label}
      </Link>
    ));
  }, [ctas]);

  return (
    <div
      className={clsx(styles.container, onClick && styles.clickable)}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      <p className={styles.text}>{children}</p>
      <div className={styles.buttons}>{renderedCta}</div>
    </div>
  );
}
