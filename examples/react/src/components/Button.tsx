import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';
import { morfeo, Variant } from '@morfeo/react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type StyleProps = {
  variant: Variant<'Button'>;
};

const BaseButton = morfeo.component('Button', {
  py: 'xs',
  fontWeight: 'bold',
  variant: (props: ButtonProps & StyleProps) => props.variant,
});

const variants = ['primary', 'secondary'] as const;

export const Button: React.FC<ButtonProps> = props => {
  const [variantIndex, setVariantIndex] = useState<number>(0);

  function onClick() {
    setVariantIndex(prev => (prev + 1) % variants.length);
  }

  return (
    <BaseButton {...props} variant={variants[variantIndex]} onClick={onClick} />
  );
};
