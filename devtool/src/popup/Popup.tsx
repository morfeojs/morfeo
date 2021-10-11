import browser from "webextension-polyfill";
import { useEffect, useMemo, useState } from "react";
import { getThemeFromApp } from "../_shared/utils";
import "./Popup.css";
import { MorfeoDevToolAction } from "../_shared/types";

const IS_MORFEO_MESSAGE = "✅ This page is using morfeo.";
const IS_NOT_MORFEO_MESSAGE = "😢 This page doesn't appear to use morfeo.";

function useIsUsingMorfeo() {
  const [isUsingMorfeo, setIsUsingMorfeo] = useState<boolean>();

  const onMessage = (message?: MorfeoDevToolAction) => {
    setIsUsingMorfeo(!!message && !!message.theme);
  };

  useEffect(() => {
    getThemeFromApp().then(onMessage);
    browser.runtime.onMessage.addListener(onMessage);
  }, []);

  return isUsingMorfeo;
}

function Popup() {
  const isUsingMorfeo = useIsUsingMorfeo();

  const message = useMemo(() => {
    return isUsingMorfeo ? IS_MORFEO_MESSAGE : IS_NOT_MORFEO_MESSAGE;
  }, [isUsingMorfeo]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <a
          className="App-link"
          href="https://morfeo.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Morfeo
        </a>
      </header>
    </div>
  );
}

export default Popup;
