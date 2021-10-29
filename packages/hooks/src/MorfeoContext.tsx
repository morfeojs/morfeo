import { Theme } from '@morfeo/core';
import { createContext } from 'react';

export const MorfeoContext = createContext<Theme>({} as Theme);
