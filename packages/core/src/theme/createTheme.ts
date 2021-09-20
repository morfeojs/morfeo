import { BreakPoint, Theme, ThemeKey } from '@morfeo/spec';
import { deepMerge } from '../utils';

type ThemeListener = (theme: Theme) => void;

export function createTheme() {
  let context: Theme = {} as any;
  let listeners: [ThemeListener, string][] = [];

  function get() {
    return context;
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

  function isResponsive(value: any): value is object {
    const breakpoints = getSlice('breakpoints');
    if (typeof value === 'object' && breakpoints) {
      const keys = Object.keys(value);
      return keys.some(key => breakpoints[key] !== undefined);
    }

    return false;
  }

  function resolveMediaQuery(breakpoint: BreakPoint) {
    const breakPoints = getSlice('breakpoints');
    const mediaQueries = getSlice('mediaQueries');
    let mediaQuery = mediaQueries[breakpoint];
    if (!mediaQuery) {
      return `@media (min-width: ${breakPoints[breakpoint]})`;
    }

    const breakPointsKey = Object.keys(breakPoints);
    breakPointsKey.forEach(bp => {
      mediaQuery = (mediaQuery as string).replace(`{{${bp}}}`, breakPoints[bp]);
    });

    return mediaQuery;
  }

  function callListeners() {
    listeners.map(([listener]) => listener(context));
  }

  function set(theme: {
    [TK in ThemeKey]?: Partial<Theme[TK]>;
  }) {
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

  function subscribe(callback: ThemeListener, uid?: string) {
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
    isResponsive,
    resolveMediaQuery,
  };

  globalThis.__MORFEO_THEME = theme;

  return theme;
}
