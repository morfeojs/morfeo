import React from 'react';
import { useStyle, Style } from '@morfeo/react';
import styles from './style.module.css';
import clsx from 'clsx';
import { CopyButton } from '../CopyButton';

type Props = {
  style?: Style;
  copyText?: string;
} & React.HTMLProps<HTMLDivElement>;

export const Card: React.FC<Props> = ({
  children,
  copyText,
  style,
  ...props
}) => {
  const cardStyle = useStyle(style || {});
  return (
    <div
      className={clsx('morfeo-card', styles.container)}
      style={cardStyle as React.CSSProperties}
      {...props}
    >
      {children}
      {copyText && <CopyButton text={copyText} className={styles.copyButton} />}
    </div>
  );
};
