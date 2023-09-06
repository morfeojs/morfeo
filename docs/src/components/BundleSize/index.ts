import dynamic from 'next/dynamic';

export const BundleSize = dynamic(() =>
  import('./BundleSize').then(module => ({
    default: module.BundleSize,
  })),
);
