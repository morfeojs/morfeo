import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Button'>, 'componentName'>;

export const Button: React.FC<Props> = props => (
  <MorfeoComponent componentName="Button" {...props} />
);
