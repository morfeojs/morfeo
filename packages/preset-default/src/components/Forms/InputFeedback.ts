import { ComponentConfig } from '@morfeo/web';

type InputFeedbackVariant = 'error' | 'warning' | 'success';

export const InputFeedback: ComponentConfig<InputFeedbackVariant> = {
  tag: 'p',
  states: {},
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
      states: {},
    },
    warning: {
      style: {
        color: 'warning',
      },
      states: {},
    },
    success: {
      style: {
        color: 'success',
      },
      states: {},
    },
  },
};
