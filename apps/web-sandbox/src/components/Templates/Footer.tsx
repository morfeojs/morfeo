import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Footer'>, 'componentName'>;

export const Footer: React.FC<Props> = props => (
  <MorfeoComponent componentName="Footer" {...props} />
);
