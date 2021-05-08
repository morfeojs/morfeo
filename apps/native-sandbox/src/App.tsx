import React from 'react';
import { SafeAreaView, View, LogBox } from 'react-native';
import { theme, Style } from '@morfeo/native';
import { useTheme, useStyle } from '@morfeo/hooks';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './theme';
import { Button } from './components';

LogBox.ignoreAllLogs();

theme.set(defaultTheme);

const Box: React.FC<Style> = ({ children, ...props }) => {
  const style = useStyle(props);
  return <View style={style}>{children}</View>;
};

const StyleProvider: React.FC = ({ children }) => {
  const currentTheme = useTheme();

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

const App = () => {
  const safeAreaStyle = useStyle({
    flex: 1,
    justifyContent: 'center',
  });

  const shadowStyle = useStyle({
    shadow: 'strong',
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
          <Button style={shadowStyle}>Default</Button>
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
