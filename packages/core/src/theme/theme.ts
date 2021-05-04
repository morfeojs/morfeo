import { Theme, ThemeKey } from '@morfeo/spec';
import { deepMerge } from '../utils';

type ThemeListener = (theme: Theme) => void;

function createTheme() {
  let context: Theme = {} as any;
  let listeners: [ThemeListener, string][] = [];

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
    listeners.map(([listener]) => listener(context));
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

  function getSafeUid(uid?: string, suffix: number = 0): string {
    const listenersCount = listeners.length;
    const safeUid = uid || listenersCount.toString();

    const alreadyExists = listeners.find(
      ([_, listenerUid]) => listenerUid === safeUid,
    );
    if (alreadyExists) {
      return getSafeUid(`${safeUid}-${suffix}`, suffix + 1);
    }

    return safeUid;
  }

  function listen(callback: ThemeListener, uid?: string) {
    const safeUid = getSafeUid(uid);
    listeners.push([callback, safeUid]);
    return safeUid;
  }

  function cleanUp(uid?: string) {
    if (uid) {
      listeners = listeners.filter(([_, listenerUid]) => uid !== listenerUid);
      return;
    }
    listeners = [];
  }

  return {
    get,
    set,
    reset,
    listen,
    cleanUp,
    getSlice,
    setSlice,
    getValue,
    setValue,
  };
}

export const theme = createTheme();
