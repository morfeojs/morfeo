import React, { PropsWithChildren } from 'react';
import styles from './style.module.css';
export { Item } from './Item';

type Props = PropsWithChildren<{}>;

export const Grid: React.FC<Props> = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};
