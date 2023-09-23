import React, {
  useContext,
  createContext,
  PropsWithChildren,
  useSyncExternalStore,
} from 'react';
import type { Morfeo } from '@morfeo/core';

type MorfeoProviderProps = PropsWithChildren<{
  instance: Morfeo;
}>;

const context = createContext<Morfeo | undefined>(undefined);

export function MorfeoProvider({ instance, children }: MorfeoProviderProps) {
  return <context.Provider value={instance}>{children}</context.Provider>;
}

export function useMorfeo(): Morfeo {
  const morfeo = useContext(context);

  if (!morfeo) {
    throw new Error('morfeo instance is missing');
  }

  useSyncExternalStore(
    morfeo.theme.subscribe,
    morfeo.theme.get,
    morfeo.theme.get,
  );

  return morfeo;
}
