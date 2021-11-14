import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'InputFeedback'>, 'componentName'>;

export const InputFeedback: React.FC<Props> = props => (
  <MorfeoComponent componentName="InputFeedback" {...props} />
);
