import React, { useState, useContext, useMemo } from 'react';
import Cookies from 'js-cookie';
import { createContext } from 'react';
import CookieBanner from './CookieBanner';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEffect } from 'react';

const DEFAULT_STATE = {
  accepted: false,
  cookiePolicyKey: 'morfeo-privacy-cookie',
  trackingID: '',
};

const CookieContext = createContext([DEFAULT_STATE]);

function setGoogleAnalytics(trackingID, status) {
  window[`ga-disable-${trackingID}`] = status === 'disabled';
}

export function CookieProvider({
  children,
  cookiePolicyKey = DEFAULT_STATE.cookiePolicyKey,
}) {
  const { siteConfig } = useDocusaurusContext();
  const [value, setValue] = useState({
    ...DEFAULT_STATE,
    cookiePolicyKey,
    accepted: Cookies.get(cookiePolicyKey) === 'true',
    trackingID: siteConfig.presets[0][1].googleAnalytics.trackingID,
  });

  useEffect(() => {
    setGoogleAnalytics(
      value.trackingID,
      Cookies.get(cookiePolicyKey) === 'true' ? 'enabled' : 'disabled',
    );
  }, [value.trackingID]);

  const contextState = useMemo(() => [value, setValue], [value]);

  return (
    <CookieContext.Provider value={contextState}>
      {children}
      <CookieBanner />
    </CookieContext.Provider>
  );
}

export function useCookies() {
  const [state, setState] = useContext(CookieContext);

  function accept() {
    Cookies.set(state.cookiePolicyKey, true);
    setGoogleAnalytics(state.trackingID, 'enabled');
    setState(prev => ({ ...prev, accepted: true }));
  }

  function deny() {
    Cookies.set(state.cookiePolicyKey, false);
    setGoogleAnalytics(state.trackingID, 'disabled');
    setState(prev => ({ ...prev, accepted: false }));
  }

  return { ...state, accept, deny };
}
