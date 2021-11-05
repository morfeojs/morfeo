export const spacings = {
  none: '0rem',
  '3xs': '.25rem',
  '2xs': '.5rem',
  xs: '1rem',
  s: '1.5rem',
  m: '2rem',
  l: '2.5rem',
  xl: '3rem',
  '2xl': '3.5rem',
  '3xl': '4rem',
  '4xl': '5rem',
  '5xl': '6rem',
};

type LocalSpacings = typeof spacings;

declare module '@morfeo/spec' {
  export interface Spacings extends LocalSpacings {}
}
