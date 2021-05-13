import React from 'react';
import { ThemeProvider } from '../src';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { theme } from '@morfeo/web';

describe('ThemeProvider', () => {
  test('should match the snapshot', () => {
    const tree = renderer.create(<ThemeProvider />).toJSON();
    renderer.act(() => {
      theme.set({} as any);
    });
    expect(tree).toMatchSnapshot();
  });
});
