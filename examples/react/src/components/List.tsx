import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'List'>, 'componentName'>;

export const List: React.FC<Props> = props => (
  <MorfeoComponent componentName="List" {...props} />
);
