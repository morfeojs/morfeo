import { useMemo } from 'react';
import { useIsUsingMorfeo } from '../_shared/hooks';
import './Popup.css';

const IS_MORFEO_MESSAGE = '✅ This page is using morfeo.';
const IS_NOT_MORFEO_MESSAGE = "😢 This page doesn't appear to use morfeo.";

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
