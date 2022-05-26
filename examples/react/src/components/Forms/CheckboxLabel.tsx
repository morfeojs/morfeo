import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'CheckboxLabel'>, 'componentName'>;

export const CheckboxLabel: React.FC<Props> = props => {
  return <MorfeoComponent componentName="CheckboxLabel" {...props} />;
};
