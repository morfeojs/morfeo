import dynamic from 'next/dynamic';

export const HowItWorks = dynamic(() =>
  import('./HowItWorks').then(module => ({
    default: module.HowItWorks,
  })),
);
