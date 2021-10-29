import ReactDOM from 'react-dom';
import browser from 'webextension-polyfill';
import { resetCss, MorfeoProvider } from '@morfeo/react';
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

ReactDOM.render(
  <MorfeoProvider>
    <Devtool />
  </MorfeoProvider>,
  document.getElementById('devtool'),
);
