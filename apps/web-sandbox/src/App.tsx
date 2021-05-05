import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, parsers, Component } from '@morfeo/web';
import { useTheme } from '@morfeo/hooks';

const lightTheme = {
  colors: {
    primary: 'white',
    secondary: 'black',
    danger: 'red',
  },
  radii: {
    m: '10px',
    round: '50%',
  },
  space: {
    s: '40px',
    m: '100px',
  },
  sizes: {
    s: '10px',
    m: '100px',
    xl: '200px',
  },
  borderWidths: {
    s: '2px',
  },
  breakpoints: {
    md: '900px',
    lg: '1300px',
  },
  transitions: {
    light: 'all 0.5s',
  },
  components: {
    Button: {
      style: {
        componentTag: 'button',
        transition: 'light',
        height: 'm',
        width: 'm',
        bg: {
          md: 'danger',
          lg: 'primary',
        },
        color: 'secondary',
        borderRadius: 'm',
        borderWidth: 's',
        borderStyle: 'solid',
        borderColor: 'primary',
        '&:hover': {
          bg: 'secondary',
          color: 'primary',
        },
      },
      variants: {
        primary: {
          bg: 'secondary',
          borderColor: 'primary',
          color: 'primary',
          '&:hover': {
            bg: 'primary',
            color: 'secondary',
          },
        },
        round: {
          borderRadius: 'round',
        },
      },
    },
  },
};

const darkTheme = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
};

theme.set(lightTheme as any);

function customStyled(component: Component) {
  const { components } = theme.get();
  const config = components[component];
  const tag = config.style.componentTag || component;

  return (props: any = {}) => {
    const variant: any = props.variant as any;
    const variantTag =
      props.variant && config.variants
        ? config.variants[variant].componentTag
        : tag;

    const Component = styled<any>(variantTag || (tag as any))(
      ({ theme: styledTheme, ...style }) => {
        return parsers.resolve({
          style: { ...(style as any), componentName: component },
        });
      },
    );

    return <Component {...props} />;
  };
}

const Button = customStyled('Button');

const StyledProvider: React.FC = ({ children }) => {
  const currentTheme = useTheme();

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

function getStyle(component: Component, variant?: string) {
  const { style, variants } = theme.getValue('components', component);

  if (variant && variants && variants[variant]) {
    return JSON.stringify(variants[variant], undefined, 2);
  }

  return JSON.stringify(style, undefined, 2);
}

function App() {
  const [light, setLight] = React.useState(true);

  const onClick = React.useCallback(() => {
    theme.set(light ? (darkTheme as any) : (lightTheme as any));
    setLight(prev => !prev);
  }, [light]);

  const containerStyle = parsers.resolve({
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '100%' as any,
    },
  });

  const codeStyle = parsers.resolve({
    style: { color: 'primary', display: 'block', py: 's' },
  });

  return (
    <StyledProvider>
      <div
        style={parsers.resolve({
          style: {
            bg: 'secondary',
            width: '100vw',
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            transition: 'light',
          } as any,
        })}
      >
        <div style={containerStyle}>
          <Button onClick={onClick}>{light ? `🌙` : `☀️`}</Button>
          <pre style={codeStyle}>{getStyle('Button')}</pre>
        </div>
        <div style={containerStyle}>
          <Button variant="primary">Primary variant</Button>
          <pre style={codeStyle}>{getStyle('Button', 'primary')}</pre>
        </div>
        <div style={containerStyle}>
          <Button variant="round">Round variant</Button>
          <pre style={codeStyle}>{getStyle('Button', 'round')}</pre>
        </div>
      </div>
    </StyledProvider>
  );
}

export default App;
