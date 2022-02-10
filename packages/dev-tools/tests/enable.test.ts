import { enableMorfeoDevTool } from '../src';
import { morfeo, ThemeName } from '@morfeo/web';

describe('enableMorfeoDevTool', () => {
  beforeAll(() => {
    morfeo.setTheme('default', {
      colors: {
        primary: 'default primary',
      },
    });
    morfeo.setTheme('light' as ThemeName, {
      colors: {
        primary: 'light primary',
      },
    });
    morfeo.setTheme('dark' as ThemeName, {
      colors: {
        primary: 'dark primary',
      },
    });
    morfeo.setCurrentTheme('default');
  });

  test('should call the window.postMessage callback when the function is called', () => {
    const spyPostMessage = jest.spyOn(window, 'postMessage');

    enableMorfeoDevTool();

    expect(spyPostMessage).toHaveBeenCalled();
  });

  test('should call the window.postMessage callback when the theme change', () => {
    const spyPostMessage = jest.spyOn(window, 'postMessage');

    morfeo.setCurrentTheme('light' as ThemeName);

    expect(spyPostMessage).toHaveBeenCalled();
  });
});
