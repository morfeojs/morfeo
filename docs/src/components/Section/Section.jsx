import React from 'react';
import styles from './Section.module.css';
import clsx from 'clsx';

export function Section({
  children,
  title,
  description,
  color = 'background',
}) {
  return (
    <section className={clsx('morfeo-section', `bg-${color}`)}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : undefined}
        {children}
      </div>
    </section>
  );
}
