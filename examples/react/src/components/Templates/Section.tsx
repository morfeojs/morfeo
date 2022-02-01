import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Section'>, 'componentName'>;

export const Section: React.FC<Props> = props => (
  <MorfeoComponent componentName="Section" {...props} />
);
