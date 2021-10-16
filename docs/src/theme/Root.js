import React from 'react';
import Link from '@docusaurus/Link';
import { morfeo } from '@morfeo/react';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import '@morfeo/preset-default';
import CookieConsent from 'react-cookie-consent';

import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/lightTheme';

morfeo.setTheme('light', lightTheme);
morfeo.setTheme('dark', darkTheme);

enableMorfeoDevTool();

const buttonStyle = morfeo.resolve({ corner: 'm' });

function Root({ children }) {
  return (
    <>
      {children}
      <CookieConsent
        buttonClasses="button button--secondary button--lg"
        buttonStyle={buttonStyle}
      >
        We use cookies to improve your experience on our site. To find out more,
        read our <Link to="/privacy">privacy policy</Link>.
      </CookieConsent>
    </>
  );
}

export default Root;
