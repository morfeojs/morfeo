import { useState, useCallback } from 'react';
import { ThemeProvider } from '@morfeo/styled-components-web';
import { theme, Component, Variant } from '@morfeo/web';
import { useStyles } from '@morfeo/hooks';
import { darkTheme, lightTheme } from './theme';
import { Box, Button, Typography } from './components';

function getStyle<C extends Component = Component>(
  component: C,
  variant?: Variant<C>,
) {
  // @ts-ignore
  const { style, tag, props, variants } = theme.getValue(
    'components',
    component,
  );
  // @ts-ignore
  if (variant && variants && variants[variant]) {
    // @ts-ignore
    return JSON.stringify(variants[variant], undefined, 2);
  }

  return JSON.stringify({ style, tag, props }, undefined, 2);
}

function App() {
  const [light, setLight] = useState(true);

  const onClick = useCallback(() => {
    theme.set(light ? darkTheme : lightTheme);
    setLight(prev => !prev);
  }, [light]);

  const { containerStyle, blockStyle, codeStyle } = useStyles({
    containerStyle: {
      bg: 'secondary',
      width: '100vw' as any,
      display: 'flex',
      height: '100vh' as any,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      transition: 'light',
    },
    blockStyle: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '100%' as any,
    },
    codeStyle: {
      display: 'block',
      py: 's',
    },
  });

  return (
    <ThemeProvider>
      <Box style={containerStyle}>
        <Box style={blockStyle}>
          <Button onClick={onClick}>{light ? `🌙` : `☀️`}</Button>
          <Typography variant="code" style={codeStyle}>
            {getStyle('Button')}
          </Typography>
        </Box>
        <Box style={blockStyle}>
          <Button variant="primary">Primary variant</Button>
          <Typography variant="code" style={codeStyle}>
            {getStyle('Button', 'primary')}
          </Typography>
        </Box>
        <Box style={blockStyle}>
          <Button variant="round">Round variant</Button>
          <Typography variant="code" style={codeStyle}>
            {getStyle('Button', 'round')}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
