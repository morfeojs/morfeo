import browser from 'webextension-polyfill';
import translations from '../../../public/_locales/en/messages.json';

type Translations = typeof translations & {
  '@@extension_id': string;
  '@@ui_locale': string;
  '@@bidi_dir': string;
  '@@bidi_reversed_dir': string;
  '@@bidi_start_edge': string;
  '@@bidi_end_edge': string;
};

export function t(message: keyof Translations) {
  return browser.i18n.getMessage(message);
}
