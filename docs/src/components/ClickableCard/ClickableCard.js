import React from 'react';
import styles from './ClickableCard.module.css';
import clsx from 'clsx';
import { Icon } from '../Icon';

export function ClickableCard({ children, badge, icon, onClick, className }) {
  return (
    <div
      className={clsx('morfeo-card-outlined', styles.container, className)}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {badge && <span className={styles.badge}>{badge}</span>}
      <Icon name="arrowRight" onClick={onClick} className={styles.arrowRight} />
      {children}
    </div>
  );
}
