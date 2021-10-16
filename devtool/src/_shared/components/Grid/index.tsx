import React from 'react';
import styles from './style.module.css';
export { Item } from './Item/index';

export const Grid: React.FC = ({ children }) => {
  return <div className={styles.section}>{children}</div>
}