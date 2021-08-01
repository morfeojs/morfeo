import { morfeo } from '@morfeo/react';
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

morfeo.addTheme('light', light);
morfeo.addTheme('dark', dark);

beforeEach(() => {
  morfeo.useTheme('light');
});

test('should be light by default', () => {
  render(<ThemeToggle />);
  const button = screen.getByText(/🌙/i);
  expect(button).toBeDefined();
  expect(morfeo.getTheme()['colors']['primary']).toBe('white');
});

test('should switch the theme to `dark` after the click', () => {
  render(<ThemeToggle />);
  const button = screen.getByText(/🌙/i);
  fireEvent(
    button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(morfeo.getTheme()['colors']['primary']).toBe('black');
});
