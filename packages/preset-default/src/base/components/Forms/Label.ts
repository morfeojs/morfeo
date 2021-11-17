import { ComponentConfig } from '@morfeo/spec';

type LabelVariant = 'small';

export const Label: ComponentConfig<LabelVariant> = {
  tag: 'label',
  style: {
    fontSize: 's',
    fontFamily: 'default',
    fontWeight: 'medium',
    letterSpacing: 'body',
    lineHeight: 'none',
    mb: '2xs',
  },
  variants: {
    small: {
      style: {
        fontSize: 'xs',
      },
    },
  },
};
