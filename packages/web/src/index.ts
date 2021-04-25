import { parsers } from '@morfeo/core';
import { pseudosParses } from './parsers';
import { pseudosProperties } from './properties';
import './index.d';

pseudosProperties.forEach(property => {
  parsers.add(property, pseudosParses[property] as any);
});

/** re-export of @morfeo/core */
export * from '@morfeo/core';
export * from './types';
