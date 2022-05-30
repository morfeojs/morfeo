import React from 'react';
import { Style, useStyle } from '@morfeo/react';
import styles from './style.module.css';
import clsx from 'clsx';
import { CopyButton } from '../CopyButton';

type Props = {
  kind?: 'squared' | 'rounded';
  style?: Style;
  copyText?: string;
  copyLabel?: string;
  copiedLabel?: string;
} & React.HTMLProps<HTMLDivElement>;

export const Card: React.FC<Props> = ({
  kind = 'rounded',
  style,
  children,
  copyText,
  copyLabel,
  copiedLabel,
  className,
  ...props
}) => {
  const cardStyle = useStyle(style || {});
  const roundedStyle = kind === 'squared' ? { borderRadius: 0 } : {};
  const copyButtonStyle =
    kind === 'squared'
      ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
      : {};
  return (
    <div
      className={clsx('morfeo-card', styles.container, className)}
      style={{ ...(cardStyle as React.CSSProperties), ...roundedStyle }}
      {...props}
    >
      {children}
      {copyText && (
        <CopyButton
          text={copyText}
          label={copyLabel}
          copiedLabel={copiedLabel}
          className={styles.copyButton}
          style={copyButtonStyle}
        />
      )}
    </div>
  );
};
