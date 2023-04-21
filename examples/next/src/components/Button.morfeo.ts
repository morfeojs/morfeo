import { createUseStyle } from '@morfeo/css';

type StyleProps = {
  variant: any;
};

export const useButton = createUseStyle({
  componentName: 'Button',
  py: 'xs',
  fontWeight: 'bold',
  variant: (props: StyleProps) => props.variant,
});
