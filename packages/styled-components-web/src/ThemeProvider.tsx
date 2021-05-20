import React, { FC, useEffect, useState } from 'react';
import { theme, Theme } from '@morfeo/web';
import { ThemeProvider as StyledProvider } from 'styled-components';

type Props = Omit<React.ComponentProps<typeof StyledProvider>, 'theme'>;

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [currentTheme, setTheme] = useState(theme.get());

  useEffect(() => {
    theme.subscribe(setTheme);
  }, []);

  return <StyledProvider theme={currentTheme}>{children}</StyledProvider>;
};
