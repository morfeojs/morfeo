import { morfeo } from '../src';

describe('morfeo.css', () => {
  it('should throw an exception in case `css` is executed', () => {
    expect(() => morfeo.css({})).toThrow();
  });
});

describe('morfeo.component', () => {
  it('should throw an exception in case `component` is executed', () => {
    expect(() => morfeo.component('button', {})).toThrow();
  });
});

describe('morfeo.global', () => {
  it('should throw an exception in case `global` is executed', () => {
    expect(() => morfeo.global({})).toThrow();
  });
});
