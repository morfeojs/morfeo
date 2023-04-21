import { createUseStyle } from '@morfeo/css';
import { Variant } from '@morfeo/spec';

type StyleProps = {
  variant: Variant<'Button'>;
};

export const useButton = createUseStyle({
  componentName: 'Button',
  py: 'xs',
  fontWeight: 'bold',
  variant: (props: StyleProps) => props.variant,
});
