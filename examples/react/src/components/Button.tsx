import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';
import { useButton } from './Button.morfeo';
import { Variant } from '@morfeo/spec';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const variants: Variant<'Button'>[] = ['primary', 'secondary'];

export const Button: React.FC<ButtonProps> = props => {
  const [variantIndex, setVariantIndex] = useState<number>(0);

  const { className, style } = useButton({
    variant: variants[variantIndex],
  });

  function onClick() {
    setVariantIndex(prev => (prev + 1) % variants.length);
  }

  return (
    <button {...props} className={className} style={style} onClick={onClick} />
  );
};
