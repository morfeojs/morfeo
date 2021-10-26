import React from 'react';
import Link from '@docusaurus/Link';
import { morfeo, loadFont } from '@morfeo/react';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import CookieConsent from 'react-cookie-consent';

import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';

morfeo.setTheme('light', lightTheme);
morfeo.setTheme('dark', darkTheme);

const buttonStyle = morfeo.resolve({ corner: 'm' });

const fonts = [
  {
    urls: [
      {
        url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap',
      },
    ],
    importFontFace: true,
    name: 'regular',
    family: 'Montserrat',
  },
  {
    urls: [
      {
        url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap',
      },
    ],
    importFontFace: true,
    name: 'medium',
    family: 'Montserrat',
  },
  {
    urls: [
      {
        url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap',
      },
    ],
    importFontFace: true,
    name: 'bold',
    family: 'Montserrat',
  },
];

fonts.forEach(font => loadFont(font));

enableMorfeoDevTool();

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
