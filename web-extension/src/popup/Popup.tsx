import { useMemo } from 'react';
import { useIsUsingMorfeo } from '../_shared/hooks';
import { t } from '../_shared/utils';
import './Popup.css';

const IS_MORFEO_MESSAGE = t('popup_morfeoUsed');
const IS_NOT_MORFEO_MESSAGE = t('popup_morfeoNotUsed');

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
          {t('popup_CTA')}
        </a>
      </header>
    </div>
  );
}

export default Popup;
