import React, { FC } from 'react';
import { useTheme, MorfeoProvider } from '@morfeo/react';
import { ThemeProvider as StyledProvider } from 'styled-components';

type Props = Omit<React.ComponentProps<typeof StyledProvider>, 'theme'>;

const StyledWrapper: FC<Props> = ({ children }) => {
  const theme = useTheme();
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export const ThemeProvider: FC<Props> = props => {
  return (
    <MorfeoProvider>
      <StyledWrapper {...props} />
    </MorfeoProvider>
  );
};
