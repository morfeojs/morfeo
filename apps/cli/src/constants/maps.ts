import { ThemeKey } from '@morfeo/web';

type SliceToBeParsed = {
  name: ThemeKey;
  styleProp: string;
  property: string;
};

export const BLACK_LIST: ThemeKey[] = ['components', 'mediaQueries'];

export const TO_BE_PARSED_SLICES_LIST: SliceToBeParsed[] = [
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
];
