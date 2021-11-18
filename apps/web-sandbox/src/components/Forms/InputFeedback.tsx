import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'InputFeedback'>, 'componentName'>;

export const InputFeedback: React.FC<Props> = props => (
  <MorfeoComponent componentName="InputFeedback" {...props} />
);
