import { darkTheme } from '@morfeo/preset-default';
import { components } from './components';

const theme = {
  ...darkTheme,
  fonts: {
    bold: 'Montserrat, sans-serif',
    medium: 'Montserrat, sans-serif',
    regular: 'Montserrat, sans-serif',
  },
  components,
};

export default theme;
