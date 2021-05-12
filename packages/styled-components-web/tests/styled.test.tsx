import React from 'react';
import { theme } from '@morfeo/web';
import morfeoStyled from '../src';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

beforeAll(() => {
  theme.set({
    colors: {
      primary: 'black',
      secondary: 'white',
    },
    components: {
      Box: {
        style: { color: 'primary', componentTag: 'div' },
        props: { 'aria-label': 'test' },
      },
    },
  } as any);
});

describe('morfeoStyled', () => {
  test('should work as the default styled interface', () => {
    const Button = morfeoStyled.button`
      color: red;
    `;
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', 'red');
  });

  test('should resolve values from the theme if CSSObject is passed', () => {
    const Box = morfeoStyled.Box({});
    const tree = renderer.create(<Box>Test</Box>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('color', 'black');
  });

  test('should resolve values passed from props', () => {
    // @ts-ignore
    const Box = morfeoStyled.Box();
    const tree = renderer.create(<Box bg="secondary">Test</Box>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('backgroundColor');
  });

  test('should not be a component if the tag is invalid', () => {
    const InvalidComponent = morfeoStyled.prototype;
    expect(typeof InvalidComponent).not.toBe('function');
  });
});
