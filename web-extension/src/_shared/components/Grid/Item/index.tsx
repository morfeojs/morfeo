import React, { PropsWithChildren } from 'react';
import styles from './style.module.css';

type Props = PropsWithChildren<{}>;

export const Item: React.FC<Props> = ({ children }) => {
  return <div className={styles.item}>{children}</div>;
};
