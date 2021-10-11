import React from "react";
import ReactDOM from "react-dom";
import Devtool from "./Devtool";
import browser from "webextension-polyfill";
import { getThemeFromAppAndInitMorfeo } from "../_shared/utils";
import { MORFEO_DEVTOOL_PANEL_NAME, ASSETS_PATHS } from "../constants";

getThemeFromAppAndInitMorfeo();

browser.devtools.panels.create(
  MORFEO_DEVTOOL_PANEL_NAME,
  ASSETS_PATHS.devtool.logo,
  ASSETS_PATHS.devtool.view
);

ReactDOM.render(<Devtool />, document.getElementById("devtool"));
