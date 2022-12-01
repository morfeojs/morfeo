import { ThemeKey } from '@morfeo/web';

type SliceToBeParsed = {
  name: ThemeKey;
  styleProp: string;
  property: string;
};

/**
 * The values of these slices can't be represented as css variables
 */
export const SLICES_TO_BE_EXCLUDED: ThemeKey[] = [
  'components',
  'mediaQueries',
  'colorSchemas',
];

/**
 * The value of those theme slices has to be parsed before to become css variables
 */
export const SLICES_TO_BE_PARSED: SliceToBeParsed[] = [
  {
    name: 'shadows',
    styleProp: 'shadow',
    property: 'boxShadow',
  },
  {
    name: 'gradients',
    styleProp: 'bgGradient',
    property: 'background',
  },
  {
    name: 'borders',
    styleProp: 'border',
    property: 'border',
  },
];
