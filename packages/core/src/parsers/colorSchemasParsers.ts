import { colorSchemasProperties } from '@morfeo/spec';
import { SliceParsers } from '../types';

type ColorSchemasParsers = SliceParsers<
  typeof colorSchemasProperties,
  keyof typeof colorSchemasProperties
>;

export const colorSchemasParsers = Object.keys(colorSchemasProperties).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: () => ({}),
  }),
  {} as ColorSchemasParsers,
);
