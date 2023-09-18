import { Theme, ThemeKey } from '@morfeo/spec';
import { DeepPartial, deepMerge } from '@morfeo/utils';
import { createComponent } from './createComponent';

type ThemeListener = (theme: Theme) => void;
type ThemeParser = (theme: DeepPartial<Theme>) => DeepPartial<Theme>;

export interface ThemeMetadata {}

export function createTheme() {
  let context: Theme | undefined = undefined;
  let metadata: ThemeMetadata = {};

  const listeners = new Set<ThemeListener>();
  const parsers = new Set<ThemeParser>();

  function get() {
    return context || ({} as Theme);
  }

  function getSlice<T extends ThemeKey>(slice: T) {
    return get()[slice] || {};
  }

  function getValue<T extends ThemeKey, K extends keyof Theme[T]>(
    slice: T,
    key: K,
  ): Theme[T][K] {
    return getSlice(slice)[key];
  }

  function notifyListener() {
    for (const listener of listeners) {
      listener(get());
    }
  }

  function callParsers(theme: DeepPartial<Theme>) {
    let result = theme;
    for (const parser of parsers) {
      result = parser(result);
    }
    return result;
  }

  function set(theme: DeepPartial<Theme>) {
    context = callParsers(deepMerge(context || {}, theme)) as Theme;
    notifyListener();
  }

  function reset() {
    context = {} as Theme;
    notifyListener();
  }

  function subscribe(callback: ThemeListener) {
    listeners.add(callback);

    return function cleanUp() {
      listeners.delete(callback);
    };
  }

  function onSetTheme(callback: ThemeParser) {
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

  const component = createComponent(theme);

  return { ...theme, component };
}

export type ThemeHandler = ReturnType<typeof createTheme>;
