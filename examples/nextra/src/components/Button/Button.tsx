import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { css } from '@morfeo/css';
import Link, { LinkProps } from 'next/link';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonLinkProps = LinkProps & {
  children?: ReactNode;
};

const classes = css({
  button: {
    componentName: 'Button',
    variant: 'primary',
    py: 'xs',
    px: 'l',
  },
});

export function Button(props: ButtonProps) {
  return <button {...props} className={classes.button} />;
}

export function ButtonLink(props: ButtonLinkProps) {
  return <Link {...props} className={classes.button} />;
}
