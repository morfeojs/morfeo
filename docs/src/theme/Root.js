import React from 'react';
import Link from '@docusaurus/Link';
import { parsers, theme } from '@morfeo/react';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import CookieConsent from 'react-cookie-consent';
import { lightTheme } from './theme';

enableMorfeoDevTool();

theme.set(lightTheme);

const buttonStyle = parsers.resolve({ borderRadius: 'm' });

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
