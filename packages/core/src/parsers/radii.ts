import { radiiProperties } from '@morfeo/spec';
import { SliceParsers } from '../types';
import { baseParser } from './baseParser';

type RadiiParsers = SliceParsers<
  typeof radiiProperties,
  keyof typeof radiiProperties
>;

const radiiAliasesMap = {
  corner: 'borderRadius',
  cornerEndEnd: 'borderEndEndRadius',
  cornerTopLeft: 'borderTopLeftRadius',
  cornerEndStart: 'borderEndStartRadius',
  cornerTopRight: 'borderTopRightRadius',
  cornerStartEnd: 'borderStartEndRadius',
  cornerStartStart: 'borderStartStartRadius',
  cornerBottomLeft: 'borderBottomLeftRadius',
  cornerBottomRight: 'borderBottomRightRadius',
};

export const radiiParsers = Object.keys(radiiAliasesMap).reduce(
  (acc, prop) => ({
    ...acc,
    [prop]: props =>
      baseParser({
        ...props,
        scale: 'radii',
        property: radiiAliasesMap[prop],
      }),
  }),
  {},
) as RadiiParsers;
