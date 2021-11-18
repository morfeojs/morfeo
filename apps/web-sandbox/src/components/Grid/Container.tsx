import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Container'>, 'componentName'>;

export const Container: React.FC<Props> = props => (
  <MorfeoComponent componentName="Container" {...props} />
);
