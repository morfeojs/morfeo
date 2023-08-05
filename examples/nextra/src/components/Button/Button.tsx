import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { morfeo } from '@morfeo/css';
import { Variant } from '@morfeo/web';
import Link, { LinkProps } from 'next/link';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: Variant<'Button'>;
};

type ButtonLinkProps = LinkProps & {
  children?: ReactNode;
  variant?: Variant<'Button'>;
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

export const Button = morfeo.component('Button', {
  variant: (props: ButtonProps) => props.variant || 'primary',
});

export function ButtonLink({ variant = 'primary', ...props }: ButtonLinkProps) {
  return <Link {...props} className={classes('base', variant)} />;
}
