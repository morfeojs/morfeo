import React from 'react';
import styles from './ClickableCard.module.css';
import ArrowRight from './ArrowRight';

export function ClickableCard({ children, badge, icon, onClick }) {
  return (
    <div
      className={styles.container}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {badge && <span className={styles.badge}>{badge}</span>}
      <p className={styles.text}>{children}</p>
      <ArrowRight onClick={onClick} className={styles.arrowRight} />
    </div>
  );
}
