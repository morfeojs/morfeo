import { expandStyles, createMorfeo } from '../src';
import { defaultTheme } from '../src/defaultTheme';

const getClassName = jest.fn(() => 'className');

const morfeo = createMorfeo();

describe('expandStyles', () => {
  beforeEach(() => {
    morfeo.theme.set({
      ...defaultTheme,
      components: {
        Box: {
          style: {
            bg: 'whatever',
          },
        },
      },
    } as any);
  });

  it('should expand a style', () => {
    const result = expandStyles(
      morfeo,
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
      morfeo,
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
      morfeo,
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
      morfeo,
      {
        componentName: 'Box',
      },
      { getClassName },
    );

    expect(result).toEqual({ bg: 'className' });
  });
});
