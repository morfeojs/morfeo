import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { Variant } from '@morfeo/react';
import { morfeo } from 'src/morfeo.theme';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: Variant<'Button'>;
};

export const Button = morfeo.component('Button', {
  variant: (props: ButtonProps) => props.variant || 'primary',
});
