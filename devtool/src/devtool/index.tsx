import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';
import { resetCss } from '@morfeo/react';
import { getThemeFromAppAndInitMorfeo } from '../_shared/utils';
import { MORFEO_DEVTOOL_PANEL_NAME, ASSETS_PATHS } from '../_shared/constants';
import Devtool from './Devtool';

getThemeFromAppAndInitMorfeo();

resetCss();

browser.devtools.panels.create(
  MORFEO_DEVTOOL_PANEL_NAME,
  ASSETS_PATHS.devtool.logo,
  ASSETS_PATHS.devtool.view,
);

const container = document.getElementById('devtool');

if (container) {
  const root = createRoot(container);
  root.render(<Devtool />);
}
