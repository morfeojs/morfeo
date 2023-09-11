import { enableMorfeoDevTool } from '../src';
import { morfeo } from '@morfeo/web';

describe('enableMorfeoDevTool', () => {
  beforeAll(() => {
    morfeo.theme.set({
      colors: {
        primary: 'default primary',
      },
    });
  });

  test('should call the window.postMessage callback when the function is called', () => {
    const spyPostMessage = jest.spyOn(window, 'postMessage');

    enableMorfeoDevTool();

    expect(spyPostMessage).toHaveBeenCalled();
  });

  test('should call the window.postMessage callback when the theme change', () => {
    const spyPostMessage = jest.spyOn(window, 'postMessage');

    morfeo.theme.set({
      colors: {
        primary: 'updated value',
      },
    });

    expect(spyPostMessage).toHaveBeenCalled();
  });
});
