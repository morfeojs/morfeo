import React, { useCallback, useState } from 'react';
import { Color } from '@morfeo/react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import styles from './style.module.css';
import { t } from '../../utils';

type Props = {
  text: string;
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

export const CopyButton: React.FC<Props> = ({ text, style }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  const onClick = useCallback(() => {
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
        className={clsx(styles.copyButton, isCopied && styles.copied)}
        onClick={onClick}
        style={style}
      >
        <Icon name="copy" size="s" color={'invertedTextColor' as Color} />
        <p className="morfeo-typography-p2">
          {isCopied ? t('aliasCopied') : t('copyAlias')}
        </p>
      </div>
      <span ref={ref} className={styles.hiddenText}>
        {text}
      </span>
    </>
  );
};
