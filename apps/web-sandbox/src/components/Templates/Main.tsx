import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Main'>, 'componentName'>;

export const Main: React.FC<Props> = props => (
  <MorfeoComponent componentName="Main" {...props} />
);
