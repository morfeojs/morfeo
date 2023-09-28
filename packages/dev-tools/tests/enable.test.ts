import { enableMorfeoDevTool } from '../src';
import { createMorfeo } from '@morfeo/web';

const morfeo = createMorfeo({
  theme: {
    colors: {
      primary: 'default primary',
    },
  },
});

describe('enableMorfeoDevTool', () => {
  test('should call the window.postMessage callback when the function is called', () => {
    const spyPostMessage = jest.spyOn(window, 'postMessage');

    enableMorfeoDevTool(morfeo);

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
