import React, { useEffect, useCallback } from 'react';
import styles from './CookieBanner.module.css';
import { ClickableCard } from '../ClickableCard/ClickableCard';
import { Icon } from '../Icon';
import { useCookies } from './CookieProvider';
import { useHistory } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';

function CookieBanner() {
  const history = useHistory();
  const { accepted, accept } = useCookies();
  const isBrowser = useIsBrowser();

  const onClick = useCallback(() => {
    history.push('/privacy');
  }, [history.push]);

  const onClickClose = useCallback(
    e => {
      e.stopPropagation();
      accept();
    },
    [accept],
  );

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

  if (!isBrowser || accepted) {
    return <></>;
  }

  return (
    <ClickableCard icon={'🍪'} className={styles.container} onClick={onClick}>
      <p className="font-weight-bold">
        We use cookies to improve your experience on our site. To find out more,
        read our privacy policy.
      </p>
      <Icon name="close" className={styles.closeIcon} onClick={onClickClose} />
    </ClickableCard>
  );
}

export default CookieBanner;
