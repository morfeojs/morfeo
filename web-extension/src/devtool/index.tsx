import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';
import { resetCss } from '@morfeo/react';
import { getThemeFromAppAndInitMorfeo } from '../_shared/utils';
import { MORFEO_DEVTOOL_PANEL_NAME, ASSETS_PATHS } from '../_shared/constants';
import Devtool from './Devtool';
import { useEffect, useState } from 'react';

resetCss();

function Container() {
  useEffect(() => {
    getThemeFromAppAndInitMorfeo();
  }, []);

  useEffect(() => {
    browser.devtools.panels.create(
      MORFEO_DEVTOOL_PANEL_NAME,
      ASSETS_PATHS.devtool.logo,
      ASSETS_PATHS.devtool.view,
    );
  }, []);

  return <Devtool />;
}

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<Container />);
