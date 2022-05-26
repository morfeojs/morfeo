import { theme } from '@morfeo/core';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { MorfeoContext } from './MorfeoContext';

export function MorfeoProvider({ children }: PropsWithChildren<{}>) {
  const [currentTheme, setTheme] = useState(theme.get());

  useEffect(() => {
    const uid = theme.subscribe(setTheme);
    return () => {
      theme.cleanUp(uid);
    };
  }, []);

  return (
    <MorfeoContext.Provider value={currentTheme}>
      {children}
    </MorfeoContext.Provider>
  );
}
