import { parsers, Property } from '@morfeo/core';
import { gradientParsers } from './parsers';

Object.keys(gradientParsers).forEach(property => {
  parsers.add(property as Property, gradientParsers[property] as any);
});

export * from './utils';

export * from './types';

/** re-export of @morfeo/core */
export * from '@morfeo/core';
/** re-export of @morfeo/jss */
export * from '@morfeo/jss';
/** re-export of @morfeo/fonts */
export * from '@morfeo/fonts';
