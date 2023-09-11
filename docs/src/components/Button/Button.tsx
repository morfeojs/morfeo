import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { morfeo } from '@morfeo/web';
import { Variant } from '@morfeo/web';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: Variant<'Button'>;
};

export const Button = morfeo.component('Button', {
  variant: (props: ButtonProps) => props.variant || 'primary',
});
