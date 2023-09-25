import React from 'react';
import { RenderHookOptions, renderHook } from '@testing-library/react';
import { createMorfeo, type Morfeo } from '@morfeo/core';
import { MorfeoProvider } from '../src';

type CustomRenderHookOptions<Props> = RenderHookOptions<Props> & {
  instance?: Morfeo;
};

function customRenderHook<Props, Value>(
  hook: (props?: Props) => Value,
  options?: CustomRenderHookOptions<Props>,
) {
  const morfeo = options?.instance || createMorfeo();

  const result = renderHook(hook, {
    ...options,
    wrapper: props => <MorfeoProvider instance={morfeo} {...props} />,
  });

  return { morfeo, ...result };
}

export * from '@testing-library/react';
export { customRenderHook as renderHook };
