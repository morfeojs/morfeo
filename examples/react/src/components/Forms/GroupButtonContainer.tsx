import { MorfeoComponent, MorfeoComponentProps, Component } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<Component>, 'componentName'>;

export const GroupButtonContainer: React.FC<Props> = props => (
  <MorfeoComponent componentName={"GroupButtonContainer" as any} {...props} />
);
