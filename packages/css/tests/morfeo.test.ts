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
