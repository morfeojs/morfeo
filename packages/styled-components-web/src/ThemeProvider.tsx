import React, { FC, useEffect, useState } from 'react';
import { theme } from '@morfeo/web';
import { ThemeProvider as StyledProvider } from 'styled-components';

type Props = Omit<React.ComponentProps<typeof StyledProvider>, 'theme'>;

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [currentTheme, setTheme] = useState(theme.get());

  useEffect(() => {
    theme.listen(setTheme);
  }, []);

  return <StyledProvider theme={currentTheme}>{children}</StyledProvider>;
};
