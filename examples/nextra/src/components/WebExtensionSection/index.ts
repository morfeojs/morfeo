import dynamic from 'next/dynamic';

export const WebExtensionSection = dynamic(() =>
  import('./WebExtensionSection').then(module => ({
    default: module.WebExtensionSection,
  })),
);
