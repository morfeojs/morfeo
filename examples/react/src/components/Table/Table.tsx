import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Table'>, 'componentName'>;

export const Table: React.FC<Props> = props => (
  <MorfeoComponent componentName="Table" {...props} />
);
