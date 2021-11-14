import { MorfeoComponent, MorfeoComponentProps } from './MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Card'>, 'componentName'>;

export const Card: React.FC<Props> = props => (
  <MorfeoComponent componentName="Card" {...props} />
);
