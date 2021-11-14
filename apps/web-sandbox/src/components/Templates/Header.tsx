import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Header'>, 'componentName'>;

export const Header: React.FC<Props> = props => (
  <MorfeoComponent componentName="Header" {...props} />
);
