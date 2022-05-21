import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<
  MorfeoComponentProps<'GroupButtonContainer'>,
  'componentName'
>;

export const GroupButtonContainer: React.FC<Props> = props => (
  <MorfeoComponent componentName={'GroupButtonContainer' as any} {...props} />
);
