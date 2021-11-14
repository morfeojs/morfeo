import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Label'>, 'componentName'>;

export const Label: React.FC<Props> = props => (
  <MorfeoComponent componentName="Label" {...props} />
);
