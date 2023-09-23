import React from 'react';
import { createMorfeo } from '@morfeo/web';
import { renderHook } from '@testing-library/react';
import { useStyle, MorfeoProvider } from '../src';

const theme = {
  colors: {
    primary: 'black',
  },
} as any;

const morfeo = createMorfeo(theme);

test('should generate the correct style with the override of `useStyle`', async () => {
  const { result } = renderHook(() => useStyle({ bg: 'primary' }), {
    wrapper: props => <MorfeoProvider instance={morfeo} {...props} />,
  });

  expect(result.current.backgroundColor).toBe(
    morfeo.theme.getValue('colors', 'primary'),
  );
});
