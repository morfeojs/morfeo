import { renderHook as baseRenderHook } from '@testing-library/react';
import { MorfeoProvider } from '../src';

export * from '@testing-library/react';

export const renderHook = (...params: Parameters<typeof baseRenderHook>) => {
  return baseRenderHook(params[0], {
    ...params[1],
    wrapper: MorfeoProvider,
  });
};
