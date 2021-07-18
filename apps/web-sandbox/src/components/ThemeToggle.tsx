import { useState, useCallback } from 'react';
import { Theme, theme } from '@morfeo/react';
import { Button } from './Button';

type Props = {
  light: Theme;
  dark: Theme;
};

export const ThemeToggle: React.FC<Props> = ({ light, dark }) => {
  const [isLight, setIsLight] = useState(true);

  const onClick = useCallback(() => {
    theme.set(isLight ? dark : light);
    setIsLight(!isLight);
  }, [isLight, light, dark]);

  return <Button onClick={onClick}>{isLight ? `🌙` : `☀️`}</Button>;
};
