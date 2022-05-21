import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'InputContainer'>, 'componentName'>;

export const InputContainer: React.FC<Props> = props => {
  return <MorfeoComponent componentName="InputContainer" {...props} />;
};
