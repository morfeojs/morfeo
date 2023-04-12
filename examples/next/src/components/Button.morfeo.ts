import { createUseComponent } from '@morfeo/css';

type StyleProps = {
  variant: any;
};

export const useButton = createUseComponent({
  componentName: 'Button',
  py: 'xs',
  variant: (props: StyleProps) => props.variant,
});
