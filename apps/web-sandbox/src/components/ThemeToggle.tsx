import { useState, useCallback } from 'react';
import { morfeo } from '@morfeo/react';
import { Button } from './Button';

export const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState(morfeo.getCurrent() === 'light');

  const onClick = useCallback(() => {
    morfeo.useTheme(isLight ? 'dark' : 'light');
    setIsLight(!isLight);
  }, [isLight]);

  return <Button onClick={onClick}>{isLight ? `🌙` : `☀️`}</Button>;
};
