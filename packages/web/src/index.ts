import { parsers, Property } from '@morfeo/core';
import { pseudosParses, gradientParsers } from './parsers';
import { pseudosProperties } from './properties';

pseudosProperties.forEach(property => {
  parsers.add(property as Property, pseudosParses[property] as any);
});

Object.keys(gradientParsers).forEach(property => {
  parsers.add(property as Property, gradientParsers[property] as any);
});

export * from './types';

/** re-export of @morfeo/core */
export * from '@morfeo/core';
/** re-export of @morfeo/jss */
export * from '@morfeo/jss';
