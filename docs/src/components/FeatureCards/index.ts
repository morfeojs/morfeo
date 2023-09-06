import dynamic from 'next/dynamic';

export const FeatureCards = dynamic(() =>
  import('./FeatureCards').then(module => ({
    default: module.FeatureCards,
  })),
);
