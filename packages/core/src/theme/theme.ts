import { Theme, ThemeKey } from '@morfeo/spec';

type ThemeListener = (theme: Theme) => void;

function createTheme() {
  let context: Theme = {} as any;
  let listener: ThemeListener = () => undefined;

  function get() {
    return context;
  }

  function getSlice<T extends ThemeKey>(slice: T) {
    return context[slice] || {};
  }

  function getValue<T extends ThemeKey, K extends keyof Theme[T]>(
    slice: T,
    key: K,
  ): Theme[T][K] {
    return getSlice(slice)[key];
  }

  function set(theme: Partial<Theme>) {
    context = { ...context, ...theme };
    listener(context);
  }

  function reset() {
    context = {} as Theme;
  }

  function listen(callback: ThemeListener) {
    listener = callback;
  }

  return {
    get,
    set,
    reset,
    listen,
    getSlice,
    getValue,
  };
}

export const theme = createTheme();
