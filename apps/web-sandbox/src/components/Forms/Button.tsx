import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Button'>, 'componentName'>;

export const Button: React.FC<Props> = props => (
  <MorfeoComponent componentName="Button" {...props} />
);
