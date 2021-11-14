import { MorfeoComponent, MorfeoComponentProps } from './MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Hr'>, 'componentName'>;

export const Hr: React.FC<Props> = props => (
  <MorfeoComponent componentName="Hr" {...props} />
);
