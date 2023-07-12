import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { morfeo } from '@morfeo/css';
import Link, { LinkProps } from 'next/link';
import { Variant } from '@morfeo/spec';

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
    bg: 'raw:transparent',
    border: 'medium',
    borderColor: 'gray.lightest',
    color: 'gray.lightest',
  },
});

export const Button = morfeo.component('Button', {
  variant: (props: ButtonProps) => props.variant || 'primary',
  py: 'xs',
  px: 'l',
});

export function ButtonLink({ variant = 'primary', ...props }: ButtonLinkProps) {
  return <Link {...props} className={classes('base', variant)} />;
}
