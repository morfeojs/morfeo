import { morfeo } from '@morfeo/web';
import { renderHook } from '@testing-library/react';
import { useStyle } from '../src';

const theme = {
  colors: {
    primary: 'black',
  },
} as any;

morfeo.setTheme('default', theme);

beforeEach(() => {
  morfeo.setCurrentTheme('default');
});

test('should generate the correct style with the override of `useStyle`', async () => {
  const { result } = renderHook(() => useStyle({ bg: 'primary' }));

  expect(result.current.backgroundColor).toBe(
    morfeo.getTheme()['colors']['primary'],
  );
});
