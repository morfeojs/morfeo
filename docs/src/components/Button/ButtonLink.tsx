import { ReactNode } from 'react';
import { morfeo } from 'src/morfeo';
import { Variant } from '@morfeo/react';
import Link, { LinkProps } from 'next/link';

type ButtonLinkProps = LinkProps & {
  children?: ReactNode;
  variant?: string;
};

const classes = morfeo.css({
  base: {
    py: 'xs',
    px: 'l',
  },
  primary: {
    componentName: 'Button',
    variant: 'primary',
  },
  outline: {
    componentName: 'Button',
    variant: 'outline',
  },
});

export function ButtonLink({ variant = 'primary', ...props }: ButtonLinkProps) {
  return <Link {...props} className={classes('base', variant)} />;
}
