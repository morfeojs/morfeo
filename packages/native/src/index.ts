import { morfeo, baseParser } from '@morfeo/core';
import { shadows, shadowOffset } from './parsers';

morfeo.parsers.add('shadowColor', props =>
  baseParser({ ...props, scale: 'colors' }),
);
morfeo.parsers.add('shadowOpacity', props =>
  baseParser({ ...props, scale: 'opacities' }),
);
morfeo.parsers.add('shadowOffset', shadowOffset);
morfeo.parsers.add('shadowRadius', props =>
  baseParser({ ...props, scale: 'spacings' }),
);
morfeo.parsers.add('shadow', shadows);

/** re-export of @morfeo/core */
export * from '@morfeo/core';
export * from './types';
