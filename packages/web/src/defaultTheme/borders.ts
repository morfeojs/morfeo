import { BorderConfig } from '@morfeo/core';

export const borders = {
  none: {
    width: 'none',
    style: 'none',
  },
  strong: {
    width: 'l',
    style: 'solid',
    color: 'text',
  },
  medium: {
    width: 'm',
    style: 'solid',
    color: 'text',
  },
  thin: {
    width: 's',
    style: 'solid',
    color: 'text',
  },
} satisfies Record<string, BorderConfig>;
