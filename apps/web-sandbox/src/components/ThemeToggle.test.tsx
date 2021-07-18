import { theme } from '@morfeo/react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle';

const dark = {
  colors: {
    primary: 'black',
  },
} as any;

const light = {
  colors: {
    primary: 'white',
  },
} as any;

beforeEach(() => {
  theme.reset();
  theme.set(light);
});

test('should be light by default', () => {
  render(<ThemeToggle light={light} dark={dark} />);
  const button = screen.getByText(/🌙/i);
  expect(button).toBeDefined();
  expect(theme.getValue('colors', 'primary')).toBe('white');
});

test('should switch the theme to `dark` after the click', () => {
  render(<ThemeToggle light={light} dark={dark} />);
  const button = screen.getByText(/🌙/i);
  fireEvent(
    button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(theme.getValue('colors', 'primary')).toBe('black');
});
