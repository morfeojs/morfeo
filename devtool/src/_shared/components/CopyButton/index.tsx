import React, { useCallback, useState, MouseEvent } from 'react';
import { Color } from '@morfeo/react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import styles from './style.module.css';
import { t } from '../../utils';

type Props = {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  style?: React.CSSProperties;
};

function copyToClipboard(element: HTMLElement) {
  if (window.getSelection && document.createRange) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection?.removeAllRanges();
    selection?.addRange(range);

    return document.execCommand('copy', true);
  }

  return false;
}

export const CopyButton: React.FC<Props> = ({
  text,
  label = t('copyAlias'),
  copiedLabel = t('aliasCopied'),
  style,
  className,
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  const onClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const hasBeenCopied = copyToClipboard(ref.current as HTMLSpanElement);
    if (hasBeenCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    setIsCopied(hasBeenCopied);
  }, []);

  return (
    <>
      <div
        className={clsx(
          styles.copyButton,
          className,
          isCopied && styles.copied,
        )}
        onClick={onClick}
        style={style}
      >
        <p className="morfeo-typography-p2">{isCopied ? copiedLabel : label}</p>
        <Icon
          name={isCopied ? 'check' : 'copy'}
          size="xs"
          color={'invertedTextColor' as Color}
          className={styles.icon}
        />
      </div>
      <span ref={ref} className={styles.hiddenText}>
        {text}
      </span>
    </>
  );
};
