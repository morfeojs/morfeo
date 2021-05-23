import React from 'react';
import { theme } from '@morfeo/react';
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
        tag: 'div',
        style: { color: 'primary' },
        props: { 'aria-label': 'default box' },
        variants: {
          primary: {
            tag: 'button',
            style: { color: 'secondary' },
            props: { 'aria-label': 'primary button', type: 'submit' },
          },
          secondary: {
            style: { bg: 'secondary' },
            props: { 'aria-label': 'secondary button', type: 'submit' },
          },
        },
      },
      Text: {
        tag: 'p',
        style: {},
        props: { variant: 'h1' },
        variants: {
          h1: {
            tag: 'h1',
            style: { fontWeight: 'bold' },
          },
        },
      },
      Incomplete: {},
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
  });

  test('should return a component even if default style is not passed', () => {
    // @ts-ignore
    const Box = morfeoStyled.Box();
    const tree = renderer.create(<Box>Test</Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should change component tag if described inside variant', () => {
    const Box = morfeoStyled.Box({ variant: 'primary' });
    const tree = renderer.create(<Box variant="primary">Test</Box>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveProperty('type', 'button');
  });

  test('should have the component tag of the parent component', () => {
    const Box = morfeoStyled.Box({});
    const tree = renderer
      .create(<Box variant={'secondary' as any}>Test</Box>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveProperty('type', 'div');
  });

  test('should set the default variant and tag based on theme props', () => {
    // @ts-ignore
    const Text = morfeoStyled.Text({});
    const tree = renderer.create(<Text>Test</Text>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveProperty('type', 'h1');
  });

  test('should not be a component if the tag is invalid', () => {
    const InvalidComponent = morfeoStyled.prototype;
    expect(typeof InvalidComponent).not.toBe('function');
  });

  test('should render a div if the component is missing information about the tag', () => {
    // @ts-ignore
    const Incomplete = morfeoStyled.Incomplete({});
    const tree = renderer.create(<Incomplete />).toJSON();
    expect(tree).toHaveProperty('type', 'div');
  });
});
