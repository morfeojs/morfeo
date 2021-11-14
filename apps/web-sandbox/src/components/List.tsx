import { MorfeoComponent, MorfeoComponentProps } from './MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'List'>, 'componentName'>;

export const List: React.FC<Props> = props => (
  <MorfeoComponent componentName="List" {...props} />
);
