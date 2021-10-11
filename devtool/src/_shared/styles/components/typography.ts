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
        color: 'dark',
      },
    },
    h1: {
      tag: 'h1',
      style: {
        letterSpacing: 'heading',
        fontSize: 'xl',
        lineHeight: 'heading',
        fontWeight: 'bold',
        color: 'dark',
      },
    },
    h2: {
      tag: 'h2',
      style: {
        fontSize: 'm',
        lineHeight: 'heading',
        fontWeight: 'bold',
        color: 'dark',
      },
    },
    h3: {
      tag: 'h3',
      style: {
        fontSize: 's',
        lineHeight: 'heading',
        fontWeight: 'bold',
        color: 'dark',
      },
    },
    h4: {
      tag: 'h4',
      style: {
        fontSize: 'xs',
        lineHeight: 'heading',
        fontWeight: 'bold',
        color: 'dark',
      },
    },
    p1: {
      tag: 'p',
      style: {
        fontSize: 'm',
        letterSpacing: 'body',
        lineHeight: 'body',
        color: 'dark',
      },
    },
    p2: {
      tag: 'p',
      style: {
        fontSize: 's',
        letterSpacing: 'body',
        lineHeight: 'body',
        color: 'dark',
      },
    },
    p3: {
      tag: 'p',
      style: {
        fontSize: 'xs',
        lineHeight: 'body',
        color: 'dark',
      },
    },
    p4: {
      tag: 'p',
      style: {
        fontSize: 'xxs',
        lineHeight: 'body',
        color: 'dark',
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
    caption: {
      style: {
        fontSize: 'xxs',
        lineHeight: 'body',
        fontStyle: 'italic',
        color: 'dark',
      },
    },
  },
  meta: {
    description: 'Typography component used to render text',
    tags: ['typography', 'fonts'],
  },
} as ComponentConfig;
