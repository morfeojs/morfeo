import { ComponentConfig } from '@morfeo/spec';

type InputFeedbackVariant = 'error' | 'warning' | 'success';

export const InputFeedback: ComponentConfig<InputFeedbackVariant> = {
  tag: 'p',
  style: {
    fontSize: 'xs',
    fontFamily: 'default',
    fontWeight: 'bold',
    lineHeight: 'none',
    letterSpacing: 'body',
    mt: '2xs',
  },
  variants: {
    error: {
      style: {
        color: 'error',
      },
    },
    warning: {
      style: {
        color: 'warning',
      },
    },
    success: {
      style: {
        color: 'success',
      },
    },
  },
};
