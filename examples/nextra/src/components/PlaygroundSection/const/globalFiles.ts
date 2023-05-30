export const morfeoTheme = `const theme = {
    fontSizes: {
      '2xs': '.5rem',
      xs: '.75rem',
      s: '.875rem',
      m: '1rem',
      l: '1.125rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '5rem',
      none: '0',
    },
    gradients: {
      primary: {
        colors: ['primary.lighter', 'primary.darker'],
      },
      'text.primary': {
        colors: ['primary.lighter', 'primary.darker'],
        end: 100,
        start: 40,
        angle: 120,
      },
      secondary: {
        colors: ['secondary.lighter', 'secondary.darker'],
      },
      'text.secondary': {
        colors: ['secondary.lighter', 'secondary.darker'],
        end: 100,
        start: 40,
        angle: 120,
      },
      primaryToAccent: {
        colors: ['primary.lighter', 'accent.darker'],
        end: 100,
        start: 40,
        angle: 30,
      },
      accentToPrimary: {
        colors: ['accent.lighter', 'primary.darker'],
        end: 100,
        start: 40,
        angle: 30,
      },
      gray: {
        colors: ['gray.lighter', 'gray.darker'],
      },
      'text.gray': {
        colors: ['gray.lighter', 'gray.darker'],
        end: 100,
        start: 40,
        angle: 120,
      },
      primaryToTransparent: {
        colors: ['primary', 'transparent'],
        end: 100,
        start: 40,
        kind: 'radial',
      },
    },
    components: {
      Button: {
        tag: 'button',
        props: {},
        style: {
          px: 's',
          py: '2xs',
          bg: 'invertedBackground',
          corner: 'xs',
          color: 'invertedText',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'm',
          fontFamily: 'default',
          fontWeight: 'medium',
          border: 'none',
          overflow: 'hidden',
          position: 'relative',
          transition: 'medium',
        },
        states: {},
        variants: {
          primary: {
            tag: 'button',
            style: {
              color: 'gray.lightest',
              bg: 'primary',
              fontWeight: 'bold',
              '&:hover': {
                bg: 'primary.lightest',
              },
            },
            states: {},
          },
          outline: {
            tag: 'button',
            style: {
              bg: 'transparent',
              border: 'strong',
              borderColor: 'gray.lightest',
              color: 'gray.lightest',
            },
          },
        },
      },
    },
  };
  
  module.exports = theme;
  `;

export const socialComponent = `import { morfeo } from '@morfeo/css';

const classes = morfeo.css({
  container: {
    w: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 's',
    m: 's',
    '& svg': {
      transition: 'fast',
      fill: 'gray.lighter',
      '&:hover': {
        fill: 'raw:#1DA1F2',
      },
    },
  },
});

export const Socials = () => {
  return (
    <div className={classes.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        fill="currentColor"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
      </svg>
    </div>
  );
};
`;

export const globalStyle = `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}`;
