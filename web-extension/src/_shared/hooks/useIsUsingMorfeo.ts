import { useEffect, useState } from 'react';
import browser from 'webextension-polyfill';
import { MorfeoDevToolAction } from '../types';
import { getThemeFromApp } from '../utils';

export function useIsUsingMorfeo() {
  const [isUsingMorfeo, setIsUsingMorfeo] = useState<boolean | undefined>(
    undefined,
  );

  const onMessage = (message?: MorfeoDevToolAction) => {
    setIsUsingMorfeo(!!message && !!message.theme);
  };

  useEffect(() => {
    getThemeFromApp().then(onMessage);
    browser.runtime.onMessage.addListener(onMessage);
  }, []);

  return isUsingMorfeo;
}
