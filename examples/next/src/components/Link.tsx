import { morfeo } from '@morfeo/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = NextLinkProps & {
  children?: string;
};

const classes = morfeo.css({
  link: {
    componentName: 'Typography',
    variant: 'link',
  },
});

export const Link: React.FC<LinkProps> = props => {
  return <NextLink {...props} className={classes('link')} />;
};
