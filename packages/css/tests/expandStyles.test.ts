import { morfeo } from '@morfeo/web';
import { expandStyles } from '../src/expandStyles';
import { theme } from './theme';

const getClassName = jest.fn(() => 'className');

describe('expandStyles', () => {
  beforeEach(() => {
    morfeo.setTheme('default', theme);
  });

  it('should expand a style', () => {
    const result = expandStyles(
      {
        bg: 'background',
        '&:hover': {
          bg: 'accent',
        },
      },
      { getClassName },
    );

    expect(result).toEqual({
      bg: 'className',
      '&:hover': {
        bg: 'className',
      },
    });
  });

  it('should expand a style with responsive values', () => {
    const result = expandStyles(
      {
        bg: 'background',
        p: {
          default: 'l',
          md: 'l',
          sm: 'm',
          xs: 'm',
        },
        color: 'accent',
      },
      { getClassName },
    );

    expect(result).toEqual({
      bg: 'className',
      p: {
        default: 'className',
        md: 'className',
        sm: 'className',
        xs: 'className',
      },
      color: 'className',
    });
  });

  it('should not include an undefined value', () => {
    const result = expandStyles(
      {
        bg: 'background',
        color: undefined,
      },
      { getClassName },
    );

    expect(result).toEqual({
      bg: 'className',
    });
  });

  it('should expand a style containing a componentName', () => {
    const result = expandStyles(
      {
        componentName: 'Box',
      },
      { getClassName },
    );

    expect(result).toEqual({ bg: 'className' });
  });
});
