import React from 'react';
import { loadFont } from '@morfeo/react';
import { initPreset } from '@morfeo/preset-default';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import { fonts } from '../styles/fonts';
import { CookieProvider } from '../components/CookieBanner/CookieProvider';

initPreset();

fonts.forEach(font => loadFont(font));

enableMorfeoDevTool();

function Root({ children }) {
  return <CookieProvider>{children}</CookieProvider>;
}

export default Root;
