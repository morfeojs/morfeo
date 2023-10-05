import { Theme } from '@morfeo/spec';
import { deepMerge } from '@morfeo/utils';
import { createComponent } from './createComponent';

type ThemeListener<T extends Partial<Theme>> = (theme: T) => void;
type ThemeParser<T extends Partial<Theme>> = (theme: T) => T;

export interface ThemeMetadata {}

export function createTheme<T extends Partial<Theme>>(
  initialTheme?: T,
): ThemeHandler<T> {
  let context: T | undefined = initialTheme as T;
  let metadata: ThemeMetadata = {};

  const listeners = new Set<ThemeListener<T>>();
  const parsers = new Set<ThemeParser<T>>();

  function get() {
    return context || ({} as T);
  }

  function getSlice<TK extends keyof T>(slice: TK): T[TK] {
    return get()[slice] || ({} as T[TK]);
  }

  function getValue<TK extends keyof T, K extends keyof T[TK]>(
    slice: TK,
    key: K,
  ): T[TK][K] {
    return getSlice(slice)[key];
  }

  function notifyListener() {
    for (const listener of listeners) {
      listener(get());
    }
  }

  function callParsers(theme: Partial<T>) {
    let result = theme;
    for (const parser of parsers) {
      result = parser(result as T);
    }
    return result;
  }

  function set(theme: Partial<T>) {
    context = callParsers(deepMerge(context || {}, theme)) as T;
    notifyListener();
  }

  function reset() {
    context = {} as T;
    notifyListener();
  }

  function subscribe(callback: ThemeListener<T>) {
    listeners.add(callback);

    return function cleanUp() {
      listeners.delete(callback);
    };
  }

  function onSetTheme(callback: ThemeParser<T>) {
    parsers.add(callback);

    return function cleanUp() {
      parsers.delete(callback);
    };
  }

  function getMetadata() {
    return metadata;
  }

  function setMetadata(data: ThemeMetadata) {
    metadata = data;
  }

  const theme = {
    get,
    set,
    reset,
    getSlice,
    getValue,
    subscribe,
    onSetTheme,
    getMetadata,
    setMetadata,
  };

  const component = createComponent<T>(theme);

  return { ...theme, component };
}

export type ThemeHandler<T extends Partial<Theme>> = {
  get: () => T;
  set: (theme: Partial<T>) => void;
  reset: () => void;
  getSlice: <TK extends keyof T>(slice: TK) => T[TK];
  getValue: <TK extends keyof T, TV extends keyof T[TK]>(
    slice: TK,
    value: TV,
  ) => T[TK][TV];
  subscribe: (callback: ThemeListener<T>) => () => void;
  onSetTheme: (callback: ThemeParser<T>) => () => void;
  getMetadata: () => ThemeMetadata;
  setMetadata: (data: ThemeMetadata) => void;
  component: ReturnType<typeof createComponent<T>>;
};
