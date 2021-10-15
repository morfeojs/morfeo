import React from 'react';
import { useStyle, Style } from '@morfeo/react';
import styles from './style.module.css';
import clsx from 'clsx';
import { CopyButton } from '../CopyButton';

type Props = {
  style?: Style;
  copyText?: string;
  copyLabel?: string;
  copiedLabel?: string;
} & React.HTMLProps<HTMLDivElement>;

export const Card: React.FC<Props> = ({
  style,
  children,
  copyText,
  copyLabel,
  copiedLabel,
  className,
  ...props
}) => {
  const cardStyle = useStyle(style || {});
  return (
    <div
      className={clsx('morfeo-card', styles.container, className)}
      style={cardStyle as React.CSSProperties}
      {...props}
    >
      {children}
      {copyText && (
        <CopyButton
          text={copyText}
          label={copyLabel}
          copiedLabel={copiedLabel}
          className={styles.copyButton}
        />
      )}
    </div>
  );
};
