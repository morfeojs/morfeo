import dynamic from 'next/dynamic';

export const PlaygroundSection = dynamic(() =>
  import('./PlaygroundSection').then(module => ({
    default: module.PlaygroundSection,
  })),
);
