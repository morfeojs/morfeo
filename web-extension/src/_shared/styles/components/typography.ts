import { ComponentConfig } from '@morfeo/react';

export const Typography: ComponentConfig = {
  style: {
    fontFamily: 'default',
  },
  states: {},
  variants: {
    hero: {
      tag: 'h1',
      style: {
        fontSize: 'l',
        fontWeight: 'bold',
        lineHeight: 'heading',
      },
      states: {},
    },
    h1: {
      tag: 'h1',
      style: {
        letterSpacing: 'heading',
        fontSize: 'xl',
        lineHeight: 'heading',
        fontWeight: 'bold',
      },
      states: {},
    },
    h2: {
      tag: 'h2',
      style: {
        fontSize: 'l',
        lineHeight: 'heading',
        fontWeight: 'bold',
      },
      states: {},
    },
    h3: {
      tag: 'h3',
      style: {
        fontSize: 'm',
        lineHeight: 'heading',
        fontWeight: 'bold',
      },
      states: {},
    },
    h4: {
      tag: 'h4',
      style: {
        fontSize: 's',
        lineHeight: 'heading',
        fontWeight: 'bold',
      },
      states: {},
    },
    h5: {
      tag: 'h5',
      style: {
        fontSize: 'm',
        lineHeight: 'heading',
        fontWeight: 'regular',
      },
      states: {},
    },
    p1: {
      tag: 'p',
      style: {
        fontSize: 's',
        letterSpacing: 'body',
        lineHeight: 'body',
      },
      states: {},
    },
    p2: {
      tag: 'p',
      style: {
        fontSize: 'xs',
        letterSpacing: 'body',
        lineHeight: 'body',
      },
      states: {},
    },
    p3: {
      tag: 'p',
      style: {
        fontSize: '2xs',
        lineHeight: 'body',
      },
      states: {},
    },
    link: {
      tag: 'a',
      style: {
        fontSize: 'm',
        lineHeight: 'body',
        color: 'primary',
        cursor: 'pointer',
        '&:hover': {
          color: 'primary.lightest',
        },
      },
      states: {},
    },
    cta: {
      tag: 'span',
      style: {
        '&::after': {
          componentName: 'Typography',
          variant: 'h3',
          content: "'→'",
          width: 's',
          ml: '2xs',
        },
      },
      states: {},
    },
    caption: {
      style: {
        fontSize: '2xs',
        lineHeight: 'body',
        fontStyle: 'italic',
      },
      states: {},
    },
  },
  meta: {
    description: 'Typography component used to render text',
    tags: ['typography', 'fonts'],
  },
} as ComponentConfig;
