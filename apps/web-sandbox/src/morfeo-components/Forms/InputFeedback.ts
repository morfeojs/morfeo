import { ComponentConfig } from "@morfeo/react";

export const InputFeedback: ComponentConfig = {
  tag: 'p',
  style: {
    fontSize: 'xs',
    fontFamily: 'default',
    fontWeight: 'bold',
    lineHeight: 'none',
    letterSpacing: 'body',
    mt: '2xs'
  },
  variants: {
    error: {
      style: {
        color: 'error',
      }
    },
    warning: {
      style: {
        color: 'warning',
      }
    },
    success: {
      style: {
        color: 'success',
      }
    }
  }
}