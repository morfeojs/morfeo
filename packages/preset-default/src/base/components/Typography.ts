import { ComponentConfig } from '@morfeo/spec';

type TypographyVariant =
  | 'p'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p.inverted'
  | 'p2.inverted'
  | 'p3.inverted'
  | 'p4.inverted'
  | 'h1.inverted'
  | 'h2.inverted'
  | 'h3.inverted'
  | 'h4.inverted'
  | 'h5.inverted'
  | 'h6.inverted'
  | 'display'
  | 'link'
  | 'cta'
  | 'code'
  | 'quote'
  | 'blockQuote';

export const Typography: ComponentConfig<TypographyVariant> = {
  tag: 'p',
  style: {
    fontFamily: 'default',
    color: 'text',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  states: {},
  variants: {
    p: {
      style: {
        fontSize: 'm',
        fontWeight: 'light',
        letterSpacing: 'body',
        lineHeight: 'body',
        mb: 's',
      },
      states: {},
    },
    p2: {
      style: {
        componentName: 'Typography',
        variant: 'p',
        fontSize: 's',
      },
      states: {},
    },
    p3: {
      style: {
        componentName: 'Typography',
        variant: 'p',
        fontSize: 'xs',
      },
      states: {},
    },
    p4: {
      style: {
        componentName: 'Typography',
        variant: 'p',
        fontSize: '2xs',
      },
      states: {},
    },
    h1: {
      tag: 'h1',
      style: {
        color: 'headText',
        fontSize: '2xl',
        fontWeight: 'bold',
        letterSpacing: 'heading',
        lineHeight: 'none',
        mb: 'xs',
      },
      states: {},
    },
    h2: {
      tag: 'h2',
      style: {
        componentName: 'Typography',
        variant: 'h1',
        fontSize: 'xl',
      },
      states: {},
    },
    h3: {
      tag: 'h3',
      style: {
        componentName: 'Typography',
        variant: 'h1',
        fontSize: 'l',
      },
      states: {},
    },
    h4: {
      tag: 'h4',
      style: {
        componentName: 'Typography',
        variant: 'h1',
        fontSize: 'm',
      },
      states: {},
    },
    h5: {
      tag: 'h2',
      style: {
        componentName: 'Typography',
        variant: 'h2',
        fontWeight: 'light',
      },
      states: {},
    },
    h6: {
      tag: 'h3',
      style: {
        componentName: 'Typography',
        variant: 'h3',
        fontWeight: 'light',
      },
      states: {},
    },
    'p.inverted': {
      style: {
        color: 'invertedText',
        fontSize: 'm',
        fontWeight: 'light',
        letterSpacing: 'body',
        lineHeight: 'body',
      },
      states: {},
    },
    'p2.inverted': {
      style: {
        componentName: 'Typography',
        variant: 'p',
        fontSize: 's',
      },
      states: {},
    },
    'p3.inverted': {
      style: {
        componentName: 'Typography',
        variant: 'p',
        fontSize: 'xs',
      },
      states: {},
    },
    'p4.inverted': {
      style: {
        componentName: 'Typography',
        variant: 'p',
        fontSize: '2xs',
      },
      states: {},
    },
    'h1.inverted': {
      tag: 'h1',
      style: {
        color: 'invertedHeadText',
        fontSize: '2xl',
        fontWeight: 'bold',
        letterSpacing: 'heading',
        lineHeight: 'heading',
      },
      states: {},
    },
    'h2.inverted': {
      tag: 'h2',
      style: {
        componentName: 'Typography',
        variant: 'h1',
        fontSize: 'xl',
      },
      states: {},
    },
    'h3.inverted': {
      tag: 'h3',
      style: {
        componentName: 'Typography',
        variant: 'h1',
        fontSize: 'l',
      },
      states: {},
    },
    'h4.inverted': {
      tag: 'h4',
      style: {
        componentName: 'Typography',
        variant: 'h1',
        fontSize: 'm',
      },
      states: {},
    },
    'h5.inverted': {
      tag: 'h2',
      style: {
        componentName: 'Typography',
        variant: 'h2',
        fontWeight: 'light',
      },
      states: {},
    },
    'h6.inverted': {
      tag: 'h3',
      style: {
        componentName: 'Typography',
        variant: 'h3',
        fontWeight: 'light',
      },
      states: {},
    },
    display: {
      tag: 'h1',
      style: {
        componentName: 'Typography',
        variant: 'h1',
        fontSize: '3xl',
        lineHeight: 'none',
      },
      states: {},
    },
    link: {
      tag: 'a',
      style: {
        color: 'primary',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
          color: 'primary.light',
        },
      },
      states: {},
    },
    cta: {
      tag: 'a',
      style: {
        cursor: 'pointer',
        color: 'primary',
        fontWeight: 'bold',
        borderBottom: 'strong',
        borderBottomColor: 'primary',
        pb: '3xs',
        '&:hover': {
          color: 'primary.light',
          borderBottomColor: 'primary.light',
        },
      },
      states: {},
    },
    code: {
      tag: 'code',
      style: {
        display: 'block',
        fontFamily: 'mono',
        lineHeight: 'body',
        p: 'xs',
        bg: 'gray.darkest',
        color: 'white',
        width: '100',
        boxSizing: 'border-box',
        my: 'l',
      },
      states: {},
    },
    quote: {
      style: {
        fontStyle: 'italic',
        lineHeight: 'body',
        color: 'gray.light',
        my: 'l',
        '&:before': {
          content: '"“"',
          display: 'inline',
        },
        '&:after': {
          content: '"”"',
          display: 'inline',
        },
      },
      states: {},
    },
    blockQuote: {
      style: {
        fontSize: 'm',
        fontStyle: 'italic',
        fontWeight: 'light',
        lineHeight: 'body',
        bg: 'gray.lightest',
        color: 'gray',
        p: 'xs',
        boxSizing: 'border-box',
        my: 'l',
        width: '100',
        '&:before': {
          content: '"“"',
          display: 'inline',
        },
        '&:after': {
          content: '"”"',
          display: 'inline',
        },
      },
      states: {},
    },
  },
};
