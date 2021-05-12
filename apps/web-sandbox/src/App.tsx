import { useState, useCallback, FC } from 'react';
import styled, { ThemeProvider } from '@morfeo/styled-components-web';
import { theme, Component, Components } from '@morfeo/web';
import { useTheme, useStyles } from '@morfeo/hooks';
import { darkTheme, lightTheme } from './theme';

theme.set(lightTheme as any);

const Button = styled.Button({});

const StyledProvider: FC = ({ children }) => {
  const currentTheme = useTheme();

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

function getStyle<C extends Component = Component>(
  component: C,
  variant?: keyof Components['Button']['variants'],
) {
  const { style, variants } = theme.getValue('components', component);

  if (variant && variants && variants[variant]) {
    return JSON.stringify(variants[variant], undefined, 2);
  }

  return JSON.stringify(style, undefined, 2);
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
      color: 'primary',
      display: 'block',
      py: 's',
    },
  });

  return (
    <StyledProvider>
      <div style={containerStyle}>
        <div style={blockStyle}>
          <Button onClick={onClick}>{light ? `🌙` : `☀️`}</Button>
          <pre style={codeStyle}>{getStyle('Button')}</pre>
        </div>
        <div style={blockStyle}>
          <Button variant="primary">Primary variant</Button>
          <pre style={codeStyle}>{getStyle('Button', 'primary')}</pre>
        </div>
        <div style={blockStyle}>
          <Button variant="round">Round variant</Button>
          <pre style={codeStyle}>{getStyle('Button', 'round')}</pre>
        </div>
      </div>
    </StyledProvider>
  );
}

export default App;
