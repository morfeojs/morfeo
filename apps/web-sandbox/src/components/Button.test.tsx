import { theme } from '@morfeo/react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

beforeAll(() => {
  theme.set({
    colors: {
      primary: 'blue',
    },
    components: {
      Button: {
        style: {
          bg: 'primary',
        },
      },
    },
  } as any);
});

test('should have the style defined inside the theme', () => {
  render(<Button>Button test</Button>);
  const button = screen.getByText(/Button test/i);
  expect(button).toHaveStyle('background-color: blue');
});
