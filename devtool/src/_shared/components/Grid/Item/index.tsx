import React from "react";
import styles from './style.module.css';

export const Item: React.FC = ({ children }) => {
  return (<div className={styles.item}>{children}</div>)
}