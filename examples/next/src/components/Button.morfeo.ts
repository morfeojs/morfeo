import { createUseStyle } from '@morfeo/css';

type StyleProps = {
  variant: 'primary' | 'secondary';
};

export const useButton = createUseStyle({
  componentName: 'Button',
  py: 'xs',
  fontWeight: 'bold',
  variant: (props: StyleProps) => props.variant,
});
