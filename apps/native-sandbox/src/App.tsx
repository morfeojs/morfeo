import React from 'react';
import { SafeAreaView, LogBox } from 'react-native';
import { theme, parsers, Style } from '@morfeo/native';
import { useTheme, useStyle } from '@morfeo/hooks';
import styled, { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './theme';
import { Button } from './components';

LogBox.ignoreAllLogs();

theme.set(defaultTheme as any);

const Box = styled.View<Style>(style => parsers.resolve(style) as any);

const StyleProvider: React.FC = ({ children }) => {
  const currentTheme = useTheme();

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

const App = () => {
  const safeAreaStyle = useStyle({
    flex: 1,
    justifyContent: 'center',
  });

  return (
    <StyleProvider>
      <SafeAreaView style={safeAreaStyle}>
        <Box
          bg="background"
          flex={1}
          alignItems="center"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="round" color="white">
            Round
          </Button>
        </Box>
      </SafeAreaView>
    </StyleProvider>
  );
};

export default App;
