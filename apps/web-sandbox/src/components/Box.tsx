import { MorfeoComponent, MorfeoComponentProps } from './MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Box'>, 'componentName'>;

export const Box: React.FC<Props> = props => (
  <MorfeoComponent componentName="Box" {...props} />
);
