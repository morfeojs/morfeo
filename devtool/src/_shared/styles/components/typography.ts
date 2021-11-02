import { ComponentConfig } from '@morfeo/react';

export const Typography: ComponentConfig = {
  style: {
    fontFamily: 'regular',
  },
  variants: {
    hero: {
      tag: 'h1',
      style: {
        fontSize: 'l',
        fontWeight: 'bold',
        lineHeight: 'heading',
      },
    },
    h1: {
      tag: 'h1',
      style: {
        letterSpacing: 'heading',
        fontSize: 'xl',
        lineHeight: 'heading',
        fontWeight: 'bold',
      },
    },
    h2: {
      tag: 'h2',
      style: {
        fontSize: 'l',
        lineHeight: 'heading',
        fontWeight: 'bold',
      },
    },
    h3: {
      tag: 'h3',
      style: {
        fontSize: 'm',
        lineHeight: 'heading',
        fontWeight: 'bold',
      },
    },
    h4: {
      tag: 'h4',
      style: {
        fontSize: 's',
        lineHeight: 'heading',
        fontWeight: 'bold',
      },
    },
    h5: {
      tag: 'h5',
      style: {
        fontSize: 'm',
        lineHeight: 'heading',
        fontWeight: 'regular',
      },
    },
    p1: {
      tag: 'p',
      style: {
        fontSize: 's',
        letterSpacing: 'body',
        lineHeight: 'body',
      },
    },
    p2: {
      tag: 'p',
      style: {
        fontSize: 'xs',
        letterSpacing: 'body',
        lineHeight: 'body',
      },
    },
    p3: {
      tag: 'p',
      style: {
        fontSize: 'xxs',
        lineHeight: 'body',
      },
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
    },
    cta: {
      tag: 'span',
      style: {
        '&::after': {
          componentName: 'Typography',
          variant: 'h3',
          content: "'→'",
          width: 's',
          ml: 'xxs',
        },
      },
    },
    caption: {
      style: {
        fontSize: 'xxs',
        lineHeight: 'body',
        fontStyle: 'italic',
      },
    },
  },
  meta: {
    description: 'Typography component used to render text',
    tags: ['typography', 'fonts'],
  },
} as ComponentConfig;
