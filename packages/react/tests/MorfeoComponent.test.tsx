import React from 'react';
import { morfeo } from '@morfeo/web';
import { render } from '@testing-library/react';
import { MorfeoComponent } from '../src';

const theme = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  components: {
    Box: {
      style: {},
      variants: {},
    },
    Button: {
      tag: 'button',
      style: {
        bg: 'secondary',
      },
      variants: {
        primary: {
          style: { bg: 'primary' },
        },
      },
      props: {
        type: 'button',
      },
    },
  },
} as any;

morfeo.setTheme('default', theme);

describe('MorfeoComponent', () => {
  beforeAll(() => {
    morfeo.setCurrentTheme('default');
  });

  test('should create a button with initial style and props based on the theme', async () => {
    const { getByTestId } = render(
      <MorfeoComponent componentName={'Button' as any} data-testid="button" />,
    );
    const button = getByTestId('button');

    expect(button).toHaveStyle(
      `background-color: ${morfeo.getTheme()['colors']['secondary']}`,
    );
    expect(button).toHaveAttribute('type', 'button');
  });

  test('should handle the variant', async () => {
    const { getByTestId } = render(
      <MorfeoComponent
        componentName={'Button' as any}
        variant={'primary' as any}
        data-testid="button-primary"
      />,
    );
    const button = getByTestId('button-primary');

    expect(button).toHaveStyle(
      `background-color: ${morfeo.getTheme()['colors']['primary']}`,
    );
  });

  test('should create a div if the tag is not specified', async () => {
    const { getByTestId } = render(
      <MorfeoComponent componentName="Box" data-testid="box" />,
    );
    const box = getByTestId('box');

    expect(box.tagName).toBe('DIV');
  });

  test('should append the additional class if specified', async () => {
    const { getByTestId } = render(
      <MorfeoComponent
        componentName="Box"
        data-testid="box"
        className="additional-class"
      />,
    );
    const box = getByTestId('box');

    expect(box.classList).toHaveLength(2);
    expect(box.classList).toContain('additional-class');
  });
});
