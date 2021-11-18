import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Card'>, 'componentName'>;

export const Card: React.FC<Props> = props => (
  <MorfeoComponent componentName="Card" {...props} />
);
