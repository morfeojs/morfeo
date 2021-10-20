import { lightTheme } from '@morfeo/preset-default';
import { components } from './components';

const theme = {
  ...lightTheme,
  fonts: {
    bold: 'Montserrat, sans-serif',
    medium: 'Montserrat, sans-serif',
    regular: 'Montserrat, sans-serif',
  },
  components,
};

export default theme;
