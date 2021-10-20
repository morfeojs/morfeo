import { theme } from '@morfeo/core';
import React, { useEffect, useState } from 'react';
import { MorfeoContext } from './MorfeoContext';

export const MorfeoProvider: React.FC = ({ children }) => {
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
};
