import { parsers, Property } from '@morfeo/core';
import { pseudosParses } from './parsers';
import { pseudosProperties } from './properties';

pseudosProperties.forEach(property => {
  parsers.add(property as Property, pseudosParses[property] as any);
});

/** re-export of @morfeo/core */
export * from '@morfeo/core';
export * from './types';
