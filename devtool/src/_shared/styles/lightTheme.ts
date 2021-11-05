import { lightTheme } from '@morfeo/preset-default';
import { components } from './components';

const theme = {
  ...lightTheme,
  fonts: {
    default: 'Montserrat, sans-serif',
  },
  components,
};

export default theme;
