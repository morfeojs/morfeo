import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './AddToChrome.module.css';

export function AddToChrome() {
  return (
    <Link
      to="https://chrome.google.com/webstore/detail/morfeo/phhhjdmeicikchjnpepljcdgbmipipcl"
      className={clsx('button button--lg', styles.link)}
    >
      <img src="/img/chromeLogo.svg" className={styles.image} />
      <span>Add Morfeo to Chrome</span>
    </Link>
  );
}
