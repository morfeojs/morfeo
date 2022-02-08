import clsx from 'clsx';
import React from 'react';
import { useCookies } from '../CookieBanner/CookieProvider';
import styles from './RemoveCookieButton.module.css';

export function RemoveCookieButton() {
  const { accepted, deny, accept } = useCookies();

  return (
    <button
      className={clsx(
        'button button--lg',
        accepted ? 'button--info' : 'button--primary',
        styles.button,
      )}
      onClick={accepted ? deny : accept}
    >
      🍪 {accepted ? 'Deny' : 'Accept'} cookies policy
    </button>
  );
}
