import { darkTheme } from '@morfeo/preset-default';
import { components } from './components';

const theme = {
  ...darkTheme,
  fonts: {
    default: 'Montserrat, sans-serif',
  },
  components,
};

export default theme;
