import { theme } from '@morfeo/react';
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import { lightTheme } from './theme';

enableMorfeoDevTool();

theme.set(lightTheme);

function Root({ children }) {
  return children;
}

export default Root;
