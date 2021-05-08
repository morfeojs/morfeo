import { parsers, baseParser } from '@morfeo/core';
import { shadows, shadowOffset } from './parsers';

parsers.add('shadowColor', props => baseParser({ ...props, scale: 'colors' }));
parsers.add('shadowOpacity', props =>
  baseParser({ ...props, scale: 'opacities' }),
);
parsers.add('shadowOffset', shadowOffset);
parsers.add('shadow', shadows);

/** re-export of @morfeo/core */
export * from '@morfeo/core';
export * from './types';
