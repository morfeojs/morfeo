import { morfeo } from '@morfeo/css';
import NextLink from 'next/link';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof NextLink>;

const classes = morfeo.css({
  link: {
    componentName: 'Typography',
    variant: 'link',
  },
});

export const Link: React.FC<LinkProps> = props => {
  return <NextLink {...props} className={classes('link')} />;
};
