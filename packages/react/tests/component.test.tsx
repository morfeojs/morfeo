import React from 'react';
import { render, screen } from '@testing-library/react';
import { morfeo } from '../src';

const THEME = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  breakpoints: {
    xs: '400px',
    sm: '600px',
    md: '800px',
    lg: '1000px',
  },
  mediaQueries: {},
  components: {
    Button: {
      tag: 'button',
      style: {
        bg: 'secondary',
      },
      variants: {},
      props: {
        'data-morfeo': 'button',
      },
    },
  },
} as any;

morfeo.theme.set(THEME);

test('should render a custom component by passing an html tag and a valid style', () => {
  const Component = morfeo.component('div', {
    bg: 'primary',
  });

  render(<Component data-testid="morfeo-component" />);

  const renderedComponent = screen.getByTestId('morfeo-component');

  expect(renderedComponent.tagName).toBe('DIV');
  expect(renderedComponent.classList).toContain('bg-primary');
});

test('should render a custom component by resolving a component name', () => {
  // @ts-expect-error
  const Component = morfeo.component('Button', {});

  render(<Component data-testid="morfeo-component" />);

  const renderedComponent = screen.getByTestId('morfeo-component');

  expect(renderedComponent.tagName).toBe('BUTTON');
  expect(renderedComponent.classList).toContain('bg-secondary');
  expect(renderedComponent.dataset).toHaveProperty('morfeo', 'button');
});

test('should inject the className to custom component', () => {
  const BaseComponent = ({ className }: { className?: string }) => (
    <span className={className} data-testid="morfeo-component" />
  );

  const Component = morfeo.component(BaseComponent, {
    bg: 'primary',
  });

  render(<Component />);

  const renderedComponent = screen.getByTestId('morfeo-component');

  expect(renderedComponent.tagName).toBe('SPAN');
  expect(renderedComponent.classList).toContain('bg-primary');
});

test('should resolve function from properties', () => {
  const Component = morfeo.component('div', {
    bg: (props: any) => props.bg,
    display: (props: any) => props.display,
  });

  render(
    <Component bg="primary" display="flex" data-testid="morfeo-component" />,
  );

  const renderedComponent = screen.getByTestId('morfeo-component');

  expect(renderedComponent.tagName).toBe('DIV');
  expect(renderedComponent.classList).toContain('bg-primary');
  // @ts-ignore
  expect(renderedComponent).toHaveStyle('--display: flex');
});
