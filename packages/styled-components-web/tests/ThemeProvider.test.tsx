import React from 'react';
import { theme } from '@morfeo/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '../src';
import 'jest-styled-components';

describe('ThemeProvider', () => {
  test('should match the snapshot', () => {
    const tree = renderer.create(<ThemeProvider />).toJSON();
    renderer.act(() => {
      theme.set({} as any);
    });
    expect(tree).toMatchSnapshot();
  });
});
