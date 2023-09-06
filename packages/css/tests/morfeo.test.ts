import { morfeo } from '../src';

describe('morfeo.css', () => {
  it('should return the css classes based on the passed styles', () => {
    const result = morfeo.css({
      button: {
        bg: 'accent',
      },
    });

    expect(result('button')).toEqual('bg-accent');
  });

  it('should return the passed class in case the string is not a key of the passed object', () => {
    const result = morfeo.css({});

    expect(result('className')).toEqual('className');
  });

  it('should be possible to access the expanded style', () => {
    const result = morfeo.css({
      button: {
        bg: 'accent',
      },
    });

    expect(result.button).toEqual({
      bg: 'bg-accent',
    });
  });

  it('should not do anything in case another accessible property is called', () => {
    const result = morfeo.css({
      button: {
        bg: 'accent',
      },
    });

    expect(result.name).toEqual(expect.anything());
  });
});

describe('morfeo.global', () => {
  it('should not return anything when global is executed', () => {
    expect(morfeo.global({})).toBeUndefined();
  });
});
