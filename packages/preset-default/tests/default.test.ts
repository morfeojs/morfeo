import { morfeo } from '@morfeo/core';
import { initPreset } from '../src';

describe('preset-default', () => {
  beforeAll(() => {
    initPreset();
  });

  it('should set the current theme equals to light', () => {
    expect(morfeo.getCurrent()).toEqual('light');
  });

  it('should have set 2 themes, dark and light', () => {
    const themes = morfeo.getThemes();
    expect(Object.keys(themes)).toEqual(['light', 'dark']);
  });
});
