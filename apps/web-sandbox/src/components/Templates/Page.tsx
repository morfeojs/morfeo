import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Page'>, 'componentName'>;

export const Page: React.FC<Props> = props => (
  <MorfeoComponent componentName="Page" {...props} />
);
