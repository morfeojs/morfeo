import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme, parsers, Component } from '@morfeo/web';
import './App.css';

const lightTheme = {
  colors: {
    primary: 'white',
    secondary: 'black',
  },
  radii: {
    m: '10px',
  },
  space: {
    s: '40px',
    m: '100px',
  },
  sizes: {
    s: '10px',
    m: '100px',
  },
  borderWidths: {
    s: '2px',
  },
  components: {
    Button: {
      style: {
        componentTag: 'button',
        height: 'm',
        width: 'm',
        bg: 'primary',
        color: 'secondary',
        borderRadius: 'm',
        '&:hover': {
          bg: 'secondary',
          color: 'primary',
        },
      },
      variants: {
        primary: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          componentTag: 'div',
          borderColor: 'white',
          borderWidth: 's',
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
  const tag = config.style.componentTag || 'div';

  return (props: any = {}) => {
    const variant: any = props.variant as any;
    const variantTag =
      props.variant && config.variants
        ? config.variants[variant].componentTag
        : tag;

    const Component = styled<any>(variantTag || (tag as any))(
      ({ theme: styledTheme, ...style }) =>
        parsers.resolve({
          style: { ...(style as any), componentName: component },
        }),
    );

    return <Component {...props} />;
  };
}

// const Button = styled.button(({ theme, ...style }) =>
//   parsers.resolve({
//     style: { ...(style as any), componentName: 'Button' },
//   }),
// );

const Button = customStyled('Button');

const StyledProvider: React.FC = ({ children }) => {
  const [currentTheme, setTheme] = React.useState(theme.get());

  React.useEffect(() => {
    theme.listen(updatedTheme => setTheme(updatedTheme));
  }, []);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

function App() {
  const [light, setLight] = React.useState(true);

  const onClick = React.useCallback(() => {
    theme.set(light ? (darkTheme as any) : (lightTheme as any));
    setLight(prev => !prev);
  }, [light]);

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
            justifyContent: 'center',
          } as any,
        })}
      >
        <Button onClick={onClick} variant={light ? 'primary' : undefined}>
          {light ? `🌙` : `☀️`}
        </Button>
      </div>
    </StyledProvider>
  );
}

export default App;
