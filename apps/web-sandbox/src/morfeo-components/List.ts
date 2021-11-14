import { ComponentConfig } from '@morfeo/react';

type ListVariant = 'item' | 'item.arrow' | 'item.outlinedBullet';

export const List: ComponentConfig<ListVariant> = {
  tag: 'ul',
  style: {
    my: 'l',
    listStyle: 'none',
    ml: 'none',
    pl: 'none',
  },
  variants: {
    item: {
      tag: 'li',
      style: {
        mt: 'none',
        mb: 'xs',
        pl: 'xs',
        textIndent: '1em',
        position: 'relative',
        '&:before': {
          pr: 's',
          display: 'inline-block',
          content: '"•"',
          fontWeight: 'bold',
        },
      },
    },
    'item.arrow': {
      style: {
        componentName: 'List',
        variant: 'item',
        '&:before': {
          pr: 's',
          display: 'inline-block',
          fontWeight: 'bold',
          content: '"►"',
          fontSize: 'xs',
        },
      },
    },
    'item.outlinedBullet': {
      style: {
        componentName: 'List',
        variant: 'item',
        '&:before': {
          pr: 's',
          display: 'inline-block',
          fontWeight: 'bold',
          content: '"○"',
        },
      },
    },
  },
};
