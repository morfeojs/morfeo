import { MorfeoComponent, MorfeoComponentProps } from './MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Typography'>, 'componentName'>;

export const Typography: React.FC<Props> = props => (
  <MorfeoComponent componentName="Typography" {...props} />
);
