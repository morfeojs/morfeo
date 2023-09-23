import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';
import { resetCss, getThemeFromAppAndInitMorfeo } from '../_shared/utils';
import { MORFEO_DEVTOOL_PANEL_NAME, ASSETS_PATHS } from '../_shared/constants';
import Devtool from './Devtool';
import { MorfeoProvider } from '@morfeo/react';
import { morfeo } from './morfeo';

resetCss();

function Container() {
  useEffect(() => {
    getThemeFromAppAndInitMorfeo().then(instance => {
      morfeo.theme.set(instance.theme.get());
      instance.theme.subscribe(morfeo.theme.set);
    });
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

root.render(
  <MorfeoProvider instance={morfeo}>
    <Container />
  </MorfeoProvider>,
);
