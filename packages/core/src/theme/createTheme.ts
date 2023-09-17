import { Theme, ThemeKey } from '@morfeo/spec';
import { DeepPartial, deepMerge } from '@morfeo/utils';
import { createComponent } from './createComponent';

type ThemeListener = (theme: Theme) => void;

export interface ThemeMetadata {}

export function createTheme() {
  let context: Theme | undefined = undefined;
  let metadata: ThemeMetadata = {};

  let listeners: Record<string | number, ThemeListener> = {};

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

  function callListeners() {
    Object.values(listeners).map(listener => listener(get()));
  }

  function set(theme: DeepPartial<Theme>) {
    context = deepMerge(context || {}, theme) as Theme;
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

  function getSafeUid(uid?: string, suffix = 0): string {
    const safeUid = uid || Object.values(listeners).length.toString();

    const alreadyExists = !!listeners[safeUid];
    if (alreadyExists) {
      return getSafeUid(`${safeUid}-${suffix}`, suffix + 1);
    }

    return safeUid;
  }

  function subscribe(callback: ThemeListener, uid?: string) {
    const safeUid = getSafeUid(uid);
    listeners[safeUid] = callback;
    return safeUid;
  }

  function cleanUp(uid?: string) {
    if (uid) {
      delete listeners[uid];
      return;
    }
    listeners = {};
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
    cleanUp,
    getSlice,
    setSlice,
    getValue,
    setValue,
    subscribe,
    getMetadata,
    setMetadata,
  };

  const component = createComponent(theme);

  return { ...theme, component };
}

export type ThemeHandler = ReturnType<typeof createTheme>;
