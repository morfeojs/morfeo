import { expandStyles } from '../src/utils/expandStyles';

const getClassName = jest.fn(() => 'className');

describe('expandStyles', () => {
  it('should expand a style', () => {
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
});
