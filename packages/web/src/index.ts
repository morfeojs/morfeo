import { parsers, Property } from '@morfeo/core';
import { gradientParsers } from './parsers';

Object.keys(gradientParsers).forEach(property => {
  parsers.add(property as Property, gradientParsers[property] as any);
});

export * from '@morfeo/core';
export * from '@morfeo/jss';
export * from '@morfeo/fonts';

export * from './utils';
export * from './types';
