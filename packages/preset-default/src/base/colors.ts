const grayScale = {
  'gray.darkest': '#414141',
  'gray.darker': '#575757',
  'gray.dark': '#6C6C6C',
  gray: '#828282',
  'gray.light': '#A3A3A3',
  'gray.lighter': '#C5C5C5',
  'gray.lightest': '#E6E6E6',
};

export const baseColors = {
  dark: grayScale['gray.dark'],
  light: grayScale['gray.light'],
  ...grayScale,
  'primary.lightest': '#dbe9ff',
  'primary.lighter': '#92bdff',
  'primary.light': '#4992ff',
  primary: '#06f',
  'primary.dark': '#0049b6',
  'primary.darker': '#002c6d',
  'primary.darkest': '#000f24',
  'secondary.lightest': '#fae0f0',
  'secondary.lighter': '#f0a1d1',
  'secondary.light': '#e563b3',
  secondary: '#db2494',
  'secondary.dark': '#9c1a6a',
  'secondary.darker': '#5e0f3f',
  'secondary.darkest': '#1f0515',
  error: '#d10343',
  success: '#01ce80',
  warning: '#ff8c00',
  accent: '#23cedf',
  disabled: '#bcbcbc',
  white: '#ffffff',
  black: '#000000',
};

export const darkColors = {
  ...baseColors,
  background: '#000000',
  invertedBackground: '#ffffff',
  textColor: '#ececec',
  invertedTextColor: '#2f2f2f',
  headTextColor: '#ffffff',
  invertedHeadTextColor: '#000000',
};

export const lightColors = {
  ...baseColors,
  background: '#ffffff',
  invertedBackground: '#000000',
  textColor: '#2f2f2f',
  invertedTextColor: '#ececec',
  headTextColor: '#000000',
  invertedHeadTextColor: '#ffffff',
};

type LocalColors = typeof lightColors & typeof darkColors;

declare module '@morfeo/spec' {
  export interface Colors extends LocalColors {}
}
