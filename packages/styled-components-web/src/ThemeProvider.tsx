import React, { FC } from 'react';
import { useTheme } from '@morfeo/react';
import { ThemeProvider as StyledProvider } from 'styled-components';

type Props = Omit<React.ComponentProps<typeof StyledProvider>, 'theme'>;

export const ThemeProvider: FC<Props> = ({ children }) => {
  const theme = useTheme();
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};
