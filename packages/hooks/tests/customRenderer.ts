import { renderHook as baseRenderHook } from '@testing-library/react-hooks';
import { MorfeoProvider } from '../src';

export const renderHook = (...params: Parameters<typeof baseRenderHook>) => {
  return baseRenderHook(params[0], {
    ...params[1],
    wrapper: MorfeoProvider,
  });
};
