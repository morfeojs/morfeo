import { useTheme } from '@morfeo/react';
import { morfeoStyled, propsParser, attributesParser } from './styled';
export * from 'styled-components';
export * from './types';

export { propsParser, attributesParser };
/**
 * Overrides styled-component's ThemeProvider
 */
export { ThemeProvider } from './ThemeProvider';
/**
 * Overrides styled-component's useTheme hook
 */
export { useTheme };
/**
 * Overrides styled-component's styled function
 */
export default morfeoStyled;
