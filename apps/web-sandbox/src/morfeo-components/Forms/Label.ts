import { ComponentConfig } from '@morfeo/react';

export const Label: ComponentConfig = {
  tag: 'label',
  style: {
    fontSize: 's',
    fontFamily: 'default',
    fontWeight: 'medium',
    letterSpacing: 'body',
    lineHeight: 'none',
    mb: '2xs',
  },
  variants: {
    small: {
      style: {
        fontSize: 'xs',
      },
    },
  },
};
