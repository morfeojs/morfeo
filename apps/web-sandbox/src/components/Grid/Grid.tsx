import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Grid'>, 'componentName'>;

export const Grid: React.FC<Props> = props => (
  <MorfeoComponent componentName="Grid" {...props} />
);
