import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './CookieBanner.module.css';
import { ClickableCard } from '../ClickableCard/ClickableCard';
import CloseIcon from './CloseIcon';
import { useCookies } from './CookieProvider';
import { useHistory } from '@docusaurus/router';
import { useCallback } from 'react';

function CookieBanner() {
  const history = useHistory();
  const { accepted, accept } = useCookies();

  const onClick = useCallback(() => {
    history.push('/privacy');
  }, [history.push]);

  const onClickClose = useCallback(e => {
    e.stopPropagation();
    accept();
  }, []);

  useEffect(() => {
    function setHeightProperty() {
      const root = document.querySelector(':root');
      root.style.setProperty(
        '--cookies-window-height',
        `${window.innerHeight + window.scrollY}px`,
      );
    }
    window.addEventListener('scroll', setHeightProperty);

    return () => {
      window.removeEventListener('scroll', setHeightProperty);
    };
  }, []);

  if (accepted) {
    return <></>;
  }

  return (
    <ClickableCard
      icon={'🍪'}
      className={clsx(styles.container)}
      onClick={onClick}
    >
      <p className="font-weight-bold">
        We use cookies to improve your experience on our site. To find out more,
        read our privacy policy.
      </p>
      <CloseIcon className={styles.closeIcon} onClick={onClickClose} />
    </ClickableCard>
  );
}

export default CookieBanner;
