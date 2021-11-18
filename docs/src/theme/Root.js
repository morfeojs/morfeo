import React from 'react';
import Link from '@docusaurus/Link';
import { morfeo, loadFont } from '@morfeo/react';
import { initPreset } from '@morfeo/preset-default';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import CookieConsent from 'react-cookie-consent';

import { fonts } from '../styles/fonts';

initPreset();

const buttonStyle = morfeo.resolve({ corner: 'm' });

fonts.forEach(font => loadFont(font));

enableMorfeoDevTool();

function Root({ children }) {
  return (
    <>
      {children}
      <CookieConsent
        cookieName="MorfeoPrivacyCookie"
        buttonClasses="button button--secondary button--lg"
        buttonStyle={buttonStyle}
        hideOnAccept
      >
        We use cookies to improve your experience on our site. To find out more,
        read our <Link to="/privacy">privacy policy</Link>.
      </CookieConsent>
    </>
  );
}

export default Root;
