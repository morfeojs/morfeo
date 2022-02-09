import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './AddToChrome.module.css';
import { Icon } from '../Icon';

export function AddToChrome() {
  return (
    <Link
      to="https://chrome.google.com/webstore/detail/morfeo/phhhjdmeicikchjnpepljcdgbmipipcl"
      className={clsx(
        'button button--outline button--primary button--lg',
        styles.link,
      )}
    >
      <Icon name="webExtension" className={styles.image} />
      Add Morfeo to Chrome
    </Link>
  );
}
