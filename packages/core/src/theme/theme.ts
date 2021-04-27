import { Theme, ThemeKey } from '@morfeo/spec';
import { deepMerge } from '../utils';

type ThemeListener = (theme: Theme) => void;

function createTheme() {
  let context: Theme = {} as any;
  let listeners: ThemeListener[] = [];

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

  function callListeners() {
    listeners.map(listener => listener(context));
  }

  function set(theme: Partial<Theme>) {
    context = deepMerge(context, theme) as Theme;
    callListeners();
  }

  function setSlice<T extends ThemeKey>(slice: T, value: Partial<Theme[T]>) {
    set({ [slice]: value });
  }

  function setValue<T extends ThemeKey, K extends keyof Theme[T]>(
    slice: T,
    key: keyof Theme[T],
    value: Theme[T][K],
  ) {
    setSlice(slice, { [key]: value } as any);
  }

  function reset() {
    context = {} as Theme;
    callListeners();
  }

  function listen(callback: ThemeListener) {
    listeners.push(callback);
  }

  return {
    get,
    set,
    reset,
    listen,
    getSlice,
    setSlice,
    getValue,
    setValue,
  };
}

export const theme = createTheme();
