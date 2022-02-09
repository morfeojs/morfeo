import React from 'react';
import CLI from './icons/CLI';
import Logo from './icons/Logo';
import WebExtension from './icons/WebExtension';
import Close from './icons/CloseIcon';
import ArrowRight from './icons/ArrowRight';

const iconsMap = {
  cli: CLI,
  logo: Logo,
  webExtension: WebExtension,
  close: Close,
  arrowRight: ArrowRight,
};

export function Icon({ name, ...props }) {
  const SelectedIcon = iconsMap[name];

  if (!SelectedIcon) {
    return <></>;
  }

  return <SelectedIcon {...props} />;
}
